import React from 'react'
import Header from '../Layout/Header'

function Project() {
  return (
    <>
      <Header />
      <div className="w-screen h-screen flex items-start  md:grid-cols-2">
        <div className='w-full h-full  bg-slate-400  flex justify-center align-middle md:h-screen'>01</div>
        <div className='w-full h-full  bg-slate-700  flex justify-center align-middle md:h-screen'>02</div>


      </div>
    </>

  )
}

export default Project