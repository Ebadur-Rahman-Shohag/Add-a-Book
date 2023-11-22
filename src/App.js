import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };

  const createBook = (title) => {
    console.log(title);
    setBooks([
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ]);

    // Bad code
    //books.push({id:1,title:title})
    //setBooks(books)
  };
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
