import React from 'react';
import banner2 from '../images/banner.jpg';
import CountUp from 'react-countup';

const Banner = () => {
    return (
        <div className='pb-3 relative -z-10'>
            <img className='lg:h-[720px] w-full h-96  object-cover lg:block hidden' src={banner2} alt="banner" />
            <div className='lg:absolute lg:w-8/12 mx-auto lg:px-0 px-2 lg:top-[25%] lg:left-1/2 lg:-translate-x-1/2'>
                <h1 className='lg:text-5xl text-3xl font-bold text-center text-secondary'>Hard-working part-timers <br /> until the next day</h1>
                <p className='lg:text-xl lg:text-white lg:w-8/12 mx-auto mt-5 text-center'>JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.</p>
                <div className='text-center mt-10'>
                    <button className='btn lg:btn-lg text-white btn-secondary'>get started</button>
                </div>
            </div>
            <div className='bg-primary mt-5 lg:mt-0 shadow-md lg:relative lg:top-[-30px] rounded-[25px] w-11/12 lg:w-7/12 mx-auto px-5 py-10'>
                <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-10'>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'>
                        <CountUp
                            end={2500}
                            duration={4}
                        />+
                        </h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Students</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'>
                        <CountUp
                            end={40}
                            duration={4}
                        />+
                        </h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Real Project</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'>
                        <CountUp
                            end={80}
                            duration={4}
                        />+
                        </h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Trainer/Teacher</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'><CountUp
                            end={5}
                            duration={4}
                        /></h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Total Branches</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;