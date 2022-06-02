import React from 'react';
import Particles from 'react-particles-js';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Portfolio from '../Portfolio/Portfolio';
import Slider from './Slider';


const Home = () => {

    const cardData = [
        {
            title: 'Design',
            details: "I'm a UI/UX Designer with a passion for creating beautiful and functional user interfaces. I'm currently working as a Front-End Developer at a startup called 'The Designers' in London. I'm also a freelance designer and developer.",
        },
        {
            title: 'Development',
            details: "I'm a MERN Stack Developer with a passion for creating beautiful and functional user exeriences",
        },
        {
            title: 'Bug Fixing',
            details: "Bug is a common problem in the world of software/web development. I'm a bug fixer with a passion for fixing bugs and making things better.",
        }
    ]
    return (
        <div >
            {/* <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      /> */}
            <Slider ></Slider>
            <div className="bg-image-triangle ">
                <div className="container-02 mt-40 md:mt-0 pt-28">
                    <h2 className='mx-auto glass-header w-2/3 md:w-1/4 mb-10'>What I Do</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto'>
                        {
                            cardData.map((card, index) => {
                                return <Features key={index} title={card.title} details={card.details} />
                            })
                        }
                    </div>
                </div>
            </div>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;