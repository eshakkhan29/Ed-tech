import React from 'react';

const Address = () => {
    return (
        <div className='lg:w-8/12 mx-auto lg:px-0 px-2'>
            <h1
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-out-in"
                className='text-5xl font-bold my-16 text-center text-secondary'>Navigation</h1>
            <iframe
                className='w-full h-[450px] my-10 rounded-3xl border-2 border-secondary' frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?q=chandpur&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
    );
};

export default Address;