# URL Shortener

A simple URL shortener built using **React.js** (frontend) and **Node.js with Express** (backend). This application allows users to enter a long URL and get a shortened version, which can be used to redirect to the original URL.

## Features

- Generate short URLs from long URLs
- Redirect to the original URL when accessing the short link
- Simple and clean UI with React
- Backend API using Express
- In-memory URL storage (can be extended with a database)

## Tech Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Libraries:** shortid (for generating short URLs), CORS

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

### 3. Run the Application

#### Start Backend Server

```bash
cd backend
node server.js
```

The backend runs on [**http://localhost:5000**](http://localhost:5000).

#### Start Frontend React App

```bash
cd frontend
npm start
```

The frontend runs on [**http://localhost:3000**](http://localhost:3000).

---

## API Endpoints

### Shorten a URL

**POST /api/shorten**

- **Request Body:** `{ "url": "https://example.com" }`
- **Response:** `{ "shortenedUrl": "http://localhost:5000/abc123" }`

### Redirect to Original URL

**GET /\*\*\*\*****:shortId**

- Redirects to the original URL stored in the backend.

---

## How to Use

1. Enter a long URL in the input field on the frontend.
2. Click the **Shorten URL** button.
3. Copy the generated short URL and use it.
4. Access the short URL in the browser, and it will redirect to the original URL.

---

## Future Improvements

- Use a database (MongoDB, PostgreSQL) instead of in-memory storage.
- Add user authentication for managing shortened links.
- Implement analytics to track URL visits.
- Deploy to cloud platforms (Heroku, Vercel, AWS, etc.).

---

## License

This project is licensed under the **MIT License**.

---

## Author

[Andrew Yang](https://github.com/YaWoo-AY)

---

Feel free to contribute or suggest improvements! 🚀

