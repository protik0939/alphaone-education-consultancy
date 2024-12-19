import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import './components.css';

const MarqueeSlider = () => {
    return (
        <Marquee
            className="w-full bg-black p-2 z-20 text-[#f9971d]"
            pauseOnHover='True'
        >
            <Link><h1>Your Pathway to International Education: Complete Assistance from Application to Visa! </h1></Link>
        </Marquee>
    );
};

export default MarqueeSlider;