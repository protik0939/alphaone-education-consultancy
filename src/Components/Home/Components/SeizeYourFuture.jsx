import { Link } from 'react-router-dom';
import './components.css';

const SeizeYourFuture = () => {
    return (
        <div className="flex sm:flex-col w-full h-96 sm:h-auto rounded-2xl shadow-inner shadow-[#f9971d80] overflow-hidden p-6 sm:p-2">

            {/* Left Side with Image */}
            <div className="flex justify-center items-center w-1/2 sm:w-full h-full sm:h-1/2 relative">
                <div className="absolute w-1/4 h-1/2 z-0 blur-[100px] bg-gradient-to-r from-[#f9971d] to-[#643b05] animate-glow-spread" />
                <div className='p-6 z-20 text-2xl sm:text-center text-[#f9971d]'>
                    <p>Imagine yourself achieving your academic goals, pursuing your dream career, and making a real impact on the world. Alphaone Education Consultancy can help you make that vision a reality. Apply now and let's start building your future together.</p>
                </div>
            </div>

            {/* Right Side with Button */}
            <div className="flex justify-center items-center w-1/2 sm:w-full h-full sm:h-1/2 relative">
                <Link
                    className="z-10"
                    target="_blank"
                    to=""
                >
                    <Link to='/applynow'><button className="btn border-none shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer bg-gradient-to-r text-[#ffffff] from-[#f9971d] to-[#643b05]">
                        Apply Now
                    </button></Link>
                </Link>
                <div className="absolute w-1/4 h-1/2 z-0 blur-[100px] bg-gradient-to-r from-[#643b05] to-[#f9971d] animate-glow-spread" />
            </div>
            <div className="sm:py-[65px]" />
        </div>
    );
};

export default SeizeYourFuture;