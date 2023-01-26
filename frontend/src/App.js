import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import BookList from './component/BookList';
import AddBook from './component/AddBook';
import Home from './component/Home';
import Register from './component/Register';
import SignIn from './component/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<AddBook />}/>
        <Route path="/book" element={<BookList />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
