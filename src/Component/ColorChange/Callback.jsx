import React, { useState } from 'react'


function Callback({ GetColor }) {

    const [activeColor, setActiveColor] = useState()
    function handleChange(e) {
        const { value } = e.target;
        setActiveColor(value)
        GetColor(value)
    }
    return (
        <>
            <div>Enter Color</div>
        
            <input type='text' id='input' aria-label='input'placeholder='Pls text color' onChange={handleChange} value={activeColor} />
        </>

    )
}

export default Callback