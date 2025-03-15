import os

from dotenv import load_dotenv

# Load environment variables from .env file (optional)
load_dotenv()

# Database URL (PostgreSQL or SQLite)
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./shortener.db")

# Server Settings
BASE_URL = os.getenv("BASE_URL", "http://localhost:8000")

# Security Settings (for future enhancements)
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")
