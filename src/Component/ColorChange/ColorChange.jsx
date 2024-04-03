import React, { useState } from 'react'
import Header from '../Layout/Header'
import Callback from './Callback'
import "./ColorChange.css"
function ColorChange() {
const[UIcolor, setUIcolor]=useState(null)

function GetColor(color){
    setUIcolor(color)
}
  return (
    <>
     <Header/>
    <div className='divSize' style={{background:`${UIcolor}`}}>ColorChange</div>
    <Callback GetColor={GetColor}/>
    </>
   
  )
}

export default ColorChange