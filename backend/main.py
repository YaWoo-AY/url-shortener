from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import database, models, crud

app = FastAPI()

# Create tables
models.Base.metadata.create_all(bind=database.engine)

# Dependency for database session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/shorten/")
def shorten_url(original_url: str, db: Session = Depends(get_db)):
    short_url = crud.create_short_url(db, original_url)
    return {"shortened_url": f"http://localhost:8000/{short_url.short_code}"}

@app.get("/{short_code}")
def redirect_url(short_code: str, db: Session = Depends(get_db)):
    url_entry = crud.increment_click(db, short_code)
    if not url_entry:
        raise HTTPException(status_code=404, detail="URL not found")
    return {"original_url": url_entry.original_url}

@app.get("/stats/{short_code}")
def get_url_stats(short_code: str, db: Session = Depends(get_db)):
    url_entry = crud.get_url(db, short_code)
    if not url_entry:
        raise HTTPException(status_code=404, detail="URL not found")
    return {"short_code": short_code, "original_url": url_entry.original_url, "clicks": url_entry.click_count}
