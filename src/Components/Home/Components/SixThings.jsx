import { AiOutlineSelect } from "react-icons/ai";
import { BsFillFilePostFill } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { SiGooglescholar } from "react-icons/si";

const SixThings = () => {

    return (
        <div className="flex flex-wrap w-full p-2 justify-center">
            <div className="card bg-base-100 w-[30%] sm:w-full shadow-xl m-2">
                <figure className="px-10 pt-10">
                    <MdMoreTime className="w-1/2 h-1/2 text-[#f9971d]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#f9971d]">Personalized Education Counseling
                    </h2>
                    <p>We provide one-on-one consultations to understand students' academic backgrounds, interests, and career aspirations. This allows us to recommend the most suitable universities, courses, and countries based on their unique goals.</p>
                </div>
            </div>


            <div className="card bg-base-100 w-[30%] sm:w-full shadow-xl m-2">
                <figure className="px-10 pt-10">
                    <RiPagesLine className="w-1/2 h-1/2 text-[#f9971d]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#f9971d]">University Selection Assistance</h2>
                    <p>With our in-depth knowledge of global institutions, we help students choose the right universities by evaluating their academic strengths, financial requirements, and long-term career plans. Our guidance ensures they apply to institutions where they have the best chances of success.</p>
                </div>
            </div>


            <div className="card bg-base-100 w-[30%] sm:w-full shadow-xl m-2">
                <figure className="px-10 pt-10">
                    <AiOutlineSelect className="w-1/2 h-1/2 text-[#f9971d]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#f9971d]">Application Support and Documentation</h2>
                    <p>We offer comprehensive support in the application process, helping students prepare and submit error-free applications. This includes crafting compelling personal statements, assembling required documents, and meeting crucial deadlines for a seamless process.</p>
                </div>
            </div>



            <div className="card bg-base-100 w-[30%] sm:w-full shadow-xl m-2">
                <figure className="px-10 pt-10">
                    <FaCcVisa className="w-1/2 h-1/2 text-[#f9971d]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#f9971d]">Visa Processing and Guidance</h2>
                    <p>Navigating visa applications can be challenging, and we assist students by simplifying the process. From preparing the necessary documents to offering tips for visa interviews, we ensure students are well-prepared to obtain their visas smoothly and on time.</p>
                </div>
            </div>



            <div className="card bg-base-100 w-[30%] sm:w-full shadow-xl m-2">
                <figure className="px-10 pt-10">
                    <SiGooglescholar className="w-1/2 h-1/2 text-[#f9971d]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#f9971d]">Pre-Departure Briefing</h2>
                    <p>We provide students with pre-departure guidance, covering essential topics such as travel arrangements, accommodation, cultural adaptation, and financial planning. This ensures they are fully prepared for their transition to life abroad.</p>
                </div>
            </div>


            <div className="card bg-base-100 w-[30%] sm:w-full shadow-xl m-2">
                <figure className="px-10 pt-10">
                    <BsFillFilePostFill className="w-1/2 h-1/2 text-[#f9971d]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#f9971d]">Scholarship and Financial Aid Assistance</h2>
                    <p>We help students explore various scholarship opportunities and financial aid options available at their chosen universities. Our team assists with identifying, applying for, and maximizing funding opportunities to ease the financial burden of international education.</p>
                </div>
            </div>
        </div>
    );
};

export default SixThings;