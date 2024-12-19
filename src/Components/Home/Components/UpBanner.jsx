import React, { useEffect, useState } from 'react';
import pnglogo from '../../../assets/aec.svg';
import '../Home.css';
import MarqueeSlider from './Marquee';
import bImage1 from '../../../assets/Banner image 1.webp'
import bImage2 from '../../../assets/Banner image 2.webp'
import bImage3 from '../../../assets/Banner image 3.webp'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

const UpBanner = () => {
    const images = [bImage1, bImage2, bImage3];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Change image every 10 seconds
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="hero bg-base-200 h-screen sm:min-h-screen relative">
            {/* Background Image */}
            <div className="hero bg-base-200 h-screen sm:min-h-screen relative">
                {/* Background Image */}
                <div className='absolute inset-0 w-full h-full overflow-hidden shadow-lg'>
                    <div
                        className="absolute inset-0 bg-animate w-full h-full bg-no-repeat"
                        style={{
                            backgroundImage: `url(${images[currentImageIndex]})`,
                            backgroundSize: 'cover', // Ensures the image fills the container while maintaining its aspect ratio
                            backgroundPosition: 'center', // Centers the middle of the image
                            filter: 'brightness(0.5)', // Darkens the background image
                            transition: 'opacity 1s ease-in-out', // Smooth transition for image changes
                        }}
                    />
                </div>

                {/* Foreground content (text and logo) */}
                <div className="hero-content sm:flex-col justify-between w-full flex-row-reverse z-10 relative pb-10">
                    <img className='w-1/3 sm:w-1/2' src={pnglogo} alt="AOEC" />
                    <div>
                        <h1 className="text-5xl sm:text-3xl font-bold text-white">Alphaone Education Consultancy</h1>
                        <p className="py-6 text-white sm:text-[10px]">
                            Alphaone Education Consultancy is a trusted organization that guides students in pursuing higher education abroad. They offer expert counseling, university admissions assistance, and visa support. With a focus on personalized services, Alphaone helps students achieve their academic and career goals globally.
                        </p>
                        <div className='flex space-x-2'>
                            <Link to='/applynow'><button className="btn bg-[#f9971d] text-[#0d0149] hover:text-[#f9971d] border-none shadow-lg">Apply Now</button></Link>
                            <Link to='tel:+821071120197'><button className="btn bg-[#ffffff] text-[#0d0149] hover:text-[#f9971d] border-none shadow-lg"><FaPhoneAlt />+821071120197</button></Link>
                        </div>
                    </div>
                </div>
                <MarqueeSlider />
            </div>
        </div>
    );
};

export default UpBanner;