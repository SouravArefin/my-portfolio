import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import ParticlesBg from "particles-bg";
import { ToastContainer, toast } from 'react-toastify';
const Contact = ({ children }) => {
    // console.log(children)
    function sendEmail(e) {
        e.preventDefault();

console.log(e)
        emailjs.sendForm('service_98vmguh', 'template_cz4w05m', e.target, 'user_nDi2jySzO0Wkm4EjoGDE6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert('Successfully send your message')
        e.target.reset();
       

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            
            <section className="text-gray-700 body-font relative">
            <ParticlesBg type="lines" bg={true} />
                <div className="container px-5 pb-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">

                        <div className=' w-fit mx-auto pb-4'>
                            <h1 className="text-uppercase text-white w-fit mx-auto pb-4  text-center  text-4xl md:text-5xl mt-20  mb-3 ">
                                {children ? children : 'Contact Me'}
                            </h1>
                            <p className="text-white lg:w-2/3 mx-auto leading-relaxed text-base">
                                I am a MERN stack web developer from Chittagong, Bangladesh. I  am looking for opportunities to develop my skills.
                            </p>
                        </div>

                    </div>
                    <form onSubmit={sendEmail}className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="text-white leading-7 text-sm ">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='name'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='example@gmail.com'
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                            <input className='btn w-full  text-white bg-primary' type="submit" value="Send" />
                            </div>
                           
                        </div>
                    </form>
                </div>
            </section>
          
        </div>
    );
};

export default Contact;