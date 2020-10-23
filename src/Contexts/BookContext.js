import React, { createContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

const saveBooksToLocalStorage = (books) => {
  localStorage.setItem('hook_reading_list', JSON.stringify(books));
};
const getBooksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('hook_reading_list')) || [];
};


const bookContextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, { id: uuid(), ...action.book }];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

const BookContextProvider = (props) => {

  const [books, dispatchBookState] = useReducer(bookContextReducer, [], getBooksFromLocalStorage);

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatchBookState }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
