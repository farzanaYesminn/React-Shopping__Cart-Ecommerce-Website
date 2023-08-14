import React, { useContext } from 'react'
import ProductList from '../../ProductList'
import  {ShopContext}  from '../../context/ShopContextProvider';
import CartItem from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount() 

  const navigate = useNavigate()


  return (
    <div className='cart'>
        <div> 
          <h1> Your Cart Items</h1>
        </div>
        <div className="carItems">
          {ProductList.map(product => {
            if (cartItems[product.id] !== 0){
               return <CartItem data={product} key={product.id}/>;
            }
            return null;
          })}


        {totalAmount > 0 ?  

         <div className="CartBTN">
            <p> Subtotal: ${totalAmount}</p>

            <button className="ContinueShopping" onClick={() => navigate("/")}> Continue Shopping </button>

            <button className="checkout"> Checkout </button>
          </div>
          
        :
        
        <h1> Your Cart is Empty</h1>
          }
          
        </div>
    </div>
  )
}

export default Cart