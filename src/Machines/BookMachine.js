import {Machine} from "xstate"

const bookMachiine = new Machine(
    {
        id: "bookMachine",
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
      action: {
        deleleBook: (_context, event) => console.log(event),
        saveNewBook: (_context, event) => console.log(event),
      },
    },
);

export default bookMachiine;