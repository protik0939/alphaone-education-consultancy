import WhyAlphaone from "../Home/Components/whyalphaone";
import ege from '../../assets/ege.webp'
import SeizeYourFuture from "../Home/Components/SeizeYourFuture";
import Marquee from "react-fast-marquee";

import uLogo1 from '../../assets/Uni Logos/Auckland-University-Logo.png'
import uLogo2 from '../../assets/Uni Logos/Boston-University-Logo.png'
import uLogo3 from '../../assets/Uni Logos/Brown-Unversity-Logo.png'
import uLogo4 from '../../assets/Uni Logos/Cairo-University-Logo.png'
import uLogo5 from '../../assets/Uni Logos/Chicago-University-Logo.png'
import uLogo6 from '../../assets/Uni Logos/Columbia-University-Logo.png'
import uLogo7 from '../../assets/Uni Logos/Cornell-University-Logo.png'
import uLogo8 from '../../assets/Uni Logos/Duke-University-Logo.png'
import uLogo9 from '../../assets/Uni Logos/Georgetown-University-Logo.png'
import uLogo10 from '../../assets/Uni Logos/Harvard-University-Logo.png'
import uLogo11 from '../../assets/Uni Logos/Melbourne-University-Logo.png'
import uLogo12 from '../../assets/Uni Logos/Moscow-State-University-Logo.png'
import uLogo13 from '../../assets/Uni Logos/National-University-of-Singapore-Logo.png'
import uLogo14 from '../../assets/Uni Logos/Northeastern-University-Logo.png'
import { Helmet } from "react-helmet";


const WhyAlphaOne = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Why Alphaone? | Alphaone Education Consultancy</title>
            </Helmet>
            <div className="py-10" />
            <div className="hero p-5 mb-10">
                <div className="hero-content shadow-xl rounded-lg sm:flex-col flex-row p-10">
                    <img
                        src={ege}
                        className="w-1/2 sm:w-full rounded-lg" />
                    <div className="text-end sm:text-center p-2">
                        <h1 className="text-3xl font-bold text-[#f9971d]">Empowering Global Education, Transforming Futures</h1>
                        <p className="py-6">
                            At Alphaone Education Consultancy, we are dedicated to guiding students toward successful academic journeys abroad. Our leadership team brings years of expertise in helping students navigate the complexities of international education, including admission, visa processing, and cultural adaptation.
                        </p>
                    </div>
                </div>
            </div>
            <WhyAlphaone />

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 w-full p-4 mt-10">

                <div className="card bg-gradient-to-r from-[#f9971d] to-[#f9971d] text-[#0d0149]">
                    <div className="card-body flex flex-col h-full  text-center items-center">
                        <h2 className="card-title">Visionary Leadership</h2>
                        <p className="flex-grow">Our Chairman’s extensive background in Business Management ensures a strong focus on educational quality and career success. With our leadership’s insights, students receive expert guidance in selecting the right academic institutions and programs worldwide.</p>
                    </div>
                </div>

                <div className="card bg-gradient-to-r from-[#f9971d] to-[#f9971d] text-[#0d0149]">
                    <div className="card-body flex flex-col h-full  text-center items-center">
                        <h2 className="card-title">Comprehensive Support</h2>
                        <p className="flex-grow">We offer a full range of services, including application assistance, visa counseling, and ongoing support, ensuring students are well-prepared for their academic and cultural experiences abroad.</p>
                    </div>
                </div>

                <div className="card bg-gradient-to-r from-[#f9971d] to-[#f9971d] text-[#0d0149] col-span-2 sm:col-span-1">
                    <div className="card-body flex flex-col text-center items-center h-full">
                        <h2 className="card-title text-center">Trusted by Top Universities</h2>
                        <p className="flex-grow">As a preferred partner of leading global institutions, Alphaone connects students with prestigious universities, ensuring they receive a world-class education and unparalleled opportunities.</p>
                        <div className="my-10" />
                        <Marquee speed='70' className="my-5">
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo1} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo2} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo3} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo4} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo5} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo6} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo7} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo8} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo9} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo10} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo11} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo12} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo13} alt="" />
                            <img className="w-20 mx-3 rounded-3xl" src={uLogo14} alt="" />
                        </Marquee>
                    </div>
                </div>

            </div>



            <div className="p-10 sm:p-2">
                <SeizeYourFuture />
            </div>

        </div>
    );
};

export default WhyAlphaOne;