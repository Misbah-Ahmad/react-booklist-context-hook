import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import Book from "./Book";

const BookList = (props) => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to Read...</div>
  );
};

export default BookList;
