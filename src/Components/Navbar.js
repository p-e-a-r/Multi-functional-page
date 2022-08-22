import React, { useContext, useState } from "react";
import '../Styling/Navbar.css'
import cart from '../Images/cart.png'
import CartContext from "../Context/CartContext";


const Navbar = () =>{

    const {cartItems, showHideCart} = useContext(CartContext)

    /*const [isHover, setHover] = useState(true)

    const handleHover = () => {
        setHover(false)
    }
    const handleOut = () => {
        setHover(true)
    }*/


    return(
        <div className="navbar-container">
            <div className="menu-list-container">
                <ul className="list">
                    <li className="list-item"><a href='#' className='list-item-a'>Discover</a></li>
                    <li className="list-item"><a href='learn' className='list-item-a'>Learn</a></li>
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
               
                <button className="cart" /*onMouseOver={handleHover} onMouseOut={handleOut}*/onClick={showHideCart} ><a href="cart" className="a" ><img className="cart-img" src={cart} />
                {cartItems.length > 0 && <div className="item_count">
                        <span>
                            {cartItems.length}
                            </span>
                        </div>}</a></button>
                <button className="login"><a href="/login" className="a">login</a></button>
                <button className="register"><a href="/register">register</a></button>
            </div>
       
        </div>
    )
}

export default Navbar