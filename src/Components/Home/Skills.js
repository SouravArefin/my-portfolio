import React from 'react';

import HTML from '../../Assets/html.png';
import CSS from '../../Assets/css.png';
import JavaScript from '../../Assets/javascript.png';
import ReactImg from '../../Assets/react.png';
import Node from '../../Assets/node.png';
import FireBase from '../../Assets/firebase.png';
import GitHub from '../../Assets/github.png';
import Tailwind from '../../Assets/tailwind.png';
import Mongo from '../../Assets/mongo.png';
import Bootstrap from '../../Assets/bootstrap.png';
import Express from '../../Assets/express.png';
import Redux from '../../Assets/redux.png';
import ParticlesBg from 'particles-bg';

const Skills = () => {
    return (
      
      <div
      data-aos="fade-up"
      data-aos-duration="3000"
          name='skills' className='w-full h-screen  mt-20 mb-10'>
            {/* Container */} 
           
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className="text-center text-black">
              <p className='text-4xl font-bold skill-color  inline border-b-4 my-name text-black text-style'>Skills</p>
              
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>EXPRESS JS</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4 text-style font-bold'>FIREBASE</p>
              </div>
              {/* <div className='shadow-md shadow-[#becddb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Redux} alt="HTML icon" />
                  <p className='my-4'>REDUX</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;