import React from 'react';
import Header from './Header';
import './Loading.css';

const Loading = () => {
    return (
        <div>
            <Header />
            <div className='h-[91vh] w-full flex items-center justify-center'>
                <div class="loader"></div>
            </div>
        </div>
    );
};

export default Loading;