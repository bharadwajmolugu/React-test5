import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import '../Products/EachProduct/EachProduct';
import './ProductsInfo.css'

const ProductInfo=()=>{

    const {state}=useLocation();
    const {id,title,category,description,image,price,rating}=state; 

    return (
      <div className='productInfo'>
        <h1>PRODUCT INFORMATION</h1>
        <div className='eachImage'>
          
            <img src={image} alt='image'/>
            <strong>Title: {title}</strong>
            {/* <strong>Category: {category}</strong> */}
        </div>
        <div >
          <p className='m-3'>Description: {description}</p>
          <h5 className='price'>Price: ${price}</h5>
        </div>
        <div className="rating">
          <h5>Rating: {rating.rate}</h5>
          <h5>Rated users: {rating.count}</h5>
        </div>
        <div className='cart'>
            <Link to='/PageNotFound'  className='text-decoration-none btn btn-primary'>Add to Cart</Link>
            <Link to='/PageNotFound' className='text-decoration-none btn btn-secondary'>Buy Now</Link>
        </div>
      </div>
    );
}

export default ProductInfo;