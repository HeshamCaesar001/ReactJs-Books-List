import React, { useState} from "react";
import { useBooksContext } from "../hooks/use-books-context";

function BookCreate() {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
