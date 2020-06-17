import React from 'react';
import PopularMovieGrid from './components/PopularMovieGrid';
import Header from './layout/Header';
import StyledApp from './StyledApp';
import Footer from './layout/Footer';
import MovieDetail from './components/movieDetails/MovieDetail';
import { Route } from 'react-router-dom';

function App() {
  return (
    <StyledApp>
      <Header />
      <Route exact path="/" component={PopularMovieGrid} />
      <Route exact path="/movie/:id" component={MovieDetail} />
      <Footer />
    </StyledApp>
  );
}

export default App;
