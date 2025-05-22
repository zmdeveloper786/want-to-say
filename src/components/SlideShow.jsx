import React, { useState, useEffect } from 'react';
import HeartBubbles from './HeartBubbles';
import backgroundImage from '../assets/images.jpg';
import gif1 from '../assets/cute2bear.gif';
import gif2 from '../assets/hug 2 bear.gif';
import gif3 from '../assets/hug bear.gif';
import gif4 from '../assets/love bear 2.gif';
import gif5 from '../assets/love bear.gif';

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  const features = [
  { title: 'Hey You 💐', description: "I just wanted to say something special...", gif: gif5 },
  { title: 'Thank You', description: "For always being there for me.", gif: gif1 },
  { title: 'Thank You', description: "For making me feel truly seen, heard, and valued.", gif: gif2 },
  { title: 'Thank You', description: "For filling my life with joy, laughter, and countless smiles.", gif: gif3 },
  { title: 'Thank You', description: "For giving me the strength to keep going, no matter what.", gif: gif4 },
];


  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex === features.length - 1) {
        clearInterval(timer);
        setTimeout(() => setShowFinal(true), 2000);
        return;
      }
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, features.length]);

  const feature = features[currentIndex];

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <HeartBubbles />
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          zIndex: -1
        }}
      >
        <div className="absolute inset-0 h-screen w-screen bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-[2px]">
          <div className="container mx-auto min-h-screen flex items-center justify-center">
            {!showFinal ? (
              <div className="w-full text-center ">
                <div key={currentIndex} className="px-2 transition-all duration-300 animate-zoom-in">
                  <div className="p-6 rounded-lg">
                    <div className="bg-white backdrop-blur-sm p-6 rounded-[50%] w-32 h-32 mx-auto mb-6 flex items-center justify-center hover:bg-white/40 ">
                      <img
                        src={feature.gif}
                        alt={`Icon ${currentIndex + 1}`}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <h2 className="text-4xl font-bold text-white text-center animate-zoom-in-delay font-fancy text-shadow-fancy">
                      {feature.title}
                    </h2>
                    <div className="h-20 flex justify-center items-center animate-zoom-in-delay">
                      <span className="text-gray-200 text-2xl text-center   text-shadow-glow">{feature.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-zoom-in w-screen text-center typing-container">
                <div className="typewriter-1 inline-block">
                  <h1 className='font-fancy text-2xl text-shadow-glow bg-white/90 p-3 rounded-lg text-red-700'>
                    Lastly, I Want To Say ❤️
                  </h1>
                </div>
                <div className="typewriter-2">
                  <p className='text-2xl text-white   text-shadow-glow'>
                    your presence has brought{'\n'}so much happiness into my life.
                  </p>
                </div>
                <div className="typewriter-3">
                  <p className='text-xl text-white font-fancy text-shadow-glow'>
                    i will always love you ❤️<br></br> Darling I am Never Change 🤗💕
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
