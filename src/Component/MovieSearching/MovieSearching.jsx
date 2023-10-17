import React, { useState } from 'react'
import NavbarMovieSearching from './NavbarMovieSearching'
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'
import Header from '../Layout/Header'
import './MovieSearching.css';


function MovieSearching() {

    const [allMovieData, setAllMovieData] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchMovieData = async () => {
        try {
            setLoading(true)
            const res = await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=16ba7b17`)
            const data = await res.json();
            setAllMovieData(data.Search)
            console.log(data.Search)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    return (

        <>
            <Header />
            <NavbarMovieSearching />
            <div className='bg'>

                <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/>
                <MovieCard allMovieData={allMovieData} loading={loading} />

            </div>

        </>

    )
}

export default MovieSearching