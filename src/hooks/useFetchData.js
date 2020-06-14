import { useEffect, useState } from 'react';
import axios from 'axios'

// import React, {useEffect} from 'react'

const useFetchData = endpoint => {
    const [state, setState] = useState({ movies: [] })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    // const fetchMovies = () => {
        try {
            setLoading(true)
            setError(false)
            axios.get(endpoint)
                .then(res => {
                    // const movieList = res.data.results
                    // return movieList
                    // console.log(movieList)
                    
                    setState(prev => ({
                        ...prev,
                        movies: res.data.results,
                        totalPages: res.data.total_pages
                        
                    }))
                    console.log(state)
                })


        } catch (error) {
            setError(true)
            console.log(error)

        }
        console.log(state.movies)
        setLoading(false)
    // }

        // fetchMovies(endPoint)
        // return () => {
        //     cleanup
        // }
    }, [endpoint])
    return [{ state, error, loading }]
}


//     fetchData(BASE_URL)
//     // return () => {
//         //     cleanup
//         // }
//     }, [])


export default useFetchData;