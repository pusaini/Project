'use client';
import React, { useState } from 'react'
import Header from "../Layout/Header";
import { PUBLIC_URL } from '../../Constant/Url';
import "./RockPaperScissors.css"


export default function RockPaperScissors() {

// const choices= document.querySelectorAll(".choice");

// choices.forEach((choice)=>{
//     console.log(choice);
//     choice.addEventListener("click",()=>{

//     })

// })

    return (
        <>
            <Header />
            <h1>RockPaperScissors</h1>
            <div className='choices'>
                <div className='choice' id='rock'><img src={`${PUBLIC_URL}rock.jpg`}></img></div>
                <div className='choice' id='paper'> <img src={`${PUBLIC_URL}paper.jpg`}></img></div>
                <div className='choice' id='scissors'><img src={`${PUBLIC_URL}scissors.jpg`}></img></div>

            </div>

            <div className="score-board">
                <div className="score">
                    <p id='user-score'>0</p>
                    <p>You</p>
                </div>
                <div className="score">
                    <p id='comp-score'>0</p>
                    <p>Comp</p>
                </div>
            </div>
            <div className="msg-container">
                <p id='msg'>Play your move</p>
            </div>

        </>
    )
}