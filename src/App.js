import React from 'react';
import PopularMovieGrid from './components/PopularMovieGrid';
import SearchMovieGrid from './components/SearchMovieList';
import Header from './layout/Header';
import StyledApp from './StyledApp';

  function App(){
    console.log(process.env.REACT_APP_SECRET_KEY)
    return (
      <StyledApp>
        <Header />
        <PopularMovieGrid />
        <SearchMovieGrid />
      </StyledApp>
    );
  }

export default App;
