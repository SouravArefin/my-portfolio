import React from 'react';
import TypeAnimation from 'react-type-animation';
import myImage from '../../Assets/aaa.png'
import bulb from '../../Assets/blob.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Slider = () => {
  
    const link="https://drive.google.com/uc?export=download&id=1q-VAmD7vldWstCHciLz8xOzjloQFBZhJ"
    return (
        <div className='container md:ml-16 ml-10 lg:flex justify-between items-center mt-10 md:mt-15 height px-7 md:px-0'>
             
            <div
              
                data-aos="fade-right"
                className='flex-1'>
                <span className='md:text-4xl text-style text-xl font-bold'>I'm </span>
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        'Sourav Arefin',
                        3000,
                        'A Front-End Developer',
                        3000,
                        'A MERN Stack Developer',
                        3000,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    className="md:text-4xl text-style text-2xl font-bold text-cyan-700"
                />
                <p className='text-style  custom-line-height text-gray-500 mt-7 mb-5'>
                    A self-spurred and energetic web developer with a profound interest in JavaScript. To work in the Software business with current web innovations of various neighborhood and worldwide Software/IT offices of Bangladesh and develop quickly with expanding duties.
                    {/* Be confident, stay hungry and stay curious then world will be yours. */}
                </p>
                <Link to='/about'rel="noopener noreferrer"><button className='btn btn-outline btn-secondary font-semibold resume-button px-10 py-1'>About Me</button></Link>
                <a href={link} rel="noopener noreferrer">
               
               <button className='btn ml-5 btn-outline btn-secondary font-semibold resume-button px-10 py-1'>
               <FontAwesomeIcon  icon={faDownload} />
               <span className="ml-2">Download Resume</span></button></a>

            </div>

            <div
            
             data-aos="fade-left"
            
                className='flex-1 images md:overflow-hidden w-full'>
                <img id='back-image' className='ing1 md:w-2/5 mx-auto lg:w-full absolute md:bottom-[-10px] top-0' src={bulb} alt="" />
                <img
                
                    className='lg:w-2/3 md:w-1/2 sm:w-2/3  mx-auto absolute top-12 md:top-[5%] lg:left-10 md:left-36 img2 -mt-10' src={myImage} alt="" />
            </div>
 
        </div>
    );
};

export default Slider;