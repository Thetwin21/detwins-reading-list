import { useContext } from "react"
import { BookContext } from "../Context/BookContext";

const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="nav">
            <h1>Detwins Reading List</h1>
            <p>There are {books.length} books in your list</p>
        </div>
    )
}

export default Navbar
