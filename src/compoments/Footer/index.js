import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>

            <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'>
                <div>
                    <div className='logoContainer'>
                        <img src="/" alt="logo" />
                    </div>
                    <p className='footerText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit </p>
                    <div className='flex gap-2'>
                        <span><FaLinkedin /></span>
                        <span><FaLinkedin /></span>
                        <span><FaLinkedin /></span>
                        <span><FaLinkedin /></span>
                        <span><FaLinkedin /></span>

                    </div>
                </div>
                <div>1</div>
                <div>2</div>
                <div>3</div>

            </div>
        </div>
    )
}

export default Footer