import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const { books } = useContext(BookContext)
    return  books.length ? (
        <div className='booklist'>
            <ul>
            {books.map(book => (
                <BookDetails book={book} key={book.id}/>
            ))}
            
            </ul>
        </div>
    ) : (
        <div className='empty'>
            <h3>No Books Available</h3>
            <p>You're free today , add a book and keep learning</p>

        </div>
    )
}

export default BookList
