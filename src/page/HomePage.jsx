import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from "aos";
import "aos/dist/aos.css";

import About from './../assets/images/DashIcons/About.png';
import Boat from './../assets/images/DashIcons/Fishing Boat.png';
import Graduation from './../assets/images/DashIcons/Graduation Cap.png';
import Passport from './../assets/images/DashIcons/Passport.png';
import Staff from './../assets/images/DashIcons/Staff.png';
import HomeShield from './../assets/images/DashIcons/Smart Home Shield.png';
import Exchange from './../assets/images/DashIcons/Exchange.png';
import Flight from './../assets/images/DashIcons/airplane-take-off.png';
import ShipWheel from './../assets/images/DashIcons/ship-wheel.png';
import AI from './../assets/images/DashIcons/Bot.png';

import CVForm from './../assets/images/vector/undraw_at_work_re_qotl.svg'
import Noti from './../assets/images/vector/undraw_undraw_notifications_12nk_-1-_otkl.svg'
import Mobile from './../assets/images/vector/undraw_mobile_content_xvgr.svg'
import Destination from './../assets/images/vector/undraw_destination_re_sr74.svg'
import Connect from './../assets/images/vector/undraw_world_re_768g.svg'

import Working from './../assets/images/vector/vectorTwo/undraw_working_re_ddwy.svg'
import Education from './../assets/images/vector/vectorTwo/undraw_educator_re_ju47.svg'
import Marintime from './../assets/images/vector/vectorTwo/undraw_container_ship_re_alm4.svg'
import SweetHome from './../assets/images/vector/vectorTwo/undraw_sweet_home_dkhr.svg'
import ExchangeRate from './../assets/images/vector/vectorTwo/undraw_transfer_money_re_6o1h.svg'
import Aircraft from './../assets/images/vector/vectorTwo/undraw_aircraft_re_m05i.svg'
import Mapper from './../assets/images/vector/vectorTwo/undraw_adventure_map_hnin.svg'
import Information from './../assets/images/vector/vectorTwo/undraw_product_teardown_re_m1pc.svg'

import aa from './../assets/images/aa (1).jpg';
import bb from './../assets/images/aa (2).jpg';


const cardData = [
    {
      id: 1,
      title: "Passport QR Code",
      description: "All You Need is One Scan Away!",
      imageUrl: Passport
    },
    {
        id: 2,
        title: "Global Job Career Hub",
        description: "Empowering Careers Across Borders.",
        imageUrl: Staff
      },
      {
        id: 3,
        title: "Maritime Job Opportunities",
        description: "Navigating You to New Opportunities at Sea.",
        imageUrl: Boat
      },
      {
        id: 4,
        title: "Education Career",
        description: "Thailand, Singapore, Malaysia, Dubai, Qatar, Japan, Korea, etc.,",
        imageUrl: Graduation
      },
      {
        id: 5,
        title: "Global Information Center",
        description: "Thailand, Singapore, Malaysia, Dubai, Qatar, Japan, Korea, etc.,",
        imageUrl: About
      },
      {
        id: 6,
        title: "Global Exchange Rate",
        description: "Real-Time Rates, Right at Your Fingertips.",
        imageUrl: Exchange
      },
      {
        id: 7,
        title: "Home Care",
        description: "Care You Can Trust, Comfort You Deserve.",
        imageUrl: HomeShield
      },
      {
        id: 8,
        title: "Flight Status Check",
        description: "Your Journey, Simplified – Flight Status at Your Fingertips.",
        imageUrl: Flight
      },
      {
        id: 9,
        title: "Sky AI Collection",
        description: "Empowering the Future with AI Innovations.",
        imageUrl: AI
      },
      {
        id: 10,
        title: "Cruise Mapper",
        description: "Stay Informed, Wherever the Waves Take You.",
        imageUrl: ShipWheel
      },
];

const playStoreLink = 'https://play.google.com/store/apps/details?id=com.skyglobalmultiservice&hl=en';

const HomePage = () => {

    useEffect(() => {
        AOS.init({
          duration: 1700, // Animation duration in milliseconds
          offset: 100, // Offset (in pixels) from the original trigger point
          once: false, // Whether animation should happen only once
        });
    }, []);
    
    
    return (
    
    <div className='h-[85%] md:h-[75%] w-full mt-20'>
        
            <div className='relative inset-0'>

                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    swipeable={true}
                    interval={4000}
                    transitionTime={1000}
                    autoPlay
                    infiniteLoop
                    className='carousel-container w-full h-full custom-fade-carousel'
                >
                    <div className="relative bg-gradient-to-br from-blue-500 via-purple-700 to-indigo-500 h-full pt-20 overflow-hidden">
                        {/* <!-- Wave Shape --> */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg
                                className="w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 300"
                                preserveAspectRatio="none"
                                >
                                <path
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,234.7C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                                ></path>
                                </svg>
                            </div>
                        {/* <!-- Content --> */}
                        <div className='flex h-[75vh] items-center justify-center flex-col md:flex-row mx-auto'>
                            <div className="flex flex-col w-[60%] items-center justify-center text-center text-txtColor px-4">
                                <h1 className="text-2xl md:text-4xl font-bold mb-8"  data-aos="zoom-out-left">
                                    Bringing the World to Your Fingertips
                                </h1>
                                <p className="text-lg md:text-lg max-w-2xl mb-10"  data-aos="zoom-in">
                                    Your Trusted Partner for Global Services: Careers, Travel, Education, and Beyond.
                                </p>
                                <div className="flex space-x-4 -mt-2">
                                    <Link to={playStoreLink} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        PlayStore
                                    </Link>                        
                                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        AppStore
                                    </button>
                                </div>
                            </div>

                            <div className='w-full md:w-[35%] h-[50vh] flex justify-center md:justify-normal items-center z-40'>
                                <img src={Mobile} alt=""  style={{ width: "350px", height: "350px" }} />
                            </div>
                        </div>
                    </div>


                    <div className="relative bg-gradient-to-tr from-green-600 via-purple-700 to-green-600 h-full pt-20  overflow-hidden">
                        {/* <!-- Wave Shape --> */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg
                                className="w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 300"
                                preserveAspectRatio="none"
                                >
                                <path
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,234.7C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                                ></path>
                                </svg>
                            </div>
                        {/* <!-- Content --> */}
                        <div className='flex h-[75vh] items-center justify-center flex-col md:flex-row mx-auto'>
                            <div className="flex flex-col w-[65%] items-center justify-center text-center text-txtColor px-4">
                                <h1 className="text-2xl md:text-4xl font-bold mb-8"  data-aos="zoom-out-left">
                                    AI-generated CV and cover letter assistance.
                                </h1>
                                <p className="text-lg md:text-lg max-w-2xl mb-10"  data-aos="zoom-in">
                                    Tailored career guidance for different industries.
                                </p>
                                <div className="flex space-x-4 -mt-2">
                                    <Link to={playStoreLink} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        PlayStore
                                    </Link>                        
                                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        AppStore
                                    </button>
                                </div>
                            </div>

                            <div className='w-full md:w-[35%] h-[50vh] flex justify-center md:justify-normal items-center z-40'>
                                <img src={CVForm} alt="" style={{ width: "350px", height: "350px" }} />
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gradient-to-tr from-yellow-600 via-green-700 to-red-600 h-full  pt-20 overflow-hidden">
                        {/* <!-- Wave Shape --> */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg
                                className="w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 300"
                                preserveAspectRatio="none"
                                >
                                <path
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,234.7C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                                ></path>
                                </svg>
                            </div>
                        {/* <!-- Content --> */}
                        <div className='flex h-[75vh] items-center justify-center flex-col md:flex-row mx-auto'>
                            <div className="flex flex-col w-[65%] items-center justify-center text-center text-txtColor px-4">
                                <h1 className="text-2xl md:text-4xl font-bold mb-8"  data-aos="zoom-out-left">
                                    Connections to global educational institutions.
                                </h1>
                                <p className="text-lg md:text-lg max-w-2xl mb-10"  data-aos="zoom-in">
                                    Take your teaching career to the next level.
                                </p>
                                <div className="flex space-x-4 -mt-2">
                                    <Link to={playStoreLink} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        PlayStore
                                    </Link>                        
                                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        AppStore
                                    </button>
                                </div>
                            </div>

                            <div className='w-full md:w-[35%] h-[50vh] flex justify-center md:justify-normal items-center z-40'>
                                <img src={Noti} alt="" style={{ width: "350px", height: "350px" }} />
                            </div>
                        </div>
                    </div>


                    <div className="relative bg-gradient-to-tr from-green-600 via-slate-500 to-cyan-600 h-full  pt-20  overflow-hidden">
                        {/* <!-- Wave Shape --> */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg
                                className="w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 300"
                                preserveAspectRatio="none"
                                >
                                <path
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,234.7C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                                ></path>
                                </svg>
                            </div>
                        {/* <!-- Content --> */}
                        <div className='flex h-[75vh] items-center justify-center flex-col md:flex-row mx-auto'>
                            <div className="flex flex-col w-[65%] items-center justify-center text-center text-txtColor px-4">
                                <h1 className="text-2xl md:text-4xl font-bold mb-8"  data-aos="zoom-out-left">
                                    Flight Status Check
                                </h1>
                                <p className="text-lg md:text-lg max-w-2xl mb-10"  data-aos="zoom-in">
                                    Never miss a flight update! Track real-time flight statuses for a seamless travel experience.
                                </p>
                                <div className="flex space-x-4 -mt-2">
                                    <Link to={playStoreLink} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        PlayStore
                                    </Link>                        
                                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        AppStore
                                    </button>
                                </div>
                            </div>

                            <div className='w-full md:w-[35%] h-[50vh] flex justify-center md:justify-normal items-center z-40'>
                                <img src={Destination} alt="" style={{ width: "350px", height: "350px" }} />
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gradient-to-tr from-cyan-600 via-pink-700 to-green-600 h-full pt-20  overflow-hidden">
                        {/* <!-- Wave Shape --> */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg
                                className="w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 300"
                                preserveAspectRatio="none"
                                >
                                <path
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,234.7C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                                ></path>
                                </svg>
                            </div>
                        {/* <!-- Content --> */}
                        <div className='flex h-[75vh] items-center justify-center flex-col md:flex-row mx-auto'>
                            <div className="flex flex-col w-[65%] items-center justify-center text-center text-txtColor px-4">
                                <h1 className="text-2xl md:text-4xl font-bold mb-8"  data-aos="zoom-out-left">
                                    Global Exchange Rates
                                </h1>
                                <p className="text-lg md:text-lg max-w-2xl mb-10"  data-aos="zoom-in">
                                    Stay updated with real-time currency exchange rates to make informed financial decisions.
                                </p>
                                <div className="flex space-x-4 -mt-2">
                                    <Link to={playStoreLink} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        PlayStore
                                    </Link>                        
                                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium transform transition duration-300 hover:scale-105" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                        AppStore
                                    </button>
                                </div>
                            </div>

                            <div className='w-full md:w-[35%] h-[50vh] flex justify-center md:justify-normal items-center z-40'>
                                <img src={Connect} alt="" style={{ width: "350px", height: "350px" }} />
                            </div>
                        </div>
                    </div>
                </Carousel>
        </div>

        <div className='flex flex-col justify-center items-center py-24'>

            <h1 className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500" data-aos="zoom-in">
                Awesome Features
            </h1>

            <div className='flex justify-around flex-wrap w-full md:w-[90%] mx-auto p-10'>
                { cardData.map((data,index)=>{

                    return(
                        <div key={index} className='border-2 border-slate-200 shadow-md rounded-md w-full md:w-64 h-52 mt-10 mx-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                            <div className='flex flex-col px-6 py-4'>
                                <img src={data.imageUrl} alt={data.title} className='w-8 mt-2 mb-2' />
                                <h1 className='font-bold text-lg my-auto'>
                                    {data.title}
                                </h1>
                                <p className='text-sm text-slate-500 mt-4'>
                                    {data.description}
                                </p>
                                
                            </div>
                        </div>

                    )
                })}
                
            </div>
        </div>

        <div className=''>
            <div className='flex justify-center items-center flex-col w-[75%] mx-auto my-36'>
                <h1 className='font-bold text-4xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-20'  data-aos="zoom-in">
                    Welcome to Sky Global Multi Services
                </h1>
                <p className='mt-12 font-semibold text-justify text-slate-400'>
                    Sky Global Multi Services is your one-stop solution for a wide range of global and local services, tailored to meet your personal and professional needs. From career advancement to home care, we provide innovative, AI-powered tools and comprehensive service offerings to empower individuals and families worldwide. Explore the future of convenience and functionality with our multi-dimensional application and website.
                </p>
            </div>
            <div className='w-[85%] mx-auto mt-20'>
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='flex'>
                        <div className='flex flex-col md:flex-row items-center pb-10' data-aos="zoom-out-right">
                            <img src={Working} alt="" style={{ width: "300px", height: "300px" }} className='mr-6' />
                            <div className='pl-5 md:pl-1'>
                                <div className='flex items-center mb-8'>
                                    
                                    <img src={Staff} className='w-8 mr-4' alt="" />
                                    <h1 className='font-bold text-2xl text-[#EA3EF7]'>
                                        Global Careers Hub
                                    </h1>
                                </div>
                                <p className='text-slate-400 font-semibold'>
                                    Explore endless career opportunities across the globe. Our platform connects job seekers with employers in various industries, providing a seamless experience for building successful careers worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='flex flex-col md:flex-row items-center py-10 text-right' data-aos="zoom-in-left">
                        <div className='order-2 md:order-1'>
                            <div className='flex items-center mb-8 justify-end'>
                                <img src={Graduation} className='w-8 mr-4' alt="" />
                                <h1 className='font-bold text-2xl text-[#F06900]'>
                                    Education Careers Hub
                                </h1>
                            </div>
                            <p className='text-slate-400 font-semibold'>
                                Take your teaching career to the next level with:
                                Job listings in the education sector.
                                Resources for professional development.
                                Connections to global educational institutions.
                            </p>
                        </div>
                        <img src={Education} alt="" style={{ width: "300px", height: "300px" }} className='ml-6 order-1 md:order-2' />

                    </div>
                </div>

                
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='flex flex-col md:flex-row items-center py-10' data-aos="zoom-out-right">
                        <img src={Marintime} alt="" style={{ width: "300px", height: "300px" }} className='mr-6' />
                        <div className=''>
                            <div className='flex items-center mb-8'>
                                <img src={Boat} className='w-8 mr-4' alt="" />
                                <h1 className='font-bold text-2xl text-[#539DF3]'>
                                Maritime Careers Hub
                                </h1>
                            </div>
                            <p className='text-slate-400 font-semibold'>
                                Embark on a fulfilling journey in the maritime industry. From ship crew roles to shore-based positions, we help connect maritime professionals with leading companies globally.
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                
                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='flex flex-col md:flex-row items-center py-10 text-right'  data-aos="zoom-in-left">
                        <div className='order-2 md:order-1'>
                            <div className='flex items-center mb-8 justify-end'>
                                <img src={HomeShield} className='w-8 mr-4' alt="" />
                                <h1 className='font-bold text-2xl text-[#0E93A9]'>
                                    Home Care Services
                                </h1>
                            </div>
                            <p className='text-slate-400 font-semibold'>
                                We understand the importance of quality care at home. Sky Global Multi Services provides a range of home care solutions, including elder care, child care, and support for individuals with special needs
                            </p>
                        </div>
                        <img src={SweetHome} alt="" style={{ width: "300px", height: "300px" }} className='ml-6 order-1 md:order-2' />
                    </div>
                </div>


                
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='flex flex-col md:flex-row items-center py-10' data-aos="zoom-out-right">
                        <img src={ExchangeRate} alt="" style={{ width: "280px", height: "280px" }} className='ml-6' />
                        <div>
                            <div className='flex items-center mb-8'>
                                <img src={Exchange} className='w-8 mr-4' alt="" />
                                <h1 className='font-bold text-2xl text-[#007BFF]'>
                                    Global Exchange Rate
                                </h1>
                            </div>
                            <p className='text-slate-400 font-semibold'>
                                Stay updated with real-time global currency exchange rates. Our user-friendly tool ensures you make informed financial decisions, whether traveling or managing international transactions.
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                
                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='flex flex-col md:flex-row items-center py-10 text-right' data-aos="zoom-in-left">
                        <div className='order-2 md:order-1'>
                            <div className='flex items-center mb-8 justify-end'>
                                <img src={Flight} className='w-8 mr-4' alt="" />
                                <h1 className='font-bold text-2xl text-[#4979D1]'>
                                    Flight Status Check
                                </h1>
                            </div>
                            <p className='text-slate-400 font-semibold'>
                                Never miss a flight update! Track real-time flight statuses for a seamless travel experience
                            </p>
                        </div>

                        <img src={Aircraft} alt="" style={{ width: "300px", height: "300px" }} className='ml-6 order-1 md:order-2' />
                    </div>
                </div>


                
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='flex flex-col md:flex-row items-center py-10' data-aos="zoom-out-right">
                        <img src={Mapper} alt="" style={{ width: "300px", height: "300px" }} className='ml-6' />
                        <div>
                            <div className='flex items-center mb-8'>
                                <img src={ShipWheel} className='w-8 mr-4' alt="" />
                                <h1 className='font-bold text-2xl text-black'>
                                    Cruise Mapper
                                </h1>
                            </div>
                            <p className='text-slate-400 font-semibold'>
                                Plan your next ocean adventure with ease. Cruise Mapper offers detailed information on cruise ships, itineraries, and ports of call, helping you create unforgettable travel experiences.
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='flex flex-col md:flex-row items-center py-10 text-right' data-aos="zoom-in-left">
                        <div className='order-2 md:order-1'>
                            <div className='flex items-center mb-8 justify-end'>
                                <img src={About} className='w-8 mr-4' alt="" />
                                <h1 className='font-bold text-2xl text-[#3C4153]'>
                                    Global International Center
                                </h1>
                            </div>
                            <p className='text-slate-400 font-semibold'>
                                Access resources and support tailored for international professionals, students, and businesses. From visa guidance to cultural integration, we’ve got you covered.
                            </p>
                        </div>
                        <img src={Information} alt="" style={{ width: "300px", height: "300px" }} className='ml-6 order-1 md:order-2' />
                    </div>
                </div>
                
            </div>

            <div className='flex justify-center items-start flex-col w-[75%] mx-auto mt-20 mb-10'>
                <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-16' data-aos="zoom-out-right">
                    Why Choose Sky Global Multi Services?
                </h1>
                <p className='mt-12 font-semibold text-justify text-slate-400'>
                    Comprehensive Solutions: A wide range of services under one roof.
                    Global Reach: Connecting you to opportunities and resources worldwide.
                    User-Friendly Platform: Designed for easy navigation and accessibility.
                    Reliable Support: Our dedicated team is here to assist you every step of the way.
                </p>
            </div>

            <div className='flex justify-center items-start flex-col w-[75%] mx-auto my-10'>
                <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-16' data-aos="zoom-out-right">
                    Join Us Today!
                </h1>
                <p className='mt-4 font-semibold text-justify text-slate-400'>
                    Whether you're looking for career advancement, reliable home care, or tools to simplify your global lifestyle, Sky Global Multi Services is here to make it happen. Explore the possibilities and achieve your goals with confidence.
                </p>
            </div>

            <div className='flex justify-center items-start flex-col w-[75%] mx-auto my-10'>
                <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-16' data-aos="zoom-out-right">
                    Get in Touch
                </h1>
                <p className='mt-4 font-semibold text-justify text-slate-400'>
                    Visit our website to learn more about our services, or contact us directly for personalized assistance. Together, let’s shape a brighter future.
                </p>
            </div>

            <div className='w-[90%]'>
                <h1 className='py-24 ml-14 md:ml-20 text-wrap'>
                    © 2024–2026 Sky Global Co. Ltd. All Rights Reserved.
                </h1>
            </div>
        </div>
    </div>
  )
}

export default HomePage