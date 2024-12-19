import React, { useState } from 'react';
import axios from 'axios';
import freeConsultationPic from '../../../assets/free consultation.svg';
import Swal from 'sweetalert2';

const GetAFreeConsultation = () => {
    const currentFullYear = new Date().getFullYear();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formType = "freeConsultation";
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
            const response = await axios.post('https://alphaone-education-consultancy.vercel.app/freeConsultation', formObj);
            console.log('Response:', response.data);


            const newSub = `[For Free Consultancy] ${subject}`
            const replyMessage = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border: 1px solid #ddd;">
        <thead>
            <tr>
                <th style="background-color: #f9971d; color: #0d0149; padding: 15px; text-align: left;">
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
                <td style="background-color: #f4f4f4; padding: 10px; font-size: 12px; color: #777;">
                    <p>AlphaOne Education Consultancy</p>
                    <p><a href="https://alphaoneedu.com/" style="color: #0d0149; text-decoration: none;">Visit Our Website</a></p>
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
                    <p>A new message from <strong>${name} for Free Consultation.</strong>,</p>
                    <p>The message is given below:</p>
                    <h3 style="background-color: #f9971d; color: #0d0149; padding: 10px 10px 10px 25px; ">${subject}</h3>
                    <p style="background-color: #f9971d; color: #0d0149; margin-bottom: 50px; padding: 25px; ">${message}</p>
                    <a href="https://sso.alphaoneedu.com/freeconsultation" style="color: #0d0149; background-color: #f9971d; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Admin Portal</a>
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
                    const selfResponse = await axios.post('https://alphaone-education-consultancy.vercel.app/send-email', {
                        to: 'contact@alphaoneedu.com',
                        subject: newSub,
                        html: replyMessageAdmin,
                    });
                } catch (error) {
                    console.log(error);
                }
                console.log('Email sent successfully!');
                setLoading(false)
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
                setLoading(false); const Toast = Swal.mixin({
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
        <div>
            <div className="hero p-4 sm:p-0">
                <div className="flex w-full flex-row sm:flex-col justify-center items-center px-20 sm:px-4">
                    <img src={freeConsultationPic} className="w-1/2 sm:w-full" />
                    <form className="sm:mt-4 mt-0 p-4 w-1/2 sm:w-full" onSubmit={handleSubmit}>
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
                                <input type="number" name="phoneno" placeholder="Phone no" className="input input-bordered" required />
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
                            <textarea name="message" placeholder="Message" className="textarea textarea-bordered w-full" required />
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
        </div>
    );
};

export default GetAFreeConsultation;
