import { useContext } from "react";
import CartContext from "../Context/CartContext";

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)
    return <li>
        <img src={item.img} alt=""/>
        <div>
            {item.itemName}{item.price}
        </div>
        <button className="remove-item" onClick={ () => removeItem(item.id)}></button>
    </li>
}

export default CartItem