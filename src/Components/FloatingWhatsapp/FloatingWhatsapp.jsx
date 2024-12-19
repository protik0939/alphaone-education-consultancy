import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import qrcode from '../../assets/qrcode.svg';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import './FloatingWhatsapp.css'

const FloatingWhatsapp = () => {
    const [displayPopup, setDisplayPopup] = useState(false);

    return (
        <div className="fixed bottom-10 left-8 m-1 z-[10000]">
            <div className="chat chat-start">
                <div onClick={() => setDisplayPopup(true)} className="chat-image avatar">
                    <div className="cursor-pointer bg-[#26d366] text-white p-2 rounded-full shadow-lg">
                        <FaWhatsapp className='text-4xl' />
                    </div>
                </div>
                <div className={`chat-bubble p-5 bg-white text-black relative flex-col items-center w-[210px] justify-center 
                    ${displayPopup ? 'popup popup-enter flex' : 'popup popup-exit hidden'}`}>
                    <h1 className='font-extrabold'>Scan to chat</h1>
                    <div className='w-32'>
                        <img src={qrcode} alt="QR Code" />
                    </div>
                    <h1>OR</h1>
                    <Link target='_blank' to='https://wa.link/ij45ey'>
                        <h1 className='shadow-black shadow-2xl hover:scale-105 bg-white rounded-full p-2 font-bold text-[#f9971d]'>Continue to Chat</h1>
                    </Link>
                    <RxCross2 onClick={() => setDisplayPopup(false)} className='absolute top-2 right-2 bg-red-500 rounded-full text-[#ffffff] hover:scale-110 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default FloatingWhatsapp;
