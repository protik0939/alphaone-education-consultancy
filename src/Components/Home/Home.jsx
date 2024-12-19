import Heading from "./Components/Heading";
import SixThings from "./Components/sixThings";
import UpBanner from "./Components/UpBanner";
import WhyAlphaone from "./Components/whyalphaone";
import person1 from '../../assets/Mr. Balwant Singh.jpg'
import SeizeYourFuture from "./Components/SeizeYourFuture";
import GetAFreeConsultation from "./Components/GetAFreeConsultation";
import gden from '../../assets/gden.webp'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Alphaone Education Consultancy</title>
            </Helmet>
            <UpBanner />
            <Heading values={{ heading: "Our Goals", title: "See our dreams we are watching about you" }} />
            <div className="hero p-5">
                <div className="hero-content shadow-xl rounded-lg sm:flex-col flex-row p-10">
                    <img
                        src={gden}
                        className="w-1/2 sm:w-full rounded-lg" />
                    <div className="text-end sm:text-center p-2">
                        <h1 className="text-3xl font-bold text-[#f9971d]">Empowering Global Education</h1>
                        <p className="py-6">
                            At Alphaone Education Consultancy, our goal is to empower students by providing personalized guidance and support for their international education journey. We strive to simplify the complexities of studying abroad, from selecting the right institutions to navigating visa processes, ensuring students achieve their academic and career aspirations with confidence. Our commitment to excellence and tailored services helps students unlock opportunities for global learning and success.
                        </p>
                        <Link to='/aboutus'><button className="btn bg-[#f9971d] text-[#0d0149] hover:text-[#f9971d]">Know More</button></Link>
                    </div>
                </div>
            </div>
            <Heading values={{ heading: "Our Offers", title: "The things we offer to our customers" }} />
            <SixThings />

            <Heading values={{ heading: "Why us?", title: "See why you have to choose us" }} />
            <WhyAlphaone />

            <Heading values={{ heading: "Our Experts", title: "Meet Our Dedicated Team of Education Experts Guiding Your Academic Journey with Experience and Dedication" }} />

            <div className="flex justify-center items-center">
                <div className="card card-compact bg-base-100 w-[30%] sm:w-[95%] shadow-xl">
                    <figure>
                        <img
                            src={person1}
                            alt="Mr. Balwant Singh" />
                    </figure>
                    <div className="card-body flex items-center justify-center text-center">
                        <h2 className="card-title text-[#f9971d]">Mr. Balwant Singh</h2>
                        <p>Chairman<br />Alphaone Education</p>
                    </div>
                </div>
            </div>

            <Heading values={{ heading: "Seize Your Future", title: "Apply now" }} />
            <div className="w-full p-10 sm:p-2">
                <SeizeYourFuture />
            </div>

            <Heading values={{ heading: "Free Consultation", title: "Grab your one free consultatio now!" }} />
            <GetAFreeConsultation />

        </div>
    );
};

export default Home;