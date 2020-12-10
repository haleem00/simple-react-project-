import React from 'react';
import "./Herosecrion.css"

function Herosecrion() {
    return (
        <div className="hero-container">
            <video src="./videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for ?</p>
            <div className="hero-btns">
                <button className="btn1">GET STARTED</button>
                <button className="btn2">WATCH TRAILER <i className="far fa-play-circle"></i></button>
            </div>
        </div>
    )
}

export default Herosecrion

