import React, {useContext, useState} from 'react'
import products from './Products'
import '../Styling/Shop.css'
import Bag from '../Images/Bag.jpg'
import CartContext from '../Context/CartContext'


export default function Shop() {

    
  const [product, setProduct] = useState(products)

  const filterResult = (catProduct) => {
    const result = products.filter((curDate) => {
      return curDate.category === catProduct
    })
    setProduct(result)
  }


  const {addToCart} = useContext(CartContext)

  return (
    <div className='shop'>
      <div className='catBtns'>
        <button className='catBtn'onClick={() => setProduct(products)}>All</button>
        <button className='catBtn'onClick={() => filterResult('Music')} >Music</button>
        <button className='catBtn'onClick={() => filterResult('Instruments')}>Instruments</button>
        <button className='catBtn'onClick={() => filterResult('Merch')}>Merch</button>
      </div>
      <div className='item-cont'>
      {product.map((products) => {
          return (
            <div className='item-card product'>
              <h4>{products.itemName}</h4>
              <img className='item-img' src={Bag} alt=""/>
              <p className='item-description'>{products.description}</p>
              <p>{products.price}</p>
              <button className='add-to-cart-btn' onClick={ () => addToCart(products)}>Add to cart</button>
              
            </div>
          )
        })}
      </div>
    </div>
    
  )
  
}
 