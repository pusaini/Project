import React from 'react'
import { PUBLIC_URL } from '../../Constant/Url'

function MovieCard({ allMovieData, loading }) {
    return (
        <>
            {/* <div>MovieCard</div> */}
            <div>

                {loading ? <div className='flex justify-center'>
                    <img className='w-16 py-20' src='https://i.gifer.com/ZZ5H.gif'></img>
                    </div>:
                    <div className='main flex flex-wrap px-4 lg:px-10'>
                    {allMovieData.map((item, index) => {
                        const { Poster, Title, Year} = item;
                        return (
                            <div key={index} className='child p-2 lg:w-1/4 w-full '>
                                <div className='sub_child bg-[#40407a] p-3 rounded-2xl'>
                                    <img className='w-full rounded-lg mb-2' src={Poster} alt=''></img>
                                    <h2 className='text-white text-xl font-bold'>{Title}</h2>
                                    <h2 className='text-white text-xl mb-2 '>Year : {Year}</h2>
                                </div>
                            </div>
                        )
                    })}


                </div>
                    }
                
            </div>

        </>
    )
}

export default MovieCard