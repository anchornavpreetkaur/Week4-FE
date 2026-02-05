import React, { useState } from "react";
import "./App.css";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
          className="input-field"
        />
      </div>
    </div>
  );
}

export default BookCollectionManager;