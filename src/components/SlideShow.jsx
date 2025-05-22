import React from 'react';
import backgroundImage from '../assets/images.jpg';

const SlideShow = () => {
  const features = [
    { title: 'Feature One', description: 'Description of feature one goes here' },
    { title: 'Feature Two', description: 'Description of feature two goes here' },
    { title: 'Feature Three', description: 'Description of feature three goes here' },
  ];

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
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
        <div className="absolute inset-0 h-screen w-screen bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-[2px]">
          <div className="container mx-auto min-h-screen flex items-center justify-center">
            <div className="flex flex-wrap gap-8 justify-center items-center p-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm p-6 rounded-lg transform transition-transform hover:-translate-y-2 w-64"
                >
                  <img 
                    src="/assets/icon.gif" 
                    alt={`Icon ${index + 1}`} 
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
