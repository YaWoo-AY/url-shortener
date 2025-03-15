import React, { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle the URL shortening
  const handleUrlShorten = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
  
      const data = await response.json();
      setShortUrl(data.shortenedUrl); // Assuming the API returns a field called shortenedUrl
    } catch (error) {
      console.error("Error shortening URL:", error);
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <div className="url-container">
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleUrlShorten} disabled={loading}>
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </div>
      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
