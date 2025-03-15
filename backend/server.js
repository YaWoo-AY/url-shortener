const express = require('express');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
const port = 5000;

// Use CORS to allow requests from frontend
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database (for demo purposes)
let urlDatabase = {};

// Route to shorten the URL
app.post('/api/shorten', (req, res) => {
  const { url } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Generate a short ID for the URL
  const shortId = shortid.generate();
  
  // Save the original URL in memory with the generated short ID
  urlDatabase[shortId] = url;
  
  // Return the shortened URL
  const shortUrl = `http://localhost:${port}/${shortId}`;
  
  res.json({ shortenedUrl: shortUrl });
});

// Route to redirect to the original URL
app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  
  // Retrieve the original URL using the short ID
  const originalUrl = urlDatabase[shortId];
  
  if (!originalUrl) {
    return res.status(404).json({ error: 'Short URL not found' });
  }
  
  // Redirect to the original URL
  res.redirect(originalUrl);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
