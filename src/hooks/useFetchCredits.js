import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

const useFetchCredits = (movieId) => {
    const [casts, setCasts] = useState([])
    const [crews, setCrews] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchCredits = useCallback((endpoint) => {
        Axios.get(endpoint)
            .then(res => {
                console.log(res.data)
                setLoading(true)
                setCasts(res.data.cast)
                setCrews(res.data.crew)
            }).catch(err => {
                setLoading(false)
                setError(true)
                console.log(err)
            }
            )
        setLoading(false)
        setError(false)
    }, [])
    useEffect(() => {
        fetchCredits(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=716b3f0b5027135ac51ac9d6da4b4698`)
    }, [movieId, fetchCredits])
    return [{ casts, crews, error, loading }, fetchCredits]
}

export default useFetchCredits