import Link from 'next/link'
import React from 'react'
import { MdDownload } from 'react-icons/md'

const AboutSection = () => {
    return (
        <>
            <div className='hero-sec-bg'>
                <div className='width-90 height-100'>
                    <div className='grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 hero-sec-container'>
                        <div className=''>
                            <div className=' border-gradient homesection2LeftCard'>

                                <h2>1.5</h2>
                                <span className='yearPara'>Years of Experience</span>

                                <div className=" border-gradient1 sec2card1box2">
                                    <span className='count'>100%</span>
                                    <span className='count1'>client Setisfection</span>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h3>My Advantage</h3>
                            <p>Hello! I'm Rahul Gautam, a passionate web developer with 1.5 years of experience in crafting dynamic and responsive web applications. My expertise lies in working with modern technologies such as React.js and Next.js, which allow me to build fast and efficient user interfaces. I'm also skilled in HTML, CSS, and Bootstrap, ensuring that my designs are both visually appealing and functional. Additionally, I have experience with Node.js, enabling me to develop robust backend solutions. I am constantly exploring new tools and technologies to enhance my skills and deliver high-quality digital experiences.</p>
                            <div className='grid grid-cols-3'>
                                <div className=''>
                                    1
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection 