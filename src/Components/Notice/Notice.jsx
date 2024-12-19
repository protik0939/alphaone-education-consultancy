import { Helmet } from "react-helmet";
import Heading from "../Home/Components/Heading";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

const Notice = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://alphaone-education-consultancy.vercel.app/notices')
            .then(response => {
                setNotices(response.data); // Directly set the data without sorting
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching notices:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Notice | Alphaone Education Consultancy</title>
            </Helmet>
            <div className="py-10" />
            <Heading values={{ heading: "Notice", title: "This is notice" }} />
            <div className="p-4 mx-40 sm:mx-1">
                {loading ? (
                    <div className="w-full">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="flex flex-row items-start justify-center w-full mb-4">
                                <div className="w-[25%] p-5">
                                    <Skeleton circle={true} height={80} width={80} baseColor="#1d232a90" highlightColor="#323c47" />
                                    <Skeleton width="60%" height={20} style={{ marginTop: '10px' }} baseColor="#1d232a90" highlightColor="#323c47" />
                                    <Skeleton width="40%" height={20} baseColor="#1d232a90" highlightColor="#323c47" />
                                </div>
                                <div className="w-[75%] ml-2 p-5">
                                    <Skeleton width="80%" height={30} baseColor="#1d232a90" highlightColor="#323c47" />
                                    <Skeleton width="90%" height={20} style={{ marginTop: '10px' }} baseColor="#1d232a90" highlightColor="#323c47" />
                                    <Skeleton width="100%" height={60} style={{ marginTop: '10px' }} baseColor="#1d232a90" highlightColor="#323c47" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    notices.length > 0 ? (
                        <div className="w-full">
                            {/* Reverse the notices array while mapping */}
                            {notices.slice().reverse().map((notice, index) => (
                                <Link className="flex flex-row items-start justify-center" key={index} to={notice.link}>
                                    <div className="my-4 w-[25%] bg-base-200 hover:bg-base-300 rounded-lg p-10 sm:p-5 flex flex-col items-center justify-center">
                                        <SlCalender />
                                        <h1 className="text-[10px] text-center">{notice?.uploadDate}</h1>
                                        <h1 className="text-[10px] text-center">{notice?.uploadTime}</h1>
                                    </div>
                                    <div className=" w-[75%] my-4 ml-2 bg-base-200 hover:bg-base-300 rounded-lg p-10 sm:p-5">
                                        <h3 className="text-2xl font-bold text-[#f9971d]">{notice?.title}</h3>
                                        <p>{notice?.details}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p>No notices available.</p>
                    )
                )}
            </div>

            <div className="py-32" />
        </div>
    );
};

export default Notice;
