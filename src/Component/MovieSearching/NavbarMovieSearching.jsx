import React from 'react'
import { PUBLIC_URL } from '../../Constant/Url'

function NavbarMovieSearching() {
    return (
        <>
            {/* <div>NavbarMovieSearching</div> */}
            <div className="main lg:flex md:flex sm:flex-wrap justify-between items-center px-4 py-4 bg-[#40407a] shadow-md sticky top-0">

                <div className="left flex items-center space-x-3 justify-center">
                    <img className='w-10' src={`${PUBLIC_URL}vite.svg`} alt='img'></img>
                    <h2 className='font-bold text-2xl text-white'>MovieMasala</h2>
                </div>

                <div className="right">
                    <ul className='flex space-x-4 text-white justify-center'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Service</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default NavbarMovieSearching