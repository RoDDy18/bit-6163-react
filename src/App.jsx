import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContactApp from "./phone/ContactApp";
import MovieApp from "./movie/MovieApp";
import MovieDetail from "./movie/MovieDetail";
import BookApp from "./book/BookApp";
import BookDetail from "./book/BookDetail";

function App() {
 return(
  <div>
      <Router>
        <Routes>
          <Route path="/contacts" element={<ContactApp/>}/>
          <Route path="/movies" element={<MovieApp/>}/>
          <Route path="/movies/:movieId" element={<MovieDetail/>}/>
          <Route path="/books" element={<BookApp/>}/>
          <Route path="/books/:bookId" element={<BookDetail/>}/>
        </Routes>
      </Router>
  </div>
 )
}

export default App;
