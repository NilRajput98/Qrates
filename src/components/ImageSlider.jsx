import React, { useEffect, useState } from 'react';

const images = [
    'https://assets.qrates.com/packs/media/section_vinyl_studio/sample_black_country_disco-233bbc85.png',
    'https://assets.qrates.com/packs/media/section_vinyl_studio/sample_all_india-36327a32.png',
    'https://assets.qrates.com/packs/media/section_vinyl_studio/sample_4dilla-d886be83.png',
    'https://assets.qrates.com/packs/media/section_vinyl_studio/sample_blarney-469831b2.png',
    'https://assets.qrates.com/packs/media/section_vinyl_studio/sample_female-a4d2352d.png',
    'https://assets.qrates.com/packs/media/section_vinyl_studio/sample_bombay-668a0fa8.png'
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); // Start fade in
            }, 500); // Wait for 1 second to change image
        }, 1000); // Total time for each image (1s visible + 2s fade)

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-[340px] h-[193px] overflow-hidden ">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Image ${index + 1}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                    style={{ display: currentIndex === index ? 'block' : 'none' }}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
