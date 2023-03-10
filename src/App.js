import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './SitePage/Home/home';
import MovieList from './Components/moiveList/movieList';
import Movie from './SitePage/movieDetails/movieDetails';


function App() {
  return (
    <div className="App">
      <Router> 
        < Header />

        <Routes>
          <Route index element={< Home />}></Route>
          <Route path='movie/:id' element={< Movie />}></Route>
          <Route path='movies/:type' element={< MovieList />}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
        
     </Router>
    </div>
  );
}

export default App;
