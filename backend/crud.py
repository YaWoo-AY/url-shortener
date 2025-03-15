from sqlalchemy.orm import Session
from . import models
import random, string

def generate_short_code():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=6))

def create_short_url(db: Session, original_url: str):
    short_code = generate_short_code()
    db_url = models.URL(short_code=short_code, original_url=original_url, click_count=0)
    db.add(db_url)
    db.commit()
    db.refresh(db_url)
    return db_url

def get_url(db: Session, short_code: str):
    return db.query(models.URL).filter(models.URL.short_code == short_code).first()

def increment_click(db: Session, short_code: str):
    url_entry = get_url(db, short_code)
    if url_entry:
        url_entry.click_count += 1
        db.commit()
    return url_entry
