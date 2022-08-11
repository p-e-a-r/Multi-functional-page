import React, {useState} from "react";
import '../Styling/Wheel.css'
import arrow from '../Images/arrowcircle.png'

const Wheel = () => {

    const [name, setName] = useState('circle')
    
    const spin = () => {
        setName("circle active-circle")
        setTimeout(()=>{
            setName("circle active-circle stop-rotate")
        }, Math.floor(Math.random()*1000)+300)
    }
   
    return(
        <div className="wheel-container">
            <h1 className="key">KEY PRACTICE RANDOMIZER</h1>
            <img className="arrow" src={arrow}></img>
            <button  className = "btn" id="btn" onClick={spin} >click</button>
        
            <ul id="circle" className={name}>
                <li className="circle-li">
                    <div id="text" className="text">C</div>
                </li>
                <li className="circle-li">
                    <div className="text">G</div>
                </li>
                <li className="circle-li">
                    <div className="text">D</div>
                </li>
                <li className="circle-li">
                    <div className="text">A</div>
                </li>
                <li className="circle-li">
                    <div className="text">E</div>
                </li>
                <li className="circle-li">
                    <div className="text">B</div>
                </li>
                <li className="circle-li">
                    <div className="text">Gb</div>
                </li>
                <li className="circle-li">
                    <div className="text">Db</div>
                </li>
                <li className="circle-li">
                    <div className="text">Ab</div>
                </li>
                <li className="circle-li">
                    <div className="text">Eb</div>
                </li>
                <li className="circle-li">
                    <div className="text">Bb</div>
                </li>
                <li className="circle-li">
                    <div className="text">F</div>
                </li>

            </ul>
                
        </div>
    )
}

export default Wheel