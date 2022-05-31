import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/BookContext'

const AddBooks = () => {
    const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch({type: 'ADD_BOOK', book: {title,author}
    })
       setTitle('')
       setAuthor('')
    }
    return (
       <form action="" className='form' onSubmit={handleSubmit}>
           <span>
               <label htmlFor="novel-name">Name of novel</label>
               <input type="text" id='novel-name' value={title} onChange={(e)=> setTitle(e.target.value)} required />
           </span>
           <span>
              <label htmlFor="author">Author</label>
              <input type="text" id='author' value={author} onChange={(e)=> setAuthor(e.target.value)} required />
           </span>
           <button type="submit">Add Book</button>
       </form>
    )
}

export default AddBooks
