import React, {useState} from "react";
import Wheel from "./Wheel";
import '../Styling/Newsletter.css'
import Footer from '../Components/Footer'

const Newsletter = () =>{

    const [opacity, setOpacity] = useState(0)

    const [inputValue, setInputValue] = useState("")
    
    let regEx = new RegExp('@.+')

    const updateValue = (e) => {
        let val = e.target.value
        setInputValue(val)
    }

    const checkEmail = () => {
        if(regEx.test(inputValue)){
            alert("Thank you for subscribing!")
        }else{
            setOpacity(1)
        }
    }

    return(
        <div className="newsletter-container">
            
             <div className="wheel-container">
                <Wheel />
            </div> 
            <div className="newsletter-card">
                <h1>Sign up to our newsletter!</h1>
                <p className="get-news">Get the latest news</p>
                <input className="input" placeholder="e-mail" value={inputValue} onChange={updateValue}></input>
                <button className="sign-up-btn" onClick={checkEmail}>Sign up</button>
                <p className="error-text" style={{opacity}}>Please enter valid email</p>
            </div>
            
        </div>
    )
}

export default Newsletter