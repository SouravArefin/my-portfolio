import React from 'react';

import souravImg from '../../Assets/aaa.png';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const About = () => {

    const link = 'https://drive.google.com/uc?export=download&id=1QYYjLmW7zPK3aR0P0mEfyf_WJhPrJ3Q0';

    AOS.init();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <section >

            <div className="container ">
                <div className="flex justify-center items-center">


                    <div
                        data-aos="fade-right"
                        className="mr-20 ml-20">
                        <div className="mt-5"><img className="img-fluid myimg" style={{ width: '400px', borderRadius: '10px' }} src={souravImg} alt="" /></div>

                        <div data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <h2 style={{ color: '#384764', fontFamily: 'arial', fontWeight: '600' }} className="p-3"> <span style={{ color: '#ea37bb' }}>I'm</span> SOURAV AREFIN</h2>
                        </div>



                        <p className='text-style text-xl'>I'm a <span className="text-cyan-700 text-2xl">MERN stack Developer</span> based in Bangladesh. I'm s student of Computer Science and Engineering at BGC TRUST University of Bangladesh. I have started my programming journey in 2021 with Programming Hero. I always try to achieve my dreams and goals. Stay foolish, stay hungry and stay curious then world will be yours.</p>

                        <a
                            
                            href={link} rel="noopener noreferrer">

                            <button className='btn mt-5  btn-outline btn-secondary font-semibold resume-button px-10 py-1'>
                                <FontAwesomeIcon icon={faDownload} />
                                <span className="ml-2">Download Resume</span></button></a>
                    </div>


                    <div
                    data-aos="fade-left">
                    
                        <h3 data-aos="fade-right" className="skills-content text-xl text-style font-bold">Programming Skills</h3>
                        <div>
                            <div className="page-title">
                                <h3 className='text-style font-bold text-xl mt-5'>Expertise</h3>
                            </div>
                            <div className="technology">
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

                            <div className="page-title">
                                <h3 className='text-style font-bold text-xl mt-5'>Comfortable</h3>
                            </div>
                            <div className="technology">
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>JSON</span>

                            </div>

                            <div className="page-title">
                                <h3 className='text-style font-bold text-xl mt-5'>Familiar</h3>
                            </div>
                            <div className="technology">
                                <span>Redux </span>
                                <span>TypeScript</span>
                                <span> React Native</span>
                                <span>Next Js</span>
                            </div>

                            <div className="page-title">
                                <h3 className="page-title">Tools</h3>
                            </div>
                            <div className="technology">
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