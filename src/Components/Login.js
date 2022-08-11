import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/Login.css'

export default function Login() {
  return (
    <div>
          <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
        <div className='login-container'>
            <div className='login-card'>
                <input className='username-input' placeholder='username'/>
                <input type="password" className='password-input' placeholder='password'/>
                <button className='login-btn'>Log In</button>
                <Link to='/register' className='register-link'>Register</Link>
            </div>  
        </div>
    </div>
   
  )
}
