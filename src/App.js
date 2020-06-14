import React from 'react';
import PopularMovieGrid from './components/PopularMovieGrid';
import SearchMovieGrid from './components/SearchMovieList';
import Header from './layout/Header';

function App() {
  console.log(process.env.REACT_APP_SECRET_KEY)
  return (
    <div className="App">
      <Header/>
      <PopularMovieGrid/>
      <SearchMovieGrid/>
    </div>
  );
}

export default App;
