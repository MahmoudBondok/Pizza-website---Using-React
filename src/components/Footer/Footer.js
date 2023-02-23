import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <p className='logo'>Pizza</p>
                <div className='icons'>
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
        </div>
    )
}

export default Footer