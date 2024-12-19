import { Link } from "react-router-dom";
import Heading from "../Home/Components/Heading";
import Subtitle from "../ApplyNow/Component/Subtitle";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {

    const [loading, setLoading] = useState(false);

    const currentFullYear = new Date().getFullYear();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formType = "contactSendMessage";
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneno = form.phoneno.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const now = new Date();
        const uploadTime = now.toLocaleTimeString();
        const uploadDate = now.toLocaleDateString();
        const status = 'pending';
        const formObj = { formType, name, email, phoneno, subject, message, uploadDate, uploadTime, status };

        try {
            const response = await axios.post('https://alphaone-education-consultancy.vercel.app/contactsendmessage', formObj);
            console.log('Response:', response.data);

            const newSub = `[For Contact] ${subject}`
            //const replyMessage = `Dear ${name},\nThank you so much for contacting with us. This is just a reply to your message.\n\n${message}\n\n Our team will contact you soon.`;
            const replyMessage = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border: 1px solid #ddd;">
        <thead>
            <tr>
                <th style="background-color: #f9971d;  color: #0d0149; padding: 15px; text-align: left;">
                    <h2>AlphaOne Education Consultancy</h2>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 20px;">
                    <p>Dear <strong>${name}</strong>,</p>
                    <p>Thank you so much for contacting with us. This is just a reply to your message.</p>
                    <h3 style="background-color: #f9971d; color: #0d0149; padding: 10px 10px 10px 25px; ">${subject}</h3>
                    <p style="background-color: #f9971d; color: #0d0149; margin-bottom: 50px; padding: 25px; ">${message}</p>
                    <a href="tel:+821071120197" style="color: #0d0149; background-color: #f9971d; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Contact: +821071120197</a>
                    <p style="margin-top: 20px;">Our team will contact you soon.</p>
                </td>
            </tr>
            <tr>
                <td style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
                    <p>AlphaOne Education Consultancy</p>
                    <p><a href="https://alphaoneedu.com/" style="color: #f9971d; text-decoration: none;">Visit Our Website</a></p>
                    <p>&copy; ${currentFullYear} AlphaOne Education Consultancy. All Rights Reserved.</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
            `;

            // mail sending
            try {
                const response = await axios.post('https://alphaone-education-consultancy.vercel.app/send-email', {
                    to: email,
                    subject: newSub,
                    html: replyMessage,
                });

                try {
                    // const replyMessageAdmin = `A message was sent from: \n${name} \nDate: ${uploadDate}\nTime: ${uploadTime} \n\n${message}\n\nVisit Admin portal to view it.`
                    const replyMessageAdmin = `
                    
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border: 1px solid #ddd;">
        <thead>
            <tr>
                <th style="background-color: #f9971d;  color: #0d0149; padding: 15px; text-align: left;">
                    <h2>AlphaOne Education Consultancy</h2>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 20px;">
                    <p>A new message from <strong>${name}</strong>,</p>
                    <p>The message is given below:</p>
                    <h3 style="background-color: #f9971d; color: #0d0149; padding: 10px 10px 10px 25px; ">${subject}</h3>
                    <p style="background-color: #f9971d; color: #0d0149; margin-bottom: 50px; padding: 25px; ">${message}</p>
                    <a href="https://sso.alphaoneedu.com/messages" style=" color: #0d0149; background-color: #f9971d; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Admin Portal</a>
                    <p style="margin-top: 20px;">Visit the admin portal to control it.</p>
                </td>
            </tr>
            <tr>
                <td style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
                    <p>AlphaOne Education Consultancy</p>
                    <p><a href="https://alphaoneedu.com/" style="color: #f9971d; text-decoration: none;">Visit Our Website</a></p>
                    <p>&copy; ${currentFullYear} AlphaOne Education Consultancy. All Rights Reserved.</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                    `

                    const selfReply = await axios.post('https://alphaone-education-consultancy.vercel.app/send-email', {
                        to: 'contact@alphaoneedu.com',
                        subject: newSub,
                        html: replyMessageAdmin,
                    });
                } catch (error) {
                    console.log(error);
                }

                console.log('Email sent successfully!'); setLoading(false)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Message Sent Successfully"
                });
                form.reset();
            } catch (error) {
                console.error('Error sending email:', error);
                setLoading(false);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "Something Went Wrong"
                });
            }


        } catch (error) {
            console.error('Error submitting form:', error);
            setLoading(false);
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Something Went Wrong"
            });
        }
    };

    return (
        <div className="relative overflow-hidden">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Alphaone Education Consultancy</title>
            </Helmet>
            <div className="py-10" />
            <div className="absolute w-1/4 right-0 h-1/2 -z-30 blur-[100px] bg-gradient-to-r from-[#f9971d] to-[#643b05] animate-glow-spread" />
            <Heading values={{ heading: "Contact Us", title: "Free free to stay connected" }} />
            <div className="w-full flex sm:flex-col items-stretch">

                <div className="w-1/2 p-10 sm:p-4 sm:w-full flex flex-col justify-center items-start sm:items-center">
                    <div className="w-full p-10 sm:p-4 sm:w-full flex flex-col justify-center items-start sm:items-center sm:text-center text-left">

                        <h1 className="text-2xl font-bold text-[#f9971d] mb-6">Feel Free To Contact And Reach Us For More Info !</h1>
                        <h1 className="">Address: 152-62 WACHON-DONG, SEOBUK-GU City/Town: CHEONAN-SI</h1>
                        <h1 className="">Country: Korea, South</h1>
                        <h1 className="">Postal Code: 31153</h1>
                        <h1 className="">District: CHUNGCHEONGNAM-DO</h1>
                    </div>
                    <div className=" flex btnm:flex-col btnm:space-y-3 justify-between p-10 sm:p-4 w-full">
                        <Link to='tel:+821071120197'><h1 className="hover:scale-105 flex space-x-2 items-center bg-[#f9971d] text-[#0d0149] font-bold p-3 rounded-full"><FaPhoneAlt className="text-2xl" /><IoLogoWhatsapp className="text-2xl" /><h1>+821071120197</h1></h1></Link>
                        <Link to='mailto:contact@alphaoneedu.com'><h1 className="hover:scale-105 flex space-x-2 items-center bg-[#f9971d] text-[#0d0149] font-bold p-3 rounded-full"><SiGmail className="text-2xl" /><h1>contact@alphaoneedu.com</h1></h1></Link>
                    </div>
                </div>
                <div className="w-1/2 sm:w-full flex flex-col items-center justify-center">
                    <Subtitle values={{ heading: "Send Message", title: "Our team is ready to answer all your questions." }} />
                    <div className="w-full flex items-center justify-center">
                        <form className="sm:mt-4 p-4 w-full" onSubmit={handleSubmit}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="flex space-x-2 sm:flex-col sm:space-x-0">
                                <div className="form-control w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" name="phoneno" placeholder="Phone no" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name="subject" placeholder="Subject" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea type="textarea" name="message" placeholder="Message" className="textarea textarea-bordered w-full" required />
                            </div>
                            <div className="form-control mt-6 flex-row justify-center items-center">

                                {loading ?
                                    <button type="submit" disabled value={'Please Wait'} className="btn text-white bg-[#f9971d]" >Please Wait <span className="loading loading-bars loading-md" /></button>
                                    :
                                    <input type="submit" value={'Submit'} className="btn text-white bg-[#f9971d]" />
                                }
                            </div>
                        </form>
                    </div>
                </div>

                <div className="absolute w-1/4 h-1/2 -z-30 blur-[100px] bg-gradient-to-r from-[#f9971d] to-[#643b05] animate-glow-spread" />
            </div>

        </div>
    );
};

export default Contact;