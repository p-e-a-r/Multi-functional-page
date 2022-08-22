import {useReducer, userReducer} from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM} from './Types'

const CartState = ({children}) => {

    const initialState = {
        showCart: false,
        cartItems: []
    }

    const [state, dispatch] = useReducer(CartReducer,
        initialState)

    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item})
    }

    const showHideCart = (e) => {
        dispatch({type: SHOW_HIDE_CART})
       e.preventDefault()
    }

    const removeItem = id => {
        dispatch({type: REMOVE_ITEM, payload: id})
    }

    return(
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showHideCart,
            removeItem
        }}>
           {children} 
        </CartContext.Provider>
    )
}

export default CartState