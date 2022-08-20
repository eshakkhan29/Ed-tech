import React from 'react';
import stu1 from '../images/student/student (1).jpg'
import stu2 from '../images/student/student (2).jpg'
import stu3 from '../images/student/student (3).jpg'
import stu4 from '../images/student/student (4).jpg'
import stu5 from '../images/student/student (5).jpg'
import stu6 from '../images/student/student (6).jpg'
const Gallery = () => {
    return (
        <div className='lg:w-8/12 mx-auto px-2 lg:px-0'>
            <h1
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-out-in"
                className='text-5xl font-bold my-10 text-center text-secondary'>Gallery</h1>
            <div className='grid lg:grid-cols-3 lg:py-8 py-4 grid-cols-2 gap-3'>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className="col">
                    <img className='rounded-xl' src={stu1} alt="" />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="500"
                    data-aos-delay="700"
                    className="col">
                    <img className='rounded-xl' src={stu2} alt="" />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="col">
                    <img className='rounded-xl' src={stu3} alt="" />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="500"
                    data-aos-delay="800"
                    className="col">
                    <img className='rounded-xl' src={stu4} alt="" />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className="col">
                    <img className='rounded-xl' src={stu5} alt="" />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="col">
                    <img className='rounded-xl' src={stu6} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Gallery;