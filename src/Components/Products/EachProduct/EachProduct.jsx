import React from 'react';
import '../EachProduct/EachProduct.css';
import {Link} from 'react-router-dom';

const EachProduct=(props)=>{
    const {product}=props
    
    const {id,title,category,description,image,price,rating}=product
  
    return (
        <div className='mainAll'>
            <div className='eachProduct'>
                <img src={product.image} alt='image'/>
                <strong>Title: {title}</strong>
                <strong>Category: {category}</strong>
                
            </div>
            <div className='viewMore'>
                <Link className='btn btn-info m-2 w-50 text-center ' to={`/products-info/${id}`} state={product}>View More</Link>
            </div>
        </div>
    )
}

export default EachProduct;