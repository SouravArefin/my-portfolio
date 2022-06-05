import React from "react";
import './Portfolio.css';
import shape from '../../Assets/triangleAsymmetrical.svg'

const Portfolio = () => { 
    return (
        <div className="bg-primary pb-20 mb-20 ">
            <img src={shape} alt="" />
            <h1 className="text-4xl glass-header w-fit mx-auto pb-4 text-white font-bold text-center mt-20 mb-10 ">My Projects</h1>
            <div className="wrapper-portfolio">
                <div className="cols-portfolio">
                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');">
                        <div className="container-portfolio">
                            <div className="front-portfolio front1">
                                <div className="inner-portfolio">
                                    <p className="text-style">Project 1</p>
                                    <span className="border text-style border-white px-3 py-1 text-style">MERN Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="text-style font-bold text-[#f05f0b]">Technologies:</span> ReactJS, TailwindCSS, Rest API, NodeJS, MongoDB, ExpressJS.{" "}
                                    </span>
                                    <a href="https://sp-menufecture.web.app/" target="_blank" rel="noopener noreferrer">
                                     
                                        <span className="border text-style border-white py-1 block text-md mt-3">Live</span>
                                    </a>
                                  
                                   
                                    <a href="https://github.com/Sourav123-sys/SP_Dacker_Client" target="_blank" rel="noopener noreferrer"> <span className="border text-style border-white py-1 block text-md mt-3">Client</span>
                                    </a>
                                    <a href="  https://github.com/Sourav123-sys/SP_Dacker_Server" target="_blank" rel="noopener noreferrer"> <span className="border text-style border-white py-1 block text-md mt-3">Server</span>
                                    </a>
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');">
                        <div className="container-portfolio">
                            <div className="front-portfolio front2">
                                <div className="inner-portfolio">
                                    <p className='text-style'>Project 2</p>
                                    <span className="border border-white px-3 text-style py-1">MERN Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className=" text-[#f05f0b]">Technologies:</span> ReactJS, TailwindCSS, Rest API, NodeJS, MongoDB, ExpressJS.{" "}
                                    </span>
                                    <a href="https://sp-warehouse.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Live</span></a>
                                    <a href="https://github.com/Sourav123-sys/SP-WareHouse-Client" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Client</span></a>
                                    <a href="https://sp-warehouse.firebaseapp.com/https://github.com/Sourav123-sys/Sp-WareHouse-Server" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Server</span></a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');">
                        <div className="container-portfolio">
                            <div className="front-portfolio front3">
                                <div className="inner-portfolio">
                                    <p className='text-style'>Project 3</p>
                                    <span className="border border-white px-3 py-1">MERN Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                <span className="">
                                        <span className=" text-[#f05f0b]">Technologies:</span> ReactJS, TailwindCSS, Rest API, NodeJS, MongoDB, ExpressJS.{" "}
                                    </span>
                                    
                                    <a href="https://royal-convention-hall.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Live</span></a>
                                    <a href="https://github.com/Sourav123-sys/react-convention" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Client</span></a>
                                    <a href="https://github.com/Sourav123-sys/royal-convention-server" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Server</span></a>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');" >
                        <div className="container-portfolio">
                            <div className="front-portfolio front4">
                                <div className="inner-portfolio">
                                    <p className='text-style'>Project 4</p>
                                    <span className="border border-white px-3 py-1">React Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className=" text-[#f05f0b]">Technologies:</span> ReactJS, TailwindCSS, Rest API, Firebase.{" "}
                                    </span>
                                    <a href="https://sp-zone-aac4d.web.app/" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Live</span></a>
                                    <a href="https://github.com/Sourav123-sys/SP-Zone" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">GitHub</span></a>
                                </div>
                            </div>
                        </div>
                    </div >

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');" >
                        <div className="container-portfolio">
                            <div className="front-portfolio front5">
                                <div className="inner-portfolio">
                                    <p>Project 5</p>
                                    <span className="border border-white px-3 py-1">JS Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className=" text-[#f05f0b]">Technologies:</span> Javascript, Bootstrap, Rest API.{" "}
                                    </span>
                                    <a href="https://explore-phone.netlify.app/" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">Live</span></a>
                                    <a href="https://github.com/Sourav123-sys/Sp-Mobile-Shop" target="_blank" rel="noopener noreferrer"><span className="border text-style border-white py-1 block text-md mt-3">GitHub</span></a>
                                </div>
                            </div>
                        </div>
                    </div >

                 

                 


                </div >
            </div >
        </div >
    );
};

export default Portfolio;
