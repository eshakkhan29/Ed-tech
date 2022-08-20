import React from 'react';
import banner from '../images/banner.jpeg';

const Banner = () => {
    return (
        <div className='py-3'>
            <img className='lg:h-full h-96  object-cover' src={banner} alt="banner" />
            <div className='bg-gray-200 relative top-[-20px] lg:top-[-60px] rounded-[25px] w-10/12 lg:w-6/12 mx-auto p-5'>
                <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-10'>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold'>2300 +</h1>
                        <p className='text-xl font-semibold mt-2'>Students</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold'>40 +</h1>
                        <p className='text-xl font-semibold mt-2'>Real Project</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold'>80</h1>
                        <p className='text-xl font-semibold mt-2'>Trainer/Teacher</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;