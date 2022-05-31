import react, { useContext } from "react"
import { BookContext } from "../Context/BookContext"

const BookDetails = ({book}) => {
    const { dispatch } = useContext(BookContext)
    
    return (
        <li className="bookDetails" onClick={(() => dispatch({type: 'REMOVE_BOOK',id: book.id}) )}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <span className="tool-tip">click to delete</span>
        </li>
        
    )
}

export default BookDetails
