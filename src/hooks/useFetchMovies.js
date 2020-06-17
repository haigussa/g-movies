import { useEffect, useState } from 'react';
import axios from 'axios'

const useFetchMovies = endpoint => {
    const [state, setState] = useState({ movies: [], backgroundImage:"" })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            setError(false)
            axios.get(endpoint)
                .then(res => {
                    // console.log(res.data)
                    setState(prev => ({
                        ...prev,
                        movies: res.data.results,
                        totalPages: res.data.total_pages, 
                        backgroundImage: (res.data.results[0]!==undefined) ? res.data.results[0].backdrop_path : null
                        
                    }))
                })
        } catch (error) {
            setError(true)
            console.log(error)
        }
        setLoading(false)
        }, [endpoint])
    return [{ state, error, loading }]
}

export default useFetchMovies;