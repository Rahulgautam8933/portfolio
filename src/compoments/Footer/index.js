import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__social width-90'>

                <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'>
                    <div>
                        <div className='logoContainer'>
                            <img src="/" alt="logo" />
                        </div>
                        <p className='footerText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit </p>
                        <div className='flex gap-2'>
                            <span><FaLinkedin /></span>
                            <span><FaGithub /></span>
                            <span><SiLeetcode /></span>
                            <span><FaYoutube /></span>
                            <span><FaInstagram /></span>

                        </div>
                    </div>
                    <div>
                        <h3 className='sub-heading1' >Navigation </h3>
                        <ul>
                            <li className='pb-2'><a href='#'><span className='das'>-</span> Home</a></li>
                            <li className='pb-2'><a href='#'><span className='das'>-</span> About</a></li>
                            <li className='pb-2'><a href='#'><span className='das'>-</span> Projects</a></li>
                            <li className='pb-2'><a href='#'><span className='das'>-</span> Skills</a></li>
                            <li className='pb-2'><a href='#'><span className='das'>-</span> Contect</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='sub-heading1'>All Services </h3>
                        <ul>
                            <li className='pb-2'><a href='#'>Web Development</a></li>
                            <li className='pb-2'><a href='#'>Web Design</a></li>
                            <li className='pb-2'><a href='#'>Digital Marketing</a></li>

                        </ul>
                    </div>
                    <div>
                        <h3 className='sub-heading1'>Recent Activity</h3>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer