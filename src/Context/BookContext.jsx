import React, { createContext , useEffect, useReducer } from 'react'
import { bookReducer } from '../Reducer/bookReducer';
export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
       const localStorageData = localStorage.getItem('books');
       return localStorageData ? JSON.parse(localStorageData) : []
    })
    useEffect(() => {
       localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    
    return ( 
        <BookContext.Provider value={{books , dispatch}}>
           {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
