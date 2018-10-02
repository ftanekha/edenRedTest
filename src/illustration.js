import React from 'react';

const Illustration = (props)=>{
    const book = props.book;

    return(
        <div className='parent column is-4'>
            <div className='box'>
                <div className='card-image'>
                    <figure className='image is-4by3'>
                        <img src={book.img} alt={book.title} /> 
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='media'>
                        <div className='media-content'>
                            <p className='title is-6'><b>Title:</b> {book.title}</p>
                            <p className='subtitle is-6'> <b>Artist:</b> {book.artist}</p>
                        </div>
                     </div>
                    <div className='content'>
                    
                    <p><b>Author:</b> {book.author}</p>
                        <p><b>Country:</b> {book.country}</p>
                        <p> <b>Book:</b> {book.book}</p>
                        <p className='description child has-background-white-ter has-text-justified has-text-weight-light is-size-6'>{book.description}</p>
                    </div>
                 </div>
            </div>
        </div>
    )   
}

export default Illustration;