import React from 'react';
import contact from '../images/contact.jpg';
const ContactUs = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold my-10 text-center text-secondary'>Contact Us</h1>
            <div className='lg:w-8/12 mx-auto pb-20'>
                <div className='flex lg:flex-row flex-col-reverse items-center justify-between lg:gap-8 gap-5'>
                    <div className='lg:w-1/2 w-full lg:px-0 px-4'>
                        <form action="https://formspree.io/f/xjvlzwpl"
                            method="POST">
                            <span className="font-bold">Full name</span>
                            <input
                                className=" mt-3 placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary"
                                placeholder="Name"
                                type="text"
                                name="name"
                                required />
                            <span className=" font-bold">Email address</span>
                            <input
                                className="mt-3 placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary"
                                placeholder="Email"
                                type="email"
                                name="email "
                                required />

                            <span className=" font-bold">Message</span>
                            <textarea
                                className="my-3 placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary"
                                placeholder="Message"
                                type="text"
                                name="message"
                                required />

                            <button type="submit" className="btn lg:w-40 w-full mx-auto btn-primary">Sent Message</button>
                        </form>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src={contact} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;