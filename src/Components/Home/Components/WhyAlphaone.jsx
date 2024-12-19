import React from 'react';

const WhyAlphaone = () => {
    return (
        <div className='flex sm:flex-col w-full p-4 sm:p-2 justify-center items-center'>
            {/* The section that will stick on scroll */}
            <div className='w-1/3 sm:w-full flex p-4 justify-center items-center h-full'>
                <div className='flex flex-row items-center justify-center sticky top-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-8xl'>Why</h1>
                        <h1 className='text-4xl text-[#f9971d]'>Alphaone</h1>
                    </div>
                    <h1 className='text-9xl text-[#f9971d]'>?</h1>
                </div>
            </div>

            {/* The timeline content */}
            <div className='w-2/3 sm:w-full flex justify-center items-center'>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box p-4 sm:p-2">
                            <h1 className='text-2xl sm:text-xl font-bold text-[#f9971d]'>Personalized Guidance</h1>
                            <h2>We understand that each student is unique. Our expert consultants work closely with you to understand your goals, strengths, and weaknesses, providing personalized advice and support tailored to your individual needs.</h2>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box p-4 sm:p-2">
                            <h1 className='text-2xl sm:text-xl font-bold text-[#f9971d]'>Comprehensive Services</h1>
                            <h2>From course selection and application assistance to visa guidance and career counseling, we offer a comprehensive range of services to guide you through every step of your educational journey.</h2>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box p-4 sm:p-2">
                            <h1 className='text-2xl sm:text-xl font-bold text-[#f9971d]'>Proven Track Record</h1>
                            <h2>We have a proven track record of successfully helping students achieve their educational aspirations. Our testimonials and success stories speak volumes about our commitment to your success.</h2>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box p-4 sm:p-2">
                            <h1 className='text-2xl sm:text-xl font-bold text-[#f9971d]'>Industry Expertise</h1>
                            <h2>Our team comprises experienced professionals with deep knowledge of the education landscape, including top universities, programs, and industry trends. We leverage this expertise to provide you with accurate and up-to-date information.</h2>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box p-4 sm:p-2">
                            <h1 className='text-2xl sm:text-xl font-bold text-[#f9971d]'>Dedicated Support</h1>
                            <h2>We are committed to providing ongoing support throughout your entire educational journey. Our consultants are readily available to answer your questions, address your concerns, and provide guidance whenever you need it.</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhyAlphaone;
