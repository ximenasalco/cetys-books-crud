import React from "react";

function BookList({ books, deleteBook, startEditingBook }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          {book.title} by {book.author}
          <button onClick={() => startEditingBook(book)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
