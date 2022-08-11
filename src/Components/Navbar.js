import React from "react";
import '../Styling/Navbar.css'

const Navbar = () =>{
    return(
        <div className="navbar-container">
            <div className="menu-list-container">
                <ul className="list">
                    <li className="list-item"><a href='#' className='list-item-a'>Discover</a></li>
                    <li className="list-item"><a href='#' className='list-item-a'>Learn</a></li>
                    <li className="list-item"><a href='#' className='list-item-a'>Text</a></li>
                    <li className="list-item"><a href='shop' className='list-item-a'>Shop</a></li>
                </ul>
            </div>
            <div className="logo-container">
                <h1 className="logo">
                    logo.
                </h1>
            </div>
            <div className="user-btns">
                <button className="login"><a href="/login" className="a">login</a></button>
                <button className="register"><a href="/register">register</a></button>
            </div>
       
        </div>
    )
}

export default Navbar