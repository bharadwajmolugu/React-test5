import React, {useEffect} from 'react';
import './Products.css'
import EachProduct from '../Products/EachProduct/EachProduct';

const Products=(props)=>{

    useEffect (()=>{
        document.title='E-Adda ~Products'
    },[])
    const {products}=props;
    const productsData=products.map((product,index)=><EachProduct key={index} product={product}/>)
    return (
        <div>
            <h3 className='text-center'>List of all products</h3>
            <div className='allProducts'>
                {productsData}
            </div>
            
        </div>
    )
}

export default Products;