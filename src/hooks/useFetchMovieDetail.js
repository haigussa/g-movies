import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

const useFetchMovieDetail = (movieId) => {
    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])
    const [languages, setLanguages] = useState([])
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchMovieDetail = useCallback(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US`)
            .then(res => {
                setMovie(res.data)
                setGenres(res.data.genres)
                setLanguages(res.data.spoken_languages)
                setCountries(res.data.production_countries)
            }).catch(err=>console.log(err))

    },[movieId])
    useEffect(() => {
        fetchMovieDetail(`https://api.themoviedb.org/3/movie/${movieId}?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US`)
    }, [movieId,fetchMovieDetail])

    return [{ movie, genres, languages, countries, error, loading }, fetchMovieDetail]
}

export default useFetchMovieDetail
