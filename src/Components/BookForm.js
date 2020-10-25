import React, { useContext, useState } from 'react';
import { BookContext } from '../Contexts/BookContext';
import { bookMachiineEvents } from '../Machines/BookMachine';

const BookForm = () => {

    const { send, current } = useContext(BookContext);
  
    if (current.matches("show_book")) {
        send(bookMachiineEvents.ADD_NEW_BOOK);
    }

    const [title, setTitle] = useState('');

    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {title, author};
        send(bookMachiineEvents.SAVE_NEW_BOOK, {book});
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Author Name" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book"/>
        </form>
     );
}

export default BookForm;