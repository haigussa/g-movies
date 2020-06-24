import { useEffect, useState } from 'react';
import axios from 'axios'

const useFetchMovies = endpoint => {
    const [state, setState] = useState({
        movies: [],
        backgroundImage: "",
        totalPages: 0,
        status: null
    })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            setError(false)
            axios.get(endpoint)
                .then(res => {
                    setState(prev => ({
                        ...prev,
                        status: res.status,
                        movies: res.data.results,
                        totalPages: res.data.total_pages > 0
                            ? res.data.total_pages
                            : 0,
                        backgroundImage: (res.data.results[0] !== undefined)
                            ? res.data.results[0].backdrop_path
                            : null
                    }))
                    setLoading(false)
                })
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }, [endpoint])
    return [{ state, error, loading }]
}

export default useFetchMovies;