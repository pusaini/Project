import React, { useState } from 'react'
import Header from './Layout/Header'
import { Menu } from '../Constant/Url';


function Carousel() {

    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === Menu.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? Menu.length - 1 : current - 1);
    }

    return (
        <>
            <Header />
            <div className=" text-center text-stone-700">Carousel</div>

            <div className='flex justify-evenly items-center p-5 h-screen'>
                <div className='left_arrow bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer' onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </div>

                <div className='image'>
                    {Menu.map((item, index) => {

                        const { id, images } = item;

                        //   console.log(id,images)
                        return (
                            current === index && (<div key={id} className=' slide flex  justify-center'><img className='w-[80%] rounded-2xl' src={images} alt='img'></img></div>)

                        )
                    }
                    )}
                </div>

                <div className='right_arrow  bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer' onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>

            </div>


        </>

    )
}

export default Carousel