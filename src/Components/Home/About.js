import React from 'react';

import souravImg from '../../Assets/done.png';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TypeAnimation from 'react-type-animation';
import bulb from '../../Assets/blob.svg'

const About = () => {

    const link="https://drive.google.com/uc?export=download&id=1q-VAmD7vldWstCHciLz8xOzjloQFBZhJ"

    AOS.init();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <section >

            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2">


                    <div
                        data-aos="fade-right"
                        className="mr-20 ml-20">
                          <div
            
            data-aos="fade-left"
           
               className='flex-1 images md:overflow-hidden w-full'>
               <img id='back-image' className='ing1 md:w-1/5 mx-auto lg:w-full absolute md:bottom-[-10px] top-0' src={bulb} alt="" />
               <img
               
                   className='lg:w-2/3 md:w-1/2 sm:w-2/3  mx-auto absolute top-12  lg:left-10 md:left-36 img2 -mt-10' src={souravImg} alt="" />
           </div>

                        <div 
                            className='md:mt-[-80px]'
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                           
                            <h2 style={{ color: '#384764', fontFamily: 'arial', fontWeight: '600' }} className="p-3"> <span style={{ color: '#ea37bb' }}>I'm</span> SOURAV AREFIN</h2>
                        </div>

                        <p className='text-style text-sm'>I'm a
               <span className="text-style text-2xl ml-2 mr-2 text-cyan-700">MERN Stack </span>
                       Developer  based in Bangladesh. I'm  student of Computer Science and Engineering at BGC TRUST University of Bangladesh. I have started my programming journey in 2021 with Programming Hero. I always try to achieve my dreams and goals. I want to see myself at the top of success in this sector in the next 5 years.</p>

                        <a
                            
                            href={link} rel="noopener noreferrer">

                            <button className='btn mt-5  btn-outline btn-secondary font-semibold resume-button px-10 py-1'>
                                <FontAwesomeIcon icon={faDownload} />
                                <span className="ml-2">Download Resume</span></button></a>
                    </div>


                    <div    className="mt-10"
                    data-aos="fade-left">
                 
                        <h3 data-aos="fade-right" className="skills-content text-xl text-style font-bold">Programming Skills</h3>
                        <div>
                            <div className="page-title md:ml-0 ml-20">
                                <h3 className='text-style font-bold text-xl mt-5'>Expertise</h3>
                            </div>
                            <div className="technology md:ml-0 ml-20">
                                <span>React Js</span>
                                <span>Javascript</span>
                                <span>Rest Api</span>
                                <span>ES6</span>
                                <span>Firebase</span>
                                <span>Daisy Ui</span>
                                <span> Bootstrap</span>
                                <span>Tailwind Css</span>
                                <span>Css</span>
                                <span>Html</span>
                            </div>

                            <div className="page-title md:ml-0 ml-20">
                                <h3 className='text-style font-bold text-xl mt-5'>Comfortable</h3>
                            </div>
                            <div className="technology md:ml-0 ml-20">
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>JSON</span>

                            </div>

                            <div className="page-title md:ml-0 ml-20">
                                <h3 className='text-style  font-bold text-xl mt-5'>Familiar</h3>
                            </div>
                            <div className="technology md:ml-0 ml-20">
                                <span>Redux </span>
                                <span>TypeScript</span>
                                <span> React Native</span>
                                <span>Next Js</span>
                            </div>

                            <div className="page-title md:ml-0 ml-20">
                                <h3 className="page-title text-style font-bold text-xl mt-5">Tools</h3>
                            </div>
                            <div className="technology md:ml-0 ml-20">
                                <span>Git</span>
                                <span>Figma</span>
                                <span> Create React App</span>
                                <span>VS Code</span>
                                <span>Netlyfi</span>
                                <span>Heroku</span>
                            </div>


                        </div>
                    </div>

                </div>

            </div>


        </section>
    );
};

export default About;