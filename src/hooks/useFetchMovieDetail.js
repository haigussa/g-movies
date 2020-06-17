import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

const useFetchMovieDetail = (movieId) => {
    const [movie, setMovie] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchMovieDetail = useCallback(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US`)
            .then(res => {
                setMovie(res.data)
                // console.log(res.data)
            }).catch(err=>console.log(err))

    },[movieId])
    useEffect(() => {
        fetchMovieDetail(`https://api.themoviedb.org/3/movie/${movieId}?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US`)
    }, [movieId,fetchMovieDetail])

    return [{ movie, error, loading }, fetchMovieDetail]
}

export default useFetchMovieDetail
