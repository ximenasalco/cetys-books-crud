import React from "react";

function BookList({ books, deleteBook }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
