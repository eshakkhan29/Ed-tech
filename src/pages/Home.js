import React from 'react';
import Banner from '../components/Banner';
import ContactUs from '../components/ContactUs';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Courses />
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;