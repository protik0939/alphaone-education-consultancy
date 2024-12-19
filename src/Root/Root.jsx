import { Outlet, useLocation } from "react-router-dom";
import NavbarMT from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FloatingWhatsapp from "../Components/FloatingWhatsapp/FloatingWhatsapp";
import TopBarProgress from "react-topbar-progress-indicator";
import { useEffect, useState } from "react";

// Configuration for the top progress bar
TopBarProgress.config({
    barColors: {
        "0": "#f9971d",  // Starting color (blue)
        "1.0": "#f9971d" // Ending color (purple)
    },
    shadowBlur: 10,  // Adds a shadow to the progress bar
    barThickness: 2, // Thickness of the progress bar
});


const Root = () => {

    const [progress, setProgress] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Show progress bar on route change start
        setProgress(true);

        // Hide progress bar after some time or route load complete
        const timer = setTimeout(() => {
            setProgress(false);
        }, 500); // Simulated loading delay (adjust this as necessary)

        return () => clearTimeout(timer); // Clean up the timer
    }, [location]); // Trigger when location changes

    return (
        <>

            {/* Show progress bar while route changes */}
            {progress && <TopBarProgress />}

            <NavbarMT />
            <Outlet />
            <FloatingWhatsapp />
            <Footer />
        </>
    );
};

export default Root;