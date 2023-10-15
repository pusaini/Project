import React from 'react'
import { PUBLIC_URL } from '../Constant/Url'
import Header from './Layout/Header'

function ImageImport() {
  return (
    <>
    <Header/>
     <div>ImageImport</div>
     <img src={`${PUBLIC_URL}3.jpg`}></img>
    
    </>
   
  )
}

export default ImageImport