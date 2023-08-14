import React from 'react';
import ProductList from '../../ProductList';
import Product from './Product';
import './shop.css';

const Shop = () => {
  return (
    <div className='shop'>
        <div className="shopTitle">
            <h1> TECHNO</h1>
        </div>
        <div className="products">
        {ProductList.map(product =>(
                <Product data={product}/>
            ))}
        </div>
        
    </div>
  )
}

export default Shop