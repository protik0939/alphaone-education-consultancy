import { FaFacebook, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/aec.svg'
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10 sm:justify-center">
                <nav>
                    <h6 className="footer-title">Visit</h6>
                    <Link to='/applynow' className="link link-hover">Apply now</Link>
                    <Link to='/whyalphaone' className="link link-hover">Why Alphaone?</Link>
                    <Link to='/ownerssite' className="link link-hover">Owner's site</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Visit</h6>
                    <Link to='/aboutus' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/notice' className="link link-hover">Notice</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to='/termsandconditions' className="link link-hover">Terms of use</Link>
                    <Link to='/privacypolicy' className="link link-hover">Privacy policy</Link>
                    <Link to='/cookiepolicy' className="link link-hover">Cookie policy</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Others</h6>
                    <Link to='' className="link link-hover">Latest</Link>
                    <Link to='' className="link link-hover">Popular</Link>
                    <Link to='' className="link link-hover">Oldest</Link>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn text-[#0d0149] hover:text-[#f9971d] bg-[#f9971d] join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img className='w-16 rounded-xl bg-white' src={logo} alt="logo" />
                    <p>
                        Alphaone Education Consultancy LTD.
                        <br />
                        Copyright 2024 © All rights Reserved by Alphaone Education
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link>
                            <FaXTwitter className='text-[24px]' />
                        </Link>
                        <Link>
                            <FaYoutube className='text-[24px]' />
                        </Link>
                        <Link>
                            <FaFacebook className='text-[24px]' />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;