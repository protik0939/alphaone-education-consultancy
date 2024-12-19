import { Link, NavLink } from 'react-router-dom';
import logo from '../../../src/assets/aec.svg';
import { FaBars } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import './Navbar.css'
import ToogleTheme from './ToogleTheme/ToogleTheme';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const aboutDetailsRef = useRef(null);
    const downloadDetailsRef = useRef(null);

    const navLinksSs = (
        <>
            <li onClick={() => setIsDropdownOpen(false)} className='my-1 lg:mx-1'><NavLink to='/'>Home</NavLink></li>
            <li className='my-1 lg:mx-1'>
                <details>
                    <summary>About</summary>
                    <ul className="p-2">
                        <li onClick={() => setIsDropdownOpen(false)}><NavLink to='/aboutus'>About us</NavLink></li>
                        <li onClick={() => setIsDropdownOpen(false)}><NavLink to='/ownerssite'>Owner's Site</NavLink></li>
                    </ul>
                </details>
            </li>
            <li onClick={() => setIsDropdownOpen(false)} className='my-1 lg:mx-1'><NavLink to='/applynow'>Apply Now</NavLink></li>
            <li onClick={() => setIsDropdownOpen(false)} className='my-1 lg:mx-1'><NavLink to='/whyalphaone'>Why Alphaone?</NavLink></li>
            <li className='dropdown my-1 lg:mx-1'>
                <details>
                    <summary tabIndex={0} role="button">Download</summary>
                    <ul tabIndex={0}>
                        <li onClick={() => setIsDropdownOpen(false)}><NavLink to='/#'>Pdf-1</NavLink></li>
                        <li onClick={() => setIsDropdownOpen(false)}><NavLink to='/#'>Pdf-2</NavLink></li>
                        <li onClick={() => setIsDropdownOpen(false)}><NavLink to='/#'>Pdf-3</NavLink></li>
                        <li onClick={() => setIsDropdownOpen(false)}><NavLink to='/#'>Pdf-4</NavLink></li>
                        <li onClick={() => setIsDropdownOpen(false)}><NavLink to='/#'>Pdf-5</NavLink></li>
                    </ul>
                </details>
            </li>
            <li onClick={() => setIsDropdownOpen(false)} className='my-1 lg:mx-1'><NavLink to='/notice'>Notice</NavLink></li>
            <li onClick={() => setIsDropdownOpen(false)} className='my-1 lg:mx-1'><NavLink to='/contact'>Contact</NavLink></li>
        </>
    );

    const navLinksBs = (
        <>
            <li className='my-1 lg:mx-1'><NavLink to='/'>Home</NavLink></li>
            <li className='my-1 lg:mx-1'>
                <details ref={aboutDetailsRef}>
                    <summary>About</summary>
                    <ul className="p-2">
                        <li onClick={() => aboutDetailsRef.current.removeAttribute('open')}><NavLink to='/aboutus'>About us</NavLink></li>
                        <li onClick={() => aboutDetailsRef.current.removeAttribute('open')}><NavLink to='/ownerssite'>Owner's Site</NavLink></li>
                    </ul>
                </details>
            </li>
            <li className='my-1 lg:mx-1'><NavLink to='/applynow'>Apply Now</NavLink></li>
            <li className='my-1 lg:mx-1'><NavLink to='/whyalphaone'>Why Alphaone?</NavLink></li>
            <li className='dropdown my-1 lg:mx-1'>
                <details ref={downloadDetailsRef}>
                    <summary tabIndex={0} role="button">Download</summary>
                    <ul tabIndex={0}>
                        <li onClick={() => downloadDetailsRef.current.removeAttribute('open')}><NavLink to='/#'>Pdf-1</NavLink></li>
                        <li onClick={() => downloadDetailsRef.current.removeAttribute('open')}><NavLink to='/#'>Pdf-2</NavLink></li>
                        <li onClick={() => downloadDetailsRef.current.removeAttribute('open')}><NavLink to='/#'>Pdf-3</NavLink></li>
                        <li onClick={() => downloadDetailsRef.current.removeAttribute('open')}><NavLink to='/#'>Pdf-4</NavLink></li>
                        <li onClick={() => downloadDetailsRef.current.removeAttribute('open')}><NavLink to='/#'>Pdf-5</NavLink></li>
                    </ul>
                </details>
            </li>
            <li className='my-1 lg:mx-1'><NavLink to='/notice'>Notice</NavLink></li>
            <li className='my-1 lg:mx-1'><NavLink to='/contact'>Contact</NavLink></li>
        </>
    );

    // Close dropdowns if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                aboutDetailsRef.current && !aboutDetailsRef.current.contains(event.target) &&
                downloadDetailsRef.current && !downloadDetailsRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                aboutDetailsRef.current.removeAttribute('open');
                downloadDetailsRef.current.removeAttribute('open');
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`navbar justify-between bg-base-200 ${isScrolled ? 'bg-opacity-80 backdrop-blur-md' : 'bg-opacity-0 backdrop-blur-0'} text-[#f9971d] fixed z-50 transition-all duration-300`}>
                <div className="navbar-start w-auto">
                    <Link to='/'><img className='w-14 rounded-lg bg-white' src={logo} alt="Alphaone Education Consultancy Logo" /></Link>
                </div>

                <div className="navbar-end w-auto">
                    <div className="flex items-center justify-center">
                        <ToogleTheme />
                    </div>

                    <div className="dropdown" ref={dropdownRef}>
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost mx-1 nvsc:flex hidden"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                        >
                            <FaBars />
                        </div>
                        {isDropdownOpen && (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navLinksSs}
                            </ul>
                        )}
                    </div>

                    <ul className="menu menu-horizontal px-1 nvsc:hidden flex">
                        {navLinksBs}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
