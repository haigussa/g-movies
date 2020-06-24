import { useState, useEffect, useCallback } from 'react'
import { API_BASE_URL } from '../config'
import Axios from 'axios'

const useFetchCredits = (movieId) => {
    const [casts, setCasts] = useState([])
    const [crews, setCrews] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchCredits = useCallback((endpoint) => {
        Axios.get(endpoint)
            .then(res => {
                setLoading(true)
                setCasts(res.data.cast)
                setCrews(res.data.crew)
            }).catch(err => {
                setLoading(false)
                setError(true)
                console.log(err)
            })
        setLoading(false)
        setError(false)
    }, [])
    useEffect(() => {
        fetchCredits(`${API_BASE_URL}movie/${movieId}/credits?api_key=${process.env.REACT_APP_SECRET_KEY}`)
    }, [movieId, fetchCredits])
    return [{ casts, crews, error, loading }, fetchCredits]
}

export default useFetchCredits