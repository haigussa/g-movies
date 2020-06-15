import React from 'react';
import PopularMovieGrid from './components/PopularMovieGrid';
// import SearchMovieGrid from './components/SearchMovieList';
import Header from './layout/Header';
import StyledApp from './StyledApp';
import Footer from './layout/Footer';

  function App(){
    console.log(process.env.REACT_APP_SECRET_KEY)
    return (
      <StyledApp>
        <Header />
        <PopularMovieGrid />
        {/* <SearchMovieGrid /> */}
        <Footer/>
      </StyledApp>
    );
  }

export default App;
