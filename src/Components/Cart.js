import React, {useContext} from 'react'
import '../Styling/Cart.css'
import CartContext from '../Context/CartContext'
import CartItem from './CartItem'


export default function Cart() {

  const {showCart, cartItems, showHideCart} = useContext(CartContext)

  return <>
    {showCart && (
      <div className='cart-cont'>
        <i style = {{cursor: 'pointer'}} onClick={showHideCart}/>
        <div className='cart-items'>
          {cartItems.length === 0 ? (<h4>Cart is empty</h4>) : 
          (
            <ul>
              {cartItems.map(item => (
                <CartItem key={item._id} item={item}/>
              ))}
            </ul>
          )}
        </div>
        <div className='cart-total'>
          <div>Total</div>
          <div>{cartItems.reduce((amount, item) => item.price + amount, 0)}</div>
        </div>
      </div>
    )}
  </> 

}
