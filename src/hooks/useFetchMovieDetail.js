import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

const useFetchMovieDetail = (movieId) => {
    const [movieDetail, setMovieDetail] = useState({
        movie: [],
        genres: [],
        languages: [],
        countries: []
    })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchMovieDetail = useCallback(() => {
        
        setError(false)
        setLoading(true)
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US`)
            .then(res => {
                // console.log(res.data)
                // console.log(res)
                setMovieDetail(prev => ({
                    ...prev,
                    movie: res.data,
                    genres: res.data.genres,
                    languages: res.data.spoken_languages,
                    countries: res.data.production_countries
                }))
            }).catch(err => {
                setError(true)
                setLoading(false)
                console.log(err)
            })
        setLoading(false)
        setError(false)
    }, [movieId])
    useEffect(() => {
        fetchMovieDetail(`https://api.themoviedb.org/3/movie/${movieId}?api_key=716b3f0b5027135ac51ac9d6da4b4698&language=en-US`)
    }, [movieId, fetchMovieDetail])

    return [{ movieDetail, error, loading }, fetchMovieDetail]
}

export default useFetchMovieDetail
