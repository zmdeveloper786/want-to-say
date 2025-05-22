import React, { useState } from 'react';
import SlideShow from './SlideShow';
import welcomeImage from '../assets/heart.avif';

const WelcomeImage = () => {
    const [showSlideShow, setShowSlideShow] = useState(false);

    if (showSlideShow) {
        return <SlideShow />;
    }

    return (
        <div className="cursor-pointer bg-black flex flex-col justify-center items-center w-screen h-screen relative group p-6" onClick={() => setShowSlideShow(true)}>
            <img
                src={welcomeImage}
                width={120}
                alt="Click to start"
                className=" p-6 bg-white rounded"
            />

            <p className="text-white text-2xl mt-4 font-bold">Touch The Love✨</p>
        </div>
    );
};

export default WelcomeImage;
