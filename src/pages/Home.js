import React from 'react';
import Banner from '../components/Banner';
import Courses from '../components/Courses';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Courses />
        </div>
    );
};

export default Home;