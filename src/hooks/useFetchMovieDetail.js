import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
import { API_BASE_URL } from '../config'

const useFetchMovieDetail = (movieId) => {
    const [movieDetail, setMovieDetail] = useState({
        movie: [],
        genres: [],
        languages: [],
        countries: []
    })

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchMovieDetail = useCallback((endpoint) => {
        setError(false)
        setLoading(true)
        Axios.get(endpoint)
            .then(res => {
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
    }, [])
    useEffect(() => {
        fetchMovieDetail(`${API_BASE_URL}movie/${movieId}?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`)
    }, [movieId, fetchMovieDetail])

    return [{ movieDetail, error, loading }, fetchMovieDetail]
}

export default useFetchMovieDetail
