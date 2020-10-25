import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import { bookMachiineEvents } from "../Machines/BookMachine";

const Book = ({ book }) => {
  const { send } = useContext(BookContext);

  return (
    <li onClick={() => send(bookMachiineEvents.DELETE_BOOK, {id: book.id})}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default Book;
