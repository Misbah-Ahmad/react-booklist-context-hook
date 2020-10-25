import { Machine } from "xstate";
import { v4 as uuid } from "uuid";
const bookMachiine = new Machine(
  {
    id: "bookMachine",
    context: {
      books: [],
    },
    initial: "show_book",
    states: {
      show_book: {
        on: {
          ADD_NEW_BOOK: "book_form",
          DELETE_BOOK: {
            actions: ["deleleBook"],
          },
        },
      },
      book_form: {
        on: {
          SAVE_NEW_BOOK: {
            actions: ["saveNewBook"],
          },
          SEE_BOOK_LIST: {
            target: "show_book",
          },
        },
      },
    },
  },
  {
    actions: {
      deleleBook: (context, {id}) => {
        context.books = context.books.filter(book => book.id !== id);
      },
      saveNewBook: (context, {book}) => {
        context.books = [...context.books, { id: uuid(), ...book },];
      },
    },
  }
).withContext({
  books: JSON.parse(localStorage.getItem("hook_reading_list")) || [],
});

export const bookMachiineEvents = {
  ADD_NEW_BOOK: "ADD_NEW_BOOK",
  DELETE_BOOK: "DELETE_BOOK",
  SAVE_NEW_BOOK: "SAVE_NEW_BOOK",
  SEE_BOOK_LIST: "SEE_BOOK_LIST",
};

export default bookMachiine;