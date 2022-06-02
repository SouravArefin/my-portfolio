import React from 'react';
import { Transition } from "@headlessui/react";
import CustomLink from '../../CustomLink/CustomLink';
import { Link, useNavigate } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-primary hidden md:block">
                <div className="flex justify-between items-center h-12 container mx-auto">
                    <div className=" text-[#38BDF8] text-md">
                        <p>MERN Stack Developer</p>
                    </div>
                    <div className="right-icon flex text-white">
                        <a href="https://www.linkedin.com/in/sourav-arefin-35a462206/" target='_blank'><BsLinkedin className='ml-8 text-xl'></BsLinkedin></a>
                        <a href="https://github.com/Sourav123-sys"target='_blank'><BsGithub className='ml-8 text-xl'></BsGithub></a>
                        <a href="https://www.facebook.com/profile.php?id=100013452185380"target='_blank'><BsFacebook className='ml-8 text-xl'></BsFacebook></a>
                    </div>
                </div>
            </div>

            <nav className="bg-white z-50 bg-clip-padding bg-opacity-10 sticky top-0 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className='text-4xl cursor-pointer logo' onClick={() => navigate('/')}>Sourav <span>Arefin</span></h1>
                            </div>
                            <div className="hidden md:flex justify-between md:ml-auto">
                                <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg">
                                    <CustomLink
                                        to="/"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Home
                                    </CustomLink>
                                    <CustomLink
                                        to="/features"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Features
                                    </CustomLink>
                                    <CustomLink
                                        to="/portfolio"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Portfolio
                                    </CustomLink>

                                    <CustomLink
                                        to="/blog"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Blog
                                    </CustomLink>

                                    <CustomLink
                                        to="contact-me"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Contact
                                    </CustomLink>
                                </div>

                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-800 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <CustomLink
                                    to="/"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Home
                                </CustomLink>
                                <CustomLink
                                    to="/features"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Features
                                </CustomLink>

                                <CustomLink
                                    to="/portfolio"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    portfolio
                                </CustomLink>

                                <CustomLink
                                    to="/blog"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Blog
                                </CustomLink>



                                <CustomLink
                                    to="/contact-me"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Contact
                                </CustomLink>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </>
    );
};

export default Navbar;