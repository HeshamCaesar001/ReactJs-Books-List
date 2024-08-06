import React, { useState } from "react";
import { useBooksContext } from "../hooks/use-books-context";
function BookEdit({ book, onSubmit }) {
  const [title, setTilte] = useState(book.title);
  const {editBook} = useBooksContext()
  const handleChange = (e) => {
    setTilte(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBook(book.id,title)
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          className="input"
          onChange={handleChange}
          value={title}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
