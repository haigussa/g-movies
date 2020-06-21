import { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'

const useFetchCredits = (movieId) => {
    const [credits, setCredits] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchCredits = useCallback((endpoint) => {
        Axios.get(endpoint)
            .then(res => {
                setLoading(true)
                setCredits(res.data.cast)
                console.log(res.data.cast)
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
    return [{ credits, error, loading }, fetchCredits]
}

export default useFetchCredits
