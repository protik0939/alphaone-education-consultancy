import { Helmet } from "react-helmet";
import aboutUsUpImage from '../../assets/aboutUsUpImage.webp'
import Heading from "../Home/Components/Heading";
import WhyAlphaone from "../Home/Components/whyalphaone";
import OurServices from "./Components/OurServices";
import visionImage from '../../assets/vision.svg'
import SeizeYourFuture from "../Home/Components/SeizeYourFuture";

const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | Alphaone Education Consultancy</title>
            </Helmet>
            <div className="py-10" />
            <div className="hero p-5 mb-10">
                <div className="hero-content shadow-xl rounded-lg sm:flex-col flex-row p-10">
                    <img
                        src={aboutUsUpImage}
                        className="w-1/2 sm:w-full rounded-lg" />
                    <div className="text-end sm:text-center p-2">
                        <h1 className="text-3xl font-bold text-[#f9971d]">Who We Are?</h1>
                        <p className="py-6">
                            AlphaOne Education is a leading education consultancy firm based in India, dedicated to helping students achieve their academic dreams in South Korea. With years of experience and a deep understanding of the Korean education system, we provide comprehensive support and guidance to Indian students seeking admission to South Korea’s prestigious universities.
                        </p>
                    </div>
                </div>
            </div>
            <Heading values={{ heading: "Our Mission", title: "Your dream, our mission" }} />
            <div className="w-full p-10 sm:p-2 pt-0">
                <div className="card bg-gradient-to-r from-[#f9971d] to-[#f9971d] text-[#0d0149] p-3">
                    <div className="card-body flex flex-col h-full  text-center items-center font-bold">
                        <p className="flex-grow">Our mission is to bridge the educational gap between India and South Korea by offering tailored consultancy services that simplify the admission process for students. We aim to foster cultural and academic exchange, empowering students to thrive in a global educational landscape.</p>
                    </div>
                </div>
            </div>

            <Heading values={{ heading: "Why Choose Us?", title: "Why we are one you have to choose" }} />
            <WhyAlphaone />
            <Heading values={{ heading: "Our Services", title: "What will we provide to you" }} />
            <OurServices />
            <Heading values={{ heading: "Our Team", title: "Who will be with you everytime" }} />
            <div className="w-full p-10 sm:p-2 pt-0">
                <div className="card bg-gradient-to-r from-[#f9971d] to-[#f9971d] text-[#0d0149] p-3">
                    <div className="card-body flex flex-col h-full  text-center items-center font-bold">
                        <p className="flex-grow">Our team consists of seasoned education consultants, many of whom have studied in South Korea themselves. They are passionate about helping students navigate the complex admission process with ease and confidence. With their extensive knowledge and experience, you can trust AlphaOne Education to guide you every step of the way.</p>
                    </div>
                </div>
            </div>
            <div className="hero p-5 mb-10">
                <div className="hero-content shadow-xl rounded-lg sm:flex-col flex-row p-10">
                    <img
                        src={visionImage}
                        className="w-1/2 sm:w-full rounded-lg" />
                    <div className="text-end sm:text-center p-2">
                        <h1 className="text-3xl font-bold text-[#f9971d]">Our Vision</h1>
                        <p className="py-6">
                            We envision a future where Indian students can seamlessly access world-class education in South Korea, gaining not only academic knowledge but also the intercultural experiences and global perspectives necessary to thrive in today’s competitive world. Our goal is to break down barriers to international education by simplifying the admission process, offering financial guidance, and providing ongoing support throughout a student’s journey <br /><br />

                            At AlphaOne Education, we believe that education is the foundation for personal and professional growth. We are committed to helping students develop critical thinking skills, innovation, and global citizenship. By facilitating opportunities for Indian students in South Korea’s cutting-edge academic institutions, we aim to foster a generation of leaders who can contribute to both the Indian and global economies.<br /><br />

                            Our vision is to create a strong and diverse community of Indian students who can leverage their South Korean education to pursue successful careers in industries such as technology, business, healthcare, and research. With South Korea being a global hub for innovation, especially in fields like electronics, artificial intelligence, and engineering, we see immense potential for students to gain unparalleled skills that will prepare them for the future job market.<br /><br />

                            By 2030, we aim to be the preferred consultancy for students across India seeking to study in South Korea, continuously improving our services to adapt to the changing educational landscape. We will work hand-in-hand with students, parents, and educational institutions to create opportunities that open doors to a brighter, more interconnected future.
                        </p>
                    </div>
                </div>
            </div>
            
            <Heading values={{ heading: "Seize Your Future", title: "Apply now" }} />
            <div className="p-4">
                <SeizeYourFuture />
            </div>

        </div>
    );
};

export default About;