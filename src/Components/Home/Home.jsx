import React,{useEffect} from 'react';
import '../Home/Home.css';


const Home=()=>{
    useEffect(()=>{
        document.title='E-Adda ~Home'
    },[])
    return(
        <div className='homeMessage'>
            <h1 className='headline'>Welcome to the world of possiblities.</h1>
        </div>
    )
}
export default Home;