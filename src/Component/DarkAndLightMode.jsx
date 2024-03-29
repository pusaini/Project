import React, { useState } from "react";
import Header from "./Layout/Header";

export default function DarkAndLightMode() {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17,24,39)'
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }

    }

    return (
        <>
            <Header />
            <div >
                <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="text-xl font-bold text-center py-5"> This is Dark And Light Mode Button</h2>

                <div className="flex justify-center items-center h-screen">

                    {mode === 'light' ? (<button onClick={toggleMode} className="bg-gray-300 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    </button>) : (<button onClick={toggleMode} className="bg-gray-300 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>

                    </button>
                    )}


                </div>
            </div>
        </>
    )
}