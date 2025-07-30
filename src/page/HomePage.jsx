import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import aa from "./../assets/images/aa (1).jpg";
import bb from "./../assets/images/aa (2).jpg";

import About from "./../assets/images/DashIcons/About.png";
import Boat from "./../assets/images/DashIcons/Fishing Boat.png";
import Graduation from "./../assets/images/DashIcons/Graduation Cap.png";
import Passport from "./../assets/images/DashIcons/Passport.png";
import Staff from "./../assets/images/DashIcons/Staff.png";
import HomeShield from "./../assets/images/DashIcons/Smart Home Shield.png";
import Exchange from "./../assets/images/DashIcons/exchange.png";
import Flight from "./../assets/images/DashIcons/airplane-take-off.png";
import ShipWheel from "./../assets/images/DashIcons/ship-wheel.png";
import AI from "./../assets/images/DashIcons/Bot.png";
import Footer from './components/Footer'

const features = [
    {
        icon: Passport,
        title: "Passport QR Code",
        description: "All You Need is One Scan Away!",
    },
    {
        icon: Staff,
        title: "Global Job Career Hub",
        description: "Empowering Careers Across Borders.",
    },
    {
        icon: Boat,
        title: "Maritime Job Opportunities",
        description: "Navigating You to New Opportunities at Sea.",
    },
    {
        icon: Graduation,
        title: "Education Career",
        description:
            "Thailand, Singapore, Malaysia, Dubai, Qatar, Japan, Korea, etc.,",
    },
    {
        icon: About,
        title: "Global Information Center",
        description:
            "Thailand, Singapore, Malaysia, Dubai, Qatar, Japan, Korea, etc.,",
    },
    {
        icon: Exchange,
        title: "Global Exchange Rate",
        description: "Real-Time Rates, Right at Your Fingertips.",
    },
    {
        icon: HomeShield,
        title: "Home Care",
        description: "Care You Can Trust, Comfort You Deserve.",
    },
    {
        icon: Flight,
        title: "Flight Status Check",
        description: "Your Journey, Simplified – Flight Status at Your Fingertips.",
    },
    {
        icon: AI,
        title: "Sky AI Collection",
        description: "Empowering the Future with AI Innovations.",
    },
    {
        icon: ShipWheel,
        title: "Cruise Mapper",
        description: "Stay Informed, Wherever the Waves Take You.",
    },
];

const HomePage = () => {
    return (
        <div className="w-full h-auto md:h-[55%]">
            <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-500 h-[110%] overflow-hidden">
                {/* Wave Shape */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        className="w-full h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,234.7C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center mx-auto px-4 md:px-12">
                    {/* Text Section */}
                    <div className="flex flex-col w-full md:w-2/3 items-center md:items-start text-center md:text-left text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Bringing the World to Your Fingertips
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mb-6">
                            Your Trusted Partner for Global Services: Careers, Travel,
                            Education, and Beyond.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium">
                                PlayStore
                            </button>
                            <button className="px-8 py-2 bg-purple-800 hover:bg-purple-700 rounded-md text-white font-medium">
                                App Store
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center mt-12 md:mt-0">
                        <div className="flex flex-col md:flex-row gap-6 text-white">
                            <img
                                className="w-40 md:w-48 rounded-lg shadow-xl border-2 border-slate-400 z-10"
                                src={bb}
                                alt="Image BB"
                            />
                            <img
                                className="w-40 md:w-48 rounded-lg shadow-xl md:-ml-12 md:rotate-12"
                                src={aa}
                                alt="Image AA"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col justify-center items-center mt-24 px-4 md:px-0">
                <h1 className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500">
                    Awesome Features
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-7xl">
                    {features.map(({ icon, title, description }, i) => (
                        <div
                            key={i}
                            className="border-2 border-slate-200 bg-slate-100 rounded-md w-full h-52 mx-auto"
                        >
                            <div className="flex flex-col px-6 py-4 h-full">
                                <img src={icon} className="w-8 mt-2 mb-2" alt={`${title} icon`} />
                                <h1 className="font-bold text-lg">{title}</h1>
                                <p className="text-sm text-slate-500 mt-4 flex-grow">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
