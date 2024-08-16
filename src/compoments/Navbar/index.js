"use client"
import React from 'react';
import { MdDownload } from "react-icons/md";
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = () => {

    const closeSidebar = () => {
        document.getElementById('my-drawer').checked = false;
    }

    return (
        <>
            <div className='navbar'>
                <div className='flex justify-between width-90 py-1'>
                    <div>
                        logo name
                    </div>
                    <div>
                        <ul className='navul flex gap-4'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Skills</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div className='downloadButton flex gap-1 justify-center items-center px-4 py-3 rounded-full'>
                        <span>Resume</span> <span><MdDownload /></span>
                    </div>

                    <div>
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="btn drawer-button  "><RiMenuFoldLine className='text-lg ' /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    <li onClick={closeSidebar}><a href="/">Home</a></li>
                                    <li onClick={closeSidebar}><a href="/">About</a></li>
                                    <li onClick={closeSidebar}><a href="/">Skills</a></li>
                                    <li onClick={closeSidebar}><a href="/">Projects</a></li>
                                    <li onClick={closeSidebar}><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
