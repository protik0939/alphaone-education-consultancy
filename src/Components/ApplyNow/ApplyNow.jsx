import React, { useEffect, useMemo, useState } from 'react';
import countryList from 'react-select-country-list'
import Subtitle from './Component/Subtitle';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { IoIosInformationCircle } from 'react-icons/io';

const ApplyNow = () => {


    const options = useMemo(() => countryList().getData(), [])

    const [loading, setLoading] = useState(false);
    const [applyingTo, setApplyingTo] = useState('Undergraduate');
    const [engScore, setEngScore] = useState('IELTS');
    const [aknowledgement, setAknowledgement] = useState('Social_sites');
    const [years, setYears] = useState([]);

    const [selectedUniversities, setSelectedUniversities] = useState([]);

    const universities = [
        'Hankuk University of Foreign Studies',
        'Yeungnam University',
        'University of Seoul',
        'Sejong University',
        'Dongguk University',
        'Incheon National University',
        'Hanseo University',
        'Sahmyook University',
        'Hansung University',
        'Chungwoon University',
    ];

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedUniversities([...selectedUniversities, value]);
        } else {
            setSelectedUniversities(selectedUniversities.filter((univ) => univ !== value));
        }
    };


    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const surname = form.surname.value;
        const fullname = form.fullname.value;
        const dateofbirth = form.dateofbirth.value;
        const gender = form.gender.value;
        const phoneno = form.phoneno.value;
        const wappno = form.wappno.value;
        const email = form.email.value;
        const fathersName = form.fathersName.value;
        const mothersName = form.mothersName.value;

        const addressLineOne = form.addressLineOne.value;
        const AddressLineTwo = form.AddressLineTwo.value;
        const district = form.district.value;
        const division = form.division.value;
        const zipcode = form.zipcode.value;
        const country = form.elements.country.value;

        const applying = applyingTo;
        const sscYear = form.elements.sscYear ? form.elements.sscYear.value || null : null;
        const sscResult = form.sscResult ? form.sscResult.value || null : null;
        const hscYear = form.elements.hscYear ? form.elements.hscYear.value || null : null;
        const hscResult = form.hscResult ? form.hscResult.value || null : null;
        const undergraduateYear = form.elements.undergraduateYear ? form.elements.undergraduateYear.value || null : null;
        const undergraduateResult = form.undergraduateResult ? form.undergraduateResult.value || null : null;
        const mastersYear = form.elements.mastersYear ? form.elements.mastersYear.value || null : null;
        const mastersResult = form.mastersResult ? form.mastersResult.value || null : null;

        const hometown = form.hometown.value;
        const nationality = form.nationality.value;
        const countryapply = form.elements.countryapply.value;
        const choosedUnivarsities = selectedUniversities;
        const reasonToChoose = form.reasonToChoose.value;
        const engLangScoreType = engScore;
        const engLangScore = form.engscorecollect ? form.engscorecollect.value || null : null;
        const whereDidHeknew = aknowledgement;
        const aknowledgementName = form.nameRef ? form.nameRef.value || null : null;

        const now = new Date();
        const uploadTime = now.toLocaleTimeString();
        const uploadDate = now.toLocaleDateString();

        const status = 'pending';


        const appliedForm = { surname, fullname, dateofbirth, gender, phoneno, wappno, email, fathersName, mothersName, addressLineOne, AddressLineTwo, district, division, zipcode, country, applying, sscYear, sscResult, hscYear, hscResult, undergraduateYear, undergraduateResult, mastersYear, mastersResult, hometown, nationality, countryapply, choosedUnivarsities, reasonToChoose, engLangScoreType, engLangScore, whereDidHeknew, aknowledgementName, uploadTime, uploadDate, status }

        // console.log(appliedForm)

        try {
            const response = await axios.post('https://alphaone-education-consultancy.vercel.app/applied', appliedForm);
            console.log('Response:', response.data);

            const sub = `Form submission confirmation mail to ${surname}`
            // const replyMessage = `Dear ${surname}, Thank so much for Applying in our Alphaone Education Consultancy. Our expert team will get in touch with you soon. \n \n Sincerely, \n Alphaone Education Consultancy`
            const replyMessage = `
            <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; margin: 0; padding: 20px;">
    <div class="container" style="max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div class="header" style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 24px; margin: 0;">AlphaOne Education Consultancy</h1>
            <h2 style="font-size: 16px; color: #666; margin: 0;">Application Details</h2>
        </div>
        <div style="margin-bottom: 20px;">
            <h1 style="font-size: 20px; margin: 0; color: #333;">${surname}'s Form</h1>
            <p style="margin: 5px 0;">Uploaded at: ${uploadDate}, ${uploadTime}</p>
        </div>

        <div>
            <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">Personal Information</h1>
            <div class="info" style="margin-bottom: 10px;">Name: ${fullname || 'N/A'}</div>
            <div class="info" style="margin-bottom: 10px;">Surname: ${surname}</div>
            <div class="info" style="margin-bottom: 10px;">Phone no: <a href="tel:${phoneno}" style="color: #007bff; text-decoration: none;">${phoneno}</a></div>
            <div class="info" style="margin-bottom: 10px;">Whatsapp no: <a href="tel:${wappno}" style="color: #007bff; text-decoration: none;">${wappno}</a></div>
            <div class="info" style="margin-bottom: 10px;">Email: <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></div>
            <div class="info" style="margin-bottom: 10px;">Date of Birth: ${dateofbirth}</div>
            <div class="info" style="margin-bottom: 10px;">Gender: ${gender}</div>
            <div class="info" style="margin-bottom: 10px;">Father's name: ${fathersName}</div>
            <div class="info" style="margin-bottom: 10px;">Mother's name: ${mothersName}</div>
        </div>

        <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">Address Info</h1>
        <div class="info" style="margin-bottom: 10px;">Address: ${addressLineOne} ${AddressLineTwo ? ` | ${AddressLineTwo}` : ''}</div>
        <div class="info" style="margin-bottom: 10px;">District: ${district}</div>
        <div class="info" style="margin-bottom: 10px;">Division: ${division}</div>
        <div class="info" style="margin-bottom: 10px;">Zip Code: ${zipcode}</div>
        <div class="info" style="margin-bottom: 10px;">Country: ${country}</div>

        <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">Educational Info</h1>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px;">Level</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Year</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Result</th>
                </tr>
            </thead>
            <tbody>
                ${sscYear && sscResult ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">SSC</td><td style="border: 1px solid #ddd; padding: 8px;">${sscYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${sscResult}</td></tr>` : ''}
                ${hscYear && hscResult ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">HSC</td><td style="border: 1px solid #ddd; padding: 8px;">${hscYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${hscResult}</td></tr>` : ''}
                ${undergraduateYear && undergraduateResult ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">Undergraduate</td><td style="border: 1px solid #ddd; padding: 8px;">${undergraduateYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${undergraduateResult}</td></tr>` : ''}
                ${mastersYear ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">Masters</td><td style="border: 1px solid #ddd; padding: 8px;">${mastersYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${mastersResult}</td></tr>` : ''}
            </tbody>
        </table>

        <div class="info" style="margin-top: 20px;">Hometown: ${hometown}</div>
        <div class="info" style="margin-bottom: 10px;">Nationality: ${nationality}</div>
        <div class="info" style="margin-bottom: 10px;">Country to Apply: ${countryapply}</div>

        <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">University Preferences</h1>
        ${choosedUnivarsities && choosedUnivarsities.length > 0 ? `<div style="margin-left: 10px;">${choosedUnivarsities.map((uni, index) => `<div style="font-style: italic;">${index + 1}. ${uni}</div>`).join('')}</div>` : ''}
        <div class="info" style="margin-top: 10px;">Reason to Choose: "${reasonToChoose}"</div>
        <div class="info" style="margin-top: 10px;">English Language Score: ${engLangScore} in ${engLangScoreType}</div>
        <div class="info" style="margin-top: 10px;">How he knew us: ${whereDidHeknew}</div>
        <div class="info" style="margin-top: 10px;">The person who suggested: ${aknowledgementName}</div>

        <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #777;">
            <p>Thank you for your Applying! We will contact with you soon!</p>
            <p>&copy; ${new Date().getFullYear()} AlphaOne Education Consultancy. All Rights Reserved.</p>
        </div>
    </div>
</div>
            `

            // mail sending
            try {
                const response = await axios.post('https://alphaone-education-consultancy.vercel.app/send-email', {
                    to: email,
                    subject: sub,
                    html: replyMessage,
                });


                try {
                    // const replyMessageAdmin = `An Application was sent from
                    // \n ${fullname}
                    // \nDate: ${uploadDate}
                    // \nTime: ${uploadTime}
                    // \n
                    // \n\n\n\nVisit Admin portal to view it.
                    // `

                    const replyMessageAdmin = `
                    
            <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; margin: 0; padding: 20px;">
    <div class="container" style="max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div class="header" style="text-align: center; margin-bottom: 20px;">
            <h1 style="font-size: 24px; margin: 0;">AlphaOne Education Consultancy</h1>
            <h2 style="font-size: 16px; color: #666; margin: 0;">Application Details</h2>
        </div>
        <div style="margin-bottom: 20px;">
            <h1 style="font-size: 20px; margin: 0; color: #333;">${surname}'s Form</h1>
            <p style="margin: 5px 0;">Uploaded at: ${uploadDate}, ${uploadTime}</p>
        </div>

        <div>
            <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">Personal Information</h1>
            <div class="info" style="margin-bottom: 10px;">Name: ${fullname || 'N/A'}</div>
            <div class="info" style="margin-bottom: 10px;">Surname: ${surname}</div>
            <div class="info" style="margin-bottom: 10px;">Phone no: <a href="tel:${phoneno}" style="color: #007bff; text-decoration: none;">${phoneno}</a></div>
            <div class="info" style="margin-bottom: 10px;">Whatsapp no: <a href="tel:${wappno}" style="color: #007bff; text-decoration: none;">${wappno}</a></div>
            <div class="info" style="margin-bottom: 10px;">Email: <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></div>
            <div class="info" style="margin-bottom: 10px;">Date of Birth: ${dateofbirth}</div>
            <div class="info" style="margin-bottom: 10px;">Gender: ${gender}</div>
            <div class="info" style="margin-bottom: 10px;">Father's name: ${fathersName}</div>
            <div class="info" style="margin-bottom: 10px;">Mother's name: ${mothersName}</div>
        </div>

        <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">Address Info</h1>
        <div class="info" style="margin-bottom: 10px;">Address: ${addressLineOne} ${AddressLineTwo ? ` | ${AddressLineTwo}` : ''}</div>
        <div class="info" style="margin-bottom: 10px;">District: ${district}</div>
        <div class="info" style="margin-bottom: 10px;">Division: ${division}</div>
        <div class="info" style="margin-bottom: 10px;">Zip Code: ${zipcode}</div>
        <div class="info" style="margin-bottom: 10px;">Country: ${country}</div>

        <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">Educational Info</h1>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px;">Level</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Year</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Result</th>
                </tr>
            </thead>
            <tbody>
                ${sscYear && sscResult ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">SSC</td><td style="border: 1px solid #ddd; padding: 8px;">${sscYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${sscResult}</td></tr>` : ''}
                ${hscYear && hscResult ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">HSC</td><td style="border: 1px solid #ddd; padding: 8px;">${hscYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${hscResult}</td></tr>` : ''}
                ${undergraduateYear && undergraduateResult ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">Undergraduate</td><td style="border: 1px solid #ddd; padding: 8px;">${undergraduateYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${undergraduateResult}</td></tr>` : ''}
                ${mastersYear ? `<tr><td style="border: 1px solid #ddd; padding: 8px;">Masters</td><td style="border: 1px solid #ddd; padding: 8px;">${mastersYear}</td><td style="border: 1px solid #ddd; padding: 8px;">${mastersResult}</td></tr>` : ''}
            </tbody>
        </table>

        <div class="info" style="margin-top: 20px;">Hometown: ${hometown}</div>
        <div class="info" style="margin-bottom: 10px;">Nationality: ${nationality}</div>
        <div class="info" style="margin-bottom: 10px;">Country to Apply: ${countryapply}</div>

        <h1 class="section-title" style="font-size: 20px; margin-top: 20px; color: #333;">University Preferences</h1>
        ${choosedUnivarsities && choosedUnivarsities.length > 0 ? `<div style="margin-left: 10px;">${choosedUnivarsities.map((uni, index) => `<div style="font-style: italic;">${index + 1}. ${uni}</div>`).join('')}</div>` : ''}
        <div class="info" style="margin-top: 10px;">Reason to Choose: "${reasonToChoose}"</div>
        <div class="info" style="margin-top: 10px;">English Language Score: ${engLangScore} in ${engLangScoreType}</div>
        <div class="info" style="margin-top: 10px;">How he knew us: ${whereDidHeknew}</div>
        <div class="info" style="margin-top: 10px;">The person who suggested: ${aknowledgementName}</div>

        <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #777;">
            <p>Visit <a href='https://sso.alphaoneedu.com/appliedforms'>Admin panel</a> to view more</p>
            <p>&copy; ${new Date().getFullYear()} AlphaOne Education Consultancy. All Rights Reserved.</p>
        </div>
    </div>
</div>
           
                    `

                    const selfReply = await axios.post('https://alphaone-education-consultancy.vercel.app/send-email', {
                        to: 'contact@alphaoneedu.com',
                        subject: `A New form applied by ${fullname} from ${country}`,
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
                    title: "Applied Successfully!"
                });
                setLoading(false)
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

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const last50Years = Array.from({ length: 50 }, (_, i) => currentYear - i);
        setYears(last50Years);
    }, []);



    const Undergraduate_form = <>
        <div className='w-full flex flex-wrap'>
            {/* SSC */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Middle School Graduation (SSC/O Level)</span>
                </label>
                <select
                    name="sscYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">SSC Result (GPA/Score)</span>
                </label>
                <input
                    type="text"
                    name="sscResult"

                    placeholder="SSC Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            {/* HSC */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">High School Graduation (HSC/Diploma)</span>
                </label>
                <select
                    name="hscYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">HSC or Diploma Result (GPA/Score)</span>
                </label>
                <input
                    type="text"
                    name="hscResult"

                    placeholder="HSC or Diploma Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>
        </div>
    </>


    const masterdegree_form = <>
        <div className='w-full flex flex-wrap'>



            {/* SSC */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Middle School Graduation (SSC/O Level)</span>
                </label>
                <select
                    name="sscYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">SSC Result (GPA/Score)</span>
                </label>
                <input
                    type="text"
                    name="sscResult"

                    placeholder="SSC Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            {/* HSC */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">High School Graduation (HSC/Diploma)</span>
                </label>
                <select
                    name="hscYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">HSC or Diploma Result (GPA/Score)</span>
                </label>
                <input
                    type="text"
                    name="hscResult"

                    placeholder="HSC or Diploma Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            {/* Undergraduate */}
            <div className="form-control w-1/3 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Undergraduate/Bachelor</span>
                </label>
                <select
                    name="undergraduateYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/3 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Result (Undergraduate/Bachelor)</span>
                </label>
                <input
                    type="text"
                    name="undergraduateResult"

                    placeholder="Undergraduate/Bachelor Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            {/* Country */}
            <div className="form-control w-1/3 px-2 sm:w-full">
                <label className="label flex space-x-2 items-center">
                    <span className="label-text">Masters/Graduate <div className='dropdown dropdown-hover'><IoIosInformationCircle tabIndex={0} role="button" /> <div className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>if you have any Master's Degree</div></div></span>
                </label>
                <select
                    name="mastersYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    </>


    const doctorate_form = <>
        <div className='w-full flex flex-wrap'>



            {/* SSC */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Middle School Graduation (SSC/O Level)</span>
                </label>
                <select
                    name="sscYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">SSC Result (GPA/Score)</span>
                </label>
                <input
                    type="text"
                    name="sscResult"

                    placeholder="SSC Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            {/* HSC */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">High School Graduation (HSC/Diploma)</span>
                </label>
                <select
                    name="hscYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">HSC or Diploma Result (GPA/Score)</span>
                </label>
                <input
                    type="text"
                    name="hscResult"

                    placeholder="HSC or Diploma Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            {/* Undergraduate */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Undergraduate/Bachelor</span>
                </label>
                <select
                    name="undergraduateYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Result (Undergraduate/Bachelor)</span>
                </label>
                <input
                    type="text"
                    name="undergraduateResult"

                    placeholder="Undergraduate/Bachelor Result"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            {/* Country */}
            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Masters/Graduate</span>
                </label>
                <select
                    name="mastersYear"
                    className="select select-bordered w-full"
                    required>
                    <option disabled selected>Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>



            <div className="form-control w-1/2 px-2 sm:w-full">
                <label className="label">
                    <span className="label-text">Result (Masters/Graduate)</span>
                </label>
                <input
                    type="text"
                    name="mastersResult"
                    placeholder="Result (Masters/Graduate)"
                    className="input input-bordered w-full"
                    required
                />
            </div>

        </div>
    </>




    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Apply Now | Alphaone Education Consultancy</title>
            </Helmet>
            <div className="py-10" />
            <div className="w-full px-40 sm:px-0">
                <h2 className="text-4xl font-bold mb-8 text-center text-[#f9971d]">Apply Now</h2>

                <form onSubmit={handleSubmit} className="space-y-11">
                    <Subtitle values={{ heading: "Basic Informations", title: "Let's get started!" }} />

                    <div className='w-full flex flex-wrap'>
                        {/* Surname */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Surname</span>
                            </label>
                            <input
                                type="text"
                                name="surname"
                                placeholder="Surname"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Fullname */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Date Of Birth */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input
                                type="date"
                                name="dateofbirth"


                                placeholder="Date Of Birth"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Gender */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select
                                name="gender"

                                className="select select-bordered w-full"
                                required
                            >
                                <option disabled selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        {/* Phone no */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Phone no</span>
                            </label>
                            <input
                                type="text"
                                name="phoneno"


                                placeholder="Phone no"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Whatsapp Phone no */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Whatsapp no</span>
                            </label>
                            <input
                                type="text"
                                name="wappno"


                                placeholder="Whatsapp no"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"


                                placeholder="Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Father's name */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Father's Name</span>
                            </label>
                            <input
                                type="text"
                                name="fathersName"


                                placeholder="Father's name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Mother's name */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Mother's Name</span>
                            </label>
                            <input
                                type="text"
                                name="mothersName"


                                placeholder="Mother's name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>


                    <Subtitle values={{ heading: "Present Address", title: "Let us know where do you live" }} />

                    <div className='w-full flex flex-wrap'>
                        {/* Address line 1 */}
                        <div className="form-control w-1/2 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Address Line 1</span>
                            </label>
                            <input
                                type="text"
                                name="addressLineOne"


                                placeholder="Address"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Address line 2 */}
                        <div className="form-control w-1/2 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Address Line 2</span>
                            </label>
                            <input
                                type="text"
                                name="AddressLineTwo"


                                placeholder="Address"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* City/District */}
                        <div className="form-control w-1/2 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">City (District)</span>
                            </label>
                            <input
                                type="text"
                                name="district"


                                placeholder="City (District)"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* State / division */}
                        <div className="form-control w-1/2 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">State (Division)</span>
                            </label>
                            <input
                                type="text"
                                name="division"


                                placeholder="State (Division)"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Zip Code */}
                        <div className="form-control w-1/2 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Zip code (Post code)</span>
                            </label>
                            <input
                                type="text"
                                name="zipcode"


                                placeholder="Zip Code (Post code)"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Country */}
                        <div className="form-control w-1/2 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <select
                                name="country"

                                className="select select-bordered w-full"
                                required
                            >
                                <option disabled selected>Select Country</option>
                                {options.map((opt) => (
                                    <option key={opt.value} value={opt.label}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <Subtitle values={{ heading: "Academic Informations", title: "Provide your passing years here" }} />
                    <h1 className='text-center font-2xl'>Applying to - </h1>
                    <div className='flex flex-row sm:flex-col w-full justify-center space-x-6 sm:space-x-0 items-center sm:px-6'>

                        <div className="form-control sm:w-full">
                            <label onClick={() => setApplyingTo('Undergraduate')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-20" className="radio mr-2 checked:bg-[#f9971d]" defaultChecked />
                                <span className="label-text">Undergraduate</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setApplyingTo('Masters')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-20" className="radio mr-2 checked:bg-[#f9971d]" />
                                <span className="label-text">Masters</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setApplyingTo('Doctorate')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-20" className="radio mr-2 checked:bg-[#f9971d]" />
                                <span className="label-text">Doctorate</span>
                            </label>
                        </div>
                    </div>

                    {
                        applyingTo === 'Doctorate' ? (
                            doctorate_form
                        ) : applyingTo === 'Undergraduate' ? (
                            <div>
                                {Undergraduate_form}
                            </div>
                        ) : (
                            <div>
                                {masterdegree_form}
                            </div>
                        )
                    }


                    <Subtitle values={{ heading: "Others", title: "Let us know about yourself" }} />
                    {/* Country */}
                    <div className='flex flex-wrap'>

                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Hometown</span>
                            </label>
                            <input
                                type="text"
                                name="hometown"


                                placeholder="Hometown"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Nationality</span>
                            </label>
                            <input
                                type="text"
                                name="nationality"


                                placeholder="Nationality"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>



                        {/* Country */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Country to Apply for</span>
                            </label>
                            <select
                                name="countryapply"

                                className="select select-bordered w-full"
                                required>
                                <option disabled selected>Select Country</option>
                                <option value={'South Korea'}>South Korea</option>

                            </select>
                        </div>
                    </div>

                    <h1 className='text-center'>Univarsity to Apply for</h1>

                    <div className='flex flex-col items-start justify-center px-4'>
                        {universities.map((university, index) => (
                            <div key={index} className="form-control">
                                <label className="label justify-start cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-warning"
                                        value={university}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="ml-2 label-text">{university}</span>
                                </label>
                            </div>
                        ))}
                    </div>



                    <div className='w-full flex justify-center items-center'>
                        <div className="form-control w-full  px-2 ">
                            <label className="label">
                                <span className="label-text">Reason to Choose Above University</span>
                            </label>
                            <textarea
                                rows="5"
                                type="text"
                                name="reasonToChoose"


                                placeholder="Write here ......"
                                className="input textarea-bordered textarea-md h-28 w-full"
                                required
                            />
                        </div>

                    </div>



                    <h1 className='text-center font-2xl'>English Language Score</h1>
                    <div className='flex flex-row sm:flex-col w-full justify-center space-x-4 sm:space-x-0 sm:px-6 items-center'>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setEngScore('IELTS')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-23" className="radio mr-4 checked:bg-[#f9971d]" defaultChecked />
                                <span className="label-text">IELTS</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setEngScore('GRE')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-23" className="radio mr-4 checked:bg-[#f9971d]" />
                                <span className="label-text">GRE</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setEngScore('TOEFL')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-23" className="radio mr-4 checked:bg-[#f9971d]" />
                                <span className="label-text">TOEFL</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setEngScore('SAT')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-23" className="radio mr-4 checked:bg-[#f9971d]" />
                                <span className="label-text">SAT</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setEngScore('TOPIK')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-23" className="radio mr-4 checked:bg-[#f9971d]" />
                                <span className="label-text">TOPIK</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setEngScore('null')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-23" className="radio mr-4 checked:bg-[#f9971d]" />
                                <span className="label-text">None</span>
                            </label>
                        </div>
                    </div>

                    <div className={`w-full justify-center items-center ${engScore === 'null' ? 'hidden' : 'flex'}`}>
                        {/* Whatsapp Phone no */}
                        <div className="form-control w-1/3 px-2 sm:w-full">
                            <label className="label">
                                <span className="label-text">Enter your {engScore} Score</span>
                            </label>
                            <input
                                type="text"
                                name="engscorecollect"
                                placeholder={`Your ${engScore} Score`}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>



                    <h1 className='text-center font-2xl'>How did you come to know about us?</h1>
                    <div className='flex flex-row sm:flex-col w-full justify-center space-x-4 sm:space-x-0 px-4 items-center'>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setAknowledgement('Social sites')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-10" className="radio mr-4 checked:bg-[#f9971d]" defaultChecked />
                                <span className="label-text">Social Sites</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setAknowledgement('Website')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-10" className="radio mr-4 checked:bg-[#f9971d]" />
                                <span className="label-text">Website</span>
                            </label>
                        </div>
                        <div className="form-control sm:w-full">
                            <label onClick={() => setAknowledgement('Friend')} className="label justify-start cursor-pointer">
                                <input type="radio" name="radio-10" className="radio mr-4 checked:bg-[#f9971d]" />
                                <span className="label-text">Family, Friends & Relatives</span>
                            </label>
                        </div>
                    </div>

                    {aknowledgement === 'Friend' ?


                        <div className='w-full flex justify-center items-center'>
                            <div className="form-control w-1/3 px-2 sm:w-full">
                                <label className="label">
                                    <span className="label-text">Name of your Family Member/Friend/Relative</span>
                                </label>
                                <input
                                    type="text"
                                    name="nameRef"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                        </div>
                        :

                        ''}

                    {/* Submit Button */}
                    <div className='flex w-full justify-center items-center'>
                        <div className="form-control my-8">
                            {loading ?
                                <button type="submit" disabled value={'Please Wait'} className="btn text-white bg-[#f9971d]" >Please Wait <span className="loading loading-bars loading-md" /></button>
                                :
                                <input type="submit" value={'Submit'} className="btn text-white bg-[#f9971d]" />
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyNow;
