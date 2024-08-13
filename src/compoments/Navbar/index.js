import React from 'react'
import { MdDownload } from "react-icons/md";
const Navbar = () => {
    return (
        <>

            <div className='navbar' >
                <div className='flex justify-between width-90'>
                    <div className=''>
                        logo name
                    </div>
                    <div>
                        <ul className='navul flex gap-4'>
                            <li><a href="/">home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Skills</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='downloadButton flex gap-1 justify-center items-center px-4 py-3 rounded-full'>
                        <span>Resume</span> <span><MdDownload /></span>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Navbar








