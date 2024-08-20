import React from 'react'
import { MdDownload } from 'react-icons/md'

const HeroSection = () => {
    return (
        <>
            <div className='hero-sec-bg'>
                <div className='width-90 height-100'>
                    <div className='grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 hero-sec-container'>
                        <div className=''>
                            <h1 className='hero-heading'>
                                <span>
                                    Hello,
                                </span> <br />
                                I am Rahul Gautam.
                            </h1>
                            <h3 className='sub-heading'>React & Next.js Developer</h3>
                            <p className='hero-para m'>Must explain to how all this mistaken idea denouncing pleasure pain the system and expound the actual.</p>

                            <button className='downloadButton my-4 flex gap-1 justify-center items-center px-4 py-3 rounded-full'>
                                <span>Resume</span> <span><MdDownload /></span>
                            </button>
                        </div>
                        <div className=''>
                            <div className='hero-img-container'>
                                <img src="/Assets/image/hero.jpg" className='hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection 