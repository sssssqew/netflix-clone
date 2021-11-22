import React, { useState, useEffect } from 'react'
import { Movie, Loading } from 'components'

import './Home.css'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    useEffect( () => {
        fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
        .then( res => res.json())
        .then( result => {
            const {data: {movies}} = result
            console.log(movies)
            setLoading(false)
            setMovies(movies)
        })
    }, [])

    const homeUI = movies.map(movie => <Movie 
                                        key={movie.id} 
                                        title={movie.title} 
                                        genres={movie.genres} 
                                        cover={movie.medium_cover_image} 
                                        summary={movie.summary}
                                       />
                                    )

    return (
        <>
            {loading? <Loading/>: <div className='Home-container'><div className='Home-movies'>{homeUI}</div></div>}
        </>
    )
}

export default Home