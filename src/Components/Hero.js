import React from "react";
import HeroImg from '../Images/HeroImg.jpg'
import '../Styling/Hero.css'
import Arrow from '../Images/arrowdown.png'


const Hero = () => {

    const scroll = () => {
        window.scrollTo({
            top:1000,
            behavior: 'smooth'
        })
    }


    return(
        <div className="hero-container">
            <h1 className="hero-main-title"><span className="hero-span">UNLEASH</span> YOUR PASSION.</h1>
            <div className="orange-box">
                
            </div>
            <button className="arrow-btn" onClick={scroll}><img src={Arrow} /></button>
            <div className="hero-text-container">
                <h2 className="hero-title">LOREM IPSUM</h2>
                <p className="hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris sem enim, ultrices in elementum vitae, cursus sed velit. 
                Mauris felis magna, imperdiet quis elementum vestibulum, blandit et nulla. 
                Cras sed laoreet arcu.
                </p>
            </div>
            <div className="hero-img-container">
                <img className="hero-img" src={HeroImg} alt="#"/>
            </div>
            
        </div>
    )
}

export default Hero;