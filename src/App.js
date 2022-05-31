import './App.css';
import AddBooks from './Components/AddBooks';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className='container'>
      <BookContextProvider>
         <Navbar />
         <BookList />
         <AddBooks />
      </BookContextProvider>
    </div>

  );
}

export default App;
