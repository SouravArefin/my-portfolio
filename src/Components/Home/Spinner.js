import React from 'react';
import image from '../../preloader.gif'
const Spinner = () => {
    return (
        <div className='h-[80vh] w-[90ew] flex items-center justify-center'>
      <img src={image} alt=''/>
        </div>
    );
};

export default Spinner;