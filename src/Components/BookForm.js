import React, { useContext, useState } from 'react';
import { BookContext } from '../Contexts/BookContext';

const BookForm = () => {
    
    const { dispatchBookState } = useContext(BookContext);
    
    const [title, setTitle] = useState('');

    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {title, author};
        dispatchBookState({type: 'ADD_BOOK', book});
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