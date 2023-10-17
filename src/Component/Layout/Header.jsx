import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (

        <>
            

            <nav
                class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                    <div class="ml-2">
                        <ul className='flex space-x-4 '>
                            <li className='mb-4 lg:mb-0 lg:pr-2 '>
                                <Link class="text-xl font-semibold text-orange-500 dark:text-neutral-200"
                                    to="/">Home</Link>
                            </li>
                            <li className='mb-4 lg:mb-0 lg:pr-2 '>
                                <Link class="text-xl font-semibold text-orange-500 dark:text-neutral-200"
                                    to="/project">Project</Link>
                            </li>
                            <li  className='mb-4 lg:mb-0 lg:pr-2'>
                                <Link class="text-xl font-semibold text-orange-500 dark:text-neutral-200"
                                    to="/calculator">Calculator</Link>
                            </li>
                            <li  className='mb-4 lg:mb-0 lg:pr-2'>
                                <Link class="text-xl font-semibold text-orange-500 dark:text-neutral-200"
                                    to="/carousel"> Carousel</Link>
                            </li>
                            <li  className='mb-4 lg:mb-0 lg:pr-2'>
                                <Link class="text-xl font-semibold text-orange-500 dark:text-neutral-200"
                                    to="/imageImport"> ImageImport</Link>
                            </li>
                            <li  className='mb-4 lg:mb-2 lg:pr-2'>
                                <Link class="text-xl font-semibold text-orange-500 dark:text-neutral-200"
                                    to="/darkAndLightMode">DarkAndLightMode</Link>
                            </li>
                            <li  className='mb-4 lg:mb-2 lg:pr-2'>
                                <Link class="text-xl font-semibold text-orange-500 dark:text-neutral-200"
                                    to="/movieSearching">MovieSearching</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
