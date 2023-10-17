import React from 'react'

function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
    return (
        <>
            {/* <div>SearchBar</div> */}
            <div className="main flex justify-center py-5 px-4">
                <input type="text" className='rounded-l-lg w-80 bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black' placeholder='Search' value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} />

                <button onClick={fetchMovieData} className='rounded-r-lg  bg-[#40407a] shadow-md px-4 text-white border-b-2 border-t-2 border-r-2  border-gray-500 '>Search</button>
            </div>

        </>
    )
}

export default SearchBar