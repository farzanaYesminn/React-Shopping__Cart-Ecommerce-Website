import React, { useContext } from 'react'
import  {ShopContext}  from '../../context/ShopContextProvider';
import './cart.css';

const CartItem = (props) => {

const {id, productName, price, productImage} = props.data;

const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage} />

        <div className="desription">
           <h4>
            {productName}
           </h4>
           <h5>
            {price}
           </h5>

           <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>

            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value) , id)}/>

            <button onClick={() => addToCart(id)}> + </button>

           </div>

        </div>
    </div>
  )
}

export default CartItem