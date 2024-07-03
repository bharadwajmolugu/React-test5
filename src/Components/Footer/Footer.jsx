import React from 'react';
import '../Footer/Footer.css';
import {Link} from 'react-router-dom';

const Footer=()=>{
    return (
        <div className='footerMsg'>
            <div>
                <p className='text-center'>&copy; All rights reserved for E-Adda</p>
                <Link className='contactUs text-decoration-none text-center' to='/contactus'>Contact Us</Link>
            </div>    
        </div>
    )
}

export default Footer;