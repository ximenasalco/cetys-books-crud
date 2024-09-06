import React, { useState, useEffect } from "react";

function BookForm({ addBook, updateBook, editingBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(()=>{
    if (editingBook){
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editingBook){
      updateBook({editingBook, title, author});
    }else{
      addBook({title, author});
    }
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button type="submit">{editingBook ? "Update Book" : "Add Book"}Add Book</button>
    </form>
  );
}

export default BookForm;
