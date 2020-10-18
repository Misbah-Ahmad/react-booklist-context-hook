import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const Book = ({ book }) => {
  const { dispatchBookState } = useContext(BookContext);

  return (
    <li onClick={() => dispatchBookState({type: 'REMOVE_BOOK', id: book.id})}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default Book;
