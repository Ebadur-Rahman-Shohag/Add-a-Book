import React from "react";
import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Book Name</label>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          type="text"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
