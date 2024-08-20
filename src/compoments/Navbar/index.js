"use client"
import Link from 'next/link';
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
                        <img style={{ width: "50px" }} src="/Assets/image/logo.png" alt="" />
                    </div>
                    <div className='hidden  md:block'>
                        <ul className='navul flex gap-4'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Skills</Link></li>
                            <li><Link href="/">Projects</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='hidden  md:block'>
                        <Link href='https://drive.google.com/file/d/1c8HfNZvqBUnpAZoG1ErIEWZv-xOUIAxu/view' target='_blank'>

                            <div className='  downloadButton flex gap-1 justify-center items-center px-4 py-3 rounded-full'>
                                <span>Resume</span> <span><MdDownload /></span>
                            </div>
                        </Link>
                    </div>
                    <div className='block  md:hidden' >
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="btn drawer-button navbutonMenu  "><RiMenuFoldLine className='text-lg ' /></label>
                            </div>
                            <div className="drawer-side ">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu navul sidebar-bg bg-base-200 text-base-content min-h-full w-60 p-4">
                                    <li onClick={closeSidebar}><Link href="/">Home</Link></li>
                                    <li onClick={closeSidebar}><Link href="/">About</Link></li>
                                    <li onClick={closeSidebar}><Link href="/">Skills</Link></li>
                                    <li onClick={closeSidebar}><Link href="/">Projects</Link></li>
                                    <li onClick={closeSidebar}><Link href="/">Contact</Link></li>
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
