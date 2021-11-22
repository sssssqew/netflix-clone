import React, { useState, useEffect } from 'react'
import { Movie, Loading } from 'components'

import { Input, Button } from 'components'
import './Home.css'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')
    const [isSorted, setIsSorted] = useState(-1)
    

    useEffect( () => {
        fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
        .then( res => res.json())
        .then( result => {
            const {data: {movies}} = result
            console.log(movies)
            setLoading(false)
            setMovies(movies)
        })
    }, [])

    const handleChange = (e) => {
        const { value } = e.target
        setQuery(value)
    }

    const sortByYear = (e) => {
        setIsSorted(isSorted * -1)
    }

    const homeUI = movies
                        .filter(movie => {
                            const title = movie.title.toLowerCase()
                            const genres = movie.genres.join(' ').toLowerCase()
                            const q = query.toLowerCase()
                        
                            return title.includes(q) || genres.includes(q)
                        })
                        .sort( (a, b) => {
                            return (b.year - a.year) * isSorted;
                        })
                        .map(movie => <Movie 
                                        key={movie.id} 
                                        title={movie.title} 
                                        genres={movie.genres} 
                                        cover={movie.medium_cover_image} 
                                        summary={movie.summary}
                                        year={movie.year}
                                       />
                                    )

    return (
        <>
            {loading? <Loading/>: <div className='Home-container'>
                                    <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
                                    <Button handleClick={sortByYear}>정렬</Button>
                                    <div className='Home-movies'>{homeUI}</div>
                                  </div>}
        </>
    )
}

export default Home