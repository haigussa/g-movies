import React, { useState } from "react";
import MovieCard from "./MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import StyledMovieGrid, {
  StyledTitle,
  StyledHeroTitle,
} from "../styles/StyledMovieGrid";
import StyledButton, { StyledPageEndAnchor } from "../styles/StyledButton";
import StyledForm from "../styles/StyledForm";
import NoPhotoAvailable from "../NoPhotoAvailable.png";
import NoBackground from "../NoBackground.png";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import NotFound from "./NotFound";
import { API_BASE_URL, IMG_BASE_URL } from "../config";

const PopularMovieGrid = () => {
  const [searchMovies, setSearchMovies] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchText, setSearchText] = useState("");

  let endPoint = searchMovies
    ? `${API_BASE_URL}search/movie?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`
    : `${API_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&page=${page}`;

  const [{ state, error, loading }] = useFetchMovies(endPoint);

  const handlePageChange = (prevPage) => {
    setPage((prevPage += 1));
    window.scrollTo(0, 0);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchText);
    setSearchText("");
    setSearchMovies(true);
  };

  const movieList = state.movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        releaseDate={movie.release_date}
        rating={movie.vote_average}
        plot={movie.overview}
        imgSrc={
          movie.poster_path
            ? `${IMG_BASE_URL}w154/${movie.poster_path}`
            : `${NoPhotoAvailable}`
        }
      />
    );
  });
  if (!error && !loading && state.totalPages >= 1) {
    return (
      <>
        {searchMovies ? (
          <StyledTitle>Search Result</StyledTitle>
        ) : (
          <StyledTitle>Popular Movies</StyledTitle>
        )}
        <StyledForm
          onSubmit={handleSubmitSearch}
          bgImage={
            state.backgroundImage
              ? `${IMG_BASE_URL}w1280/${state.backgroundImage}`
              : NoBackground
          }
        >
          {!searchMovies ? (
            <input
              type="text"
              id="searchTerm"
              placeholder="Search for a movie..."
              onChange={handleChange}
              value={searchText}
            />
          ) : (
            <StyledHeroTitle>{state.movies[0].title}</StyledHeroTitle>
          )}
        </StyledForm>
        <StyledMovieGrid>{movieList}</StyledMovieGrid>
        {state.totalPages > page ? (
          <StyledButton onClick={() => handlePageChange(page)}>
            {" "}
            More{" "}
          </StyledButton>
        ) : (
          <StyledPageEndAnchor href="/">
            <StyledButton>Go back</StyledButton>
          </StyledPageEndAnchor>
        )}
      </>
    );
  } else if (loading) {
    return <LoadingPage />;
  } else if (error) {
    return <ErrorPage />;
  } else if (state.status === 200 && state.totalPages === 0) {
    return <NotFound />;
  } else {
    return null;
  }
};

export default PopularMovieGrid;

