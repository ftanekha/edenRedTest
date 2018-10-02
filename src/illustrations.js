import React from 'react';
import Illustration from './illustration';

const Illustrations = (props)=>{
    const books = props.books;
    const bookList = books.map(book=>{
        return <Illustration book={book} />
    });
    return (
            <div className='columns is-multiline'>
                {bookList}
            </div>
            )
}

export default Illustrations;