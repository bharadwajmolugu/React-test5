import React, {useState} from 'react';
import './ContactUs.css';

const ContactUs=()=>{
    useState(()=>{
        document.title='E-Adda ~ContactUs'
    })
    return(
        <div className='contactus'>
            <h1>Contact Us</h1>
            <h1>Developed by: Bharadwaj M</h1>
            <h1>Contact number:9652035531</h1>
        </div>
    )
}

export default ContactUs;