import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./Contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={BookList} />
            <Route path="/add-book" component={BookForm} />
          </Switch>
        </BrowserRouter>
      </BookContextProvider>
    </div>
  );
}

export default App;
