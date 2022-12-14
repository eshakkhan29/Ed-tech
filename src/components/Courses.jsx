import React from 'react';
import js from '../images/course/js.jpg';
import node from '../images/course/node.jpg';
import react from '../images/course/react.jpg';
import css from '../images/course/css.jpg';
import html from '../images/course/html.jpg';

const Courses = () => {
    return (
        <div className='lg:w-8/12 mx-auto px-2 lg:px-0'>
            <h1
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-out-in"
            className='text-5xl font-bold my-10 text-center text-secondary'>Our Courses</h1>

            <div className='flex lg:flex-row flex-col items-center justify-between lg:gap-8'>
                <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease"
                className='lg:w-1/2'>
                    <img src={js} alt="" />
                </div>
                <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease"
                className='lg:w-1/2'>
                    <h1 className='text-5xl lg:text-left text-center font-bold'>Learn JavaScript</h1>
                    <p className='text-xl my-10'>JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.</p>
                    <div className='flex items-center justify-around'>
                        <button className='btn btn-secondary'>Enroll Now</button>
                        <p className='text-white bg-primary py-2 px-6 font-semibold text-xl rounded-full'>$ 149</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col-reverse  items-center justify-between lg:gap-8'>
                <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
                className='lg:w-1/2'>
                    <h1 className='text-5xl font-bold lg:text-left text-center'>Learn Node Js</h1>
                    <p className='text-xl my-10'>JavaScript is one of the most popular programming languages. The powerful Node.js runtime environment has been ranked the technology most commonly used by professional developers. Node.js is an event-driven JavaScript runtime.</p>
                    <div className='flex items-center justify-around'>
                        <button className='btn btn-secondary'>Enroll Now</button>
                        <p className='text-white bg-primary py-2 px-6 font-semibold text-xl rounded-full'>$ 125</p>
                    </div>
                </div>
                <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
                className='lg:w-1/2'>
                    <img src={node} alt="" />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-between lg:gap-8'>
                <div
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                className='lg:w-1/2'>
                    <img src={react} alt="" />
                </div>
                <div 
                data-aos="flip-right"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                className='lg:w-1/2'>
                    <h1 className='text-5xl font-bold lg:text-left text-center'>Learn React Js</h1>
                    <p className='text-xl my-10'>ReactJS offers graceful solutions to some of front-end programming???s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It???s fast, scalable, flexible, powerful, and has a robust developer community that???s rapidly growing.</p>
                    <div className='flex items-center justify-around'>
                        <button className='btn btn-secondary'>Enroll Now</button>
                        <p className='text-white bg-primary py-2 px-6 font-semibold text-xl rounded-full'>$ 96</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col-reverse items-center justify-between lg:gap-8'>
                <div
                data-aos="flip-up"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                className='lg:w-1/2'>
                    <h1 className='text-5xl font-bold lg:text-left text-center'>Learn CSS</h1>
                    <p className='text-xl my-10'>Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page ??? your web pages can feel like works of art!</p>
                    <div className='flex items-center justify-around'>
                        <button className='btn btn-secondary'>Enroll Now</button>
                        <p className='text-white bg-primary py-2 px-6 font-semibold text-xl rounded-full'>$ 68</p>
                    </div>
                </div>
                <div 
                data-aos="flip-down"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                className='lg:w-1/2 py-5 lg:py-0'>
                    <img src={css} alt="" />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-between lg:gap-8'>
                <div
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                className='lg:w-1/2'>
                    <img src={html} alt="" />
                </div>
                <div
                data-aos="zoom-out-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                className='lg:w-1/2'>
                    <h1 className='text-5xl font-bold lg:text-left text-center'>Learn HTML5</h1>
                    <p className='text-xl my-10'>HTML is the foundation of all web pages. Without HTML, you wouldn???t be able to organize text or add images or videos to your web pages. HTML is the beginning of everything you need to know to create engaging web pages!</p>
                    <div className='flex items-center justify-around'>
                        <button className='btn btn-secondary'>Enroll Now</button>
                        <p className='text-white bg-primary py-2 px-6 font-semibold text-xl rounded-full'>$ 50</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;