import { Link } from 'react-router-dom';
import errorImage from '../assets/error404.svg'
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <Helmet>
                    <title>Not Found | Alphaone Education Consultancy</title>
                </Helmet>
                <img className='w-full max-w-96' src={errorImage} alt="" />
                <h2 className="font-bold text-2xl p-4 text-center">The requested page does not exist</h2>
                <h2 className="font-bold p-4 text-center ">Go to <Link to='/'><button className="btn ml-2 font-bold text-white bg-[#f9971d]">Home</button></Link></h2>
            </div>
        </div>
    );
};

export default ErrorPage;