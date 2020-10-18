import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const Navbar = (props) => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h2>Reading List</h2>
      <p>You have {books.length} book(s)</p>
    </div>
  );
};

export default Navbar;
