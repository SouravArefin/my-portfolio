import React from 'react';
import { Transition } from "@headlessui/react";
// import NavLink from '../../NavLink/NavLink';
import { Link, useNavigate,NavLink } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    return (
        <>
            

            <nav className="bg-cyan-700 z-50 bg-clip-padding bg-opacity-25 sticky top-0 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className='text-4xl  font-bold  inline  my-name bg-white cursor-pointer logo' onClick={() => navigate('/')}>Sourav <span>Arefin</span></h1>
                            </div>
                            <div  className=" hidden md:flex justify-between md:ml-auto">
                                <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg">
                                    <NavLink
                                        to="/"
                                        className="text-white nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/features"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Features
                                    </NavLink>
                                    <NavLink
                                        to="/portfolio"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Portfolio
                                    </NavLink>

                                    <NavLink
                                        to="/blog"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        About
                                    </NavLink>

                                    <NavLink
                                        to="contact-me"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Contact
                                    </NavLink>
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
                                <NavLink
                                    to="/"
                                    className="hover:bg-gray-700 hover:text-white text-[#405A68] block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/features"
                                    className="hover:bg-gray-700 hover:text-white text-[#405A68] block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Features
                                </NavLink>

                                <NavLink
                                    to="/portfolio"
                                    className="text-[#405A68] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    portfolio
                                </NavLink>

                                <NavLink
                                    to="/blog"
                                    className="text-[#405A68] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="text-[#405A68] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                 About
                                </NavLink>



                                <NavLink
                                    to="/contact-me"
                                    className="text-[#405A68] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </>
    );
};

export default Navbar;