import React, { createContext, useEffect } from "react";
import { useMachine } from "@xstate/react";
import bookMachiine from "../Machines/BookMachine";

export const BookContext = createContext();

const saveBooksToLocalStorage = (books) => {
  localStorage.setItem("hook_reading_list", JSON.stringify(books));
};

const BookContextProvider = (props) => {
  const [current, send] = useMachine(bookMachiine);

  const { books } = current.context;

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);

  return (
    <BookContext.Provider value={{ books, send, current }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
