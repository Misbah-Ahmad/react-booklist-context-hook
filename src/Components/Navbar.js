import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../Contexts/BookContext";
import { bookMachiineEvents } from "../Machines/BookMachine";

const linkStyle = {
  color: "#fff",
};

const Navbar = (props) => {
  const { books, send} = useContext(BookContext);

  return (
    <div className="navbar">
      <h2>Reading List</h2>
      <p>You have {books.length} book(s)</p>
      <ul className="right nav-ul">
        <li>
          <Link onClick={() => send(bookMachiineEvents.SEE_BOOK_LIST)} style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => send(bookMachiineEvents.ADD_NEW_BOOK)} style={linkStyle} to="/add-book">
            Add New Book
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
