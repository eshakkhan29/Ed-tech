import React from 'react';
import Address from '../components/Address';
import Banner from '../components/Banner';
import ContactUs from '../components/ContactUs';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Courses />
            <Gallery />
            <ContactUs />
            <Address/>
            <Footer />
        </div>
    );
};

export default Home;