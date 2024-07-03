import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header=()=>{
    return(
        <div className='home d-flex justify-content-around align-items-center'>
            <div>
                <h3><Link className='text-decoration-none' to='/'>E-Adda</Link></h3>
            </div>
            <div className='d-flex mt-3'>
                <ul className='d-flex list-unstyled ms-3 justify-content-end align-items-end'>
                    <li className='ms-3 '><Link className='text-decoration-none' to='/products'>Products</Link></li>
                    <li className='ms-3 '><Link className='text-decoration-none' to='/login'>Login</Link></li>
                    <li className='ms-3 '><Link className='text-decoration-none' to='/signup'>Sign Up</Link></li>
                    <li className='ms-3 '><Link className='text-decoration-none' to='/contactus'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;