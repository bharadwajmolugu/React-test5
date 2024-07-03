import React, {useState,useEffect}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import axios from 'axios';


import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Products from './Components/Products/Products';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import EachProduct from './Components/Products/EachProduct/EachProduct';
import ProductInfo from './Components/ProductsInfo/ProductsInfo';
import PageNotFound from './Components/PageNotFound/PageNotFound';

const App=()=>{

  const [products,setProducts]=useState([])

  useEffect(()=>{
    const data=async ()=>{
      const allProducts=await axios.get('https://fakestoreapi.com/products')
      setProducts(allProducts.data)
    }
    data();
  },[])




  return (
<BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/products' element={<Products products={products}/ >}/>
      <Route path='/products-info/:id' element={<ProductInfo/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
</BrowserRouter>
  )
}

export default App;