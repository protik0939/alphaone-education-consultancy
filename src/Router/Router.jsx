import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Downloads from "../Components/Downloads/Downloads";
import Ownerssite from "../Components/Ownerssite/Ownerssite";
import WhyAlphaOne from "../Components/WhyAlphaone/WhyAlphaone";
import ApplyNow from "../Components/ApplyNow/ApplyNow";
import Notice from "../Components/Notice/Notice";
import PrivacyPolicy from "../Components/Legal/PrivacyPolicy";
import TermsOfUse from "../Components/Legal/TermsOfUse";
import CookiePolicy from "../Components/Legal/CookiePolicy";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/downloads",
                element: <Downloads />
            },
            {
                path: "/whyalphaone",
                element: <WhyAlphaOne />
            },
            {
                path: "/ownerssite",
                element: <Ownerssite />
            },
            {
                path: "/applynow",
                element: <ApplyNow />
            },
            {
                path: "/aboutus",
                element: <About />
            },
            {
                path: "/notice",
                element: <Notice />
            },
            {
                path: "/privacypolicy",
                element: <PrivacyPolicy />
            },
            {
                path: "/termsandconditions",
                element: <TermsOfUse />
            },
            {
                path: "/cookiepolicy",
                element: <CookiePolicy />
            },
        ]
    },
]);

export default Router;