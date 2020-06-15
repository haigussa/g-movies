import { useEffect, useState } from 'react';
import axios from 'axios'

const useFetchData = endpoint => {
    const [state, setState] = useState({ movies: [], backgroundImage:"" })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            setError(false)
            axios.get(endpoint)
                .then(res => {
                    console.log(res.data)
                    setState(prev => ({
                        ...prev,
                        movies: res.data.results,
                        totalPages: res.data.total_pages, 
                        backgroundImage: (res.data.results[0]!==undefined) ? res.data.results[0].backdrop_path : null
                        
                    }))
                    console.log(state)
                })
        } catch (error) {
            setError(true)
            console.log(error)

        }
        console.log(state.movies)
        setLoading(false)
    
    }, [endpoint])
    return [{ state, error, loading }]
}

export default useFetchData;