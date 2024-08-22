import Link from 'next/link'
import React from 'react'
import { MdDownload } from 'react-icons/md'

const AboutSection = () => {
    return (
        <>
            <div className='hero-sec-bg'>
                <div className='width-90 '>
                    <div className='grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 '>
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
                        <div className='homesec2box2'>
                            <h3 className='mb-2'>My Advantage</h3>
                            <p>Hello! I'm Rahul Gautam, a web developer with 1.5 years of experience in creating responsive web applications. I specialize in React.js and Next.js for building efficient user interfaces, and I'm proficient in HTML, CSS, Bootstrap, and Node.js. I'm always exploring new technologies to enhance my skills.</p>
                            <div className='grid grid-cols-2  lg:grid-cols-3 2xl:grid-cols-3  md:grid-cols-3 sm:grid-cols-2 mt-5 gap-5'>
                                <div className=' border-gradient2 homesec2'>
                                    <span className="number" >90%</span>
                                    <span>Next js</span>
                                </div>
                                <div className=' border-gradient2 homesec2'>
                                    <span className="number" >95%</span>
                                    <span  >React js</span>
                                </div>
                                <div className=' border-gradient2 homesec2'>
                                    <span className="number" >97%</span>
                                    <span>HTML</span>
                                </div>
                                <div className=' border-gradient2 homesec2'>
                                    <span className="number" >98%</span>
                                    <span>CSS</span>
                                </div>
                                <div className=' border-gradient2 homesec2'>
                                    <span className="number" >90%</span>
                                    <span>Bootstrap</span>
                                </div>
                                <div className=' border-gradient2 homesec2'>
                                    <span className="number">60%</span>
                                    <span>Node js</span>
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