import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
       
        <img src={productImage}/>
       <div className="description">

        <h3>{productName}</h3>
        <h5>${price}</h5>

       </div>
        
        <button className='addToCartBttn' onClick={() => addToCart(id)}> 
        Add To Cart { cartItemAmount > 0 && <>({cartItemAmount})</> }
        </button>

    </div>
  )
}

export default Product