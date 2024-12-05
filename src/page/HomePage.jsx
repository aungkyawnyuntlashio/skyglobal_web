import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import aa from './../assets/images/aa (1).jpg';
import bb from './../assets/images/aa (2).jpg';

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

const HomePage = () => {
  return (
    
    <div className='h-[70%] md:h-[55%] w-full mt-20'>
        <div class="relative bg-gradient-to-br from-blue-500 via-purple-700 to-indigo-500 h-full overflow-hidden">
            {/* <!-- Wave Shape --> */}
                <div class="absolute bottom-0 left-0 right-0">
                    <svg
                    class="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
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
            <div className='absolute inset-0 flex items-center justify-center flex-col md:flex-row mt-4 mx-auto'>

                <div class="flex flex-col w-[65%] items-center justify-center text-center text-txtColor px-4">

                    <h1 class="text-2xl md:text-4xl font-bold mb-8">
                        Bringing the World to Your Fingertips
                    </h1>
                    <p class="text-lg md:text-lg max-w-2xl mb-10">
                        Your Trusted Partner for Global Services: Careers, Travel, Education, and Beyond.
                    </p>
                    <div class="flex space-x-4 -mt-2">
                        <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium">
                            PlayStore
                        </button>
                        <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-txtColor font-medium">
                            AppStore
                        </button>
                    </div>
                </div>

                <div className='w-full md:w-[35%] flex justify-center md:justify-normal items-center'>
                   <div className='flex text-txtColor mt-12 md:mt-2'>
                        <img className='w-36 md:w-48 rounded-lg shadow-xl border-2 border-slate-400 z-10' src={bb} alt="" />
                        <img className='w-36 md:w-48 rounded-lg shadow-xl -ml-12 rotate-12' src={aa} alt="" />
                   </div>
                </div>

            </div>

        </div>

        <div className='flex flex-col justify-center items-center mt-24'>

            <h1 className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500">
                Awesome Features
            </h1>

            <div className='flex justify-around flex-wrap w-full md:w-[90%] mx-auto p-10'>
                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64 h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={Passport}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Passport QR Code
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            All You Need is One Scan Away!
                        </p>
                        
                    </div>
                </div>

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64 h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={Staff}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Global Job Career Hub
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Empowering Careers Across Borders.
                        </p>
                        
                    </div>
                </div>

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={Boat}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Maritime Job Opportunities
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Navigating You to New Opportunities at Sea.
                        </p>
                        
                    </div>
                </div>

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={Graduation}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Education Career
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Thailand, Singapore, Malaysia, Dubai, Qatar, Japan, Korea, etc.,
                        </p>
                        
                    </div>
                </div>

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={About}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Global Information Center
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Thailand, Singapore, Malaysia, Dubai, Qatar, Japan, Korea, etc.,
                        </p>
                        
                    </div>
                </div>

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={Exchange}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Global Exchange Rate
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Real-Time Rates, Right at Your Fingertips.
                        </p>
                        
                    </div>  
                </div>

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={HomeShield}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Home Care
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Care You Can Trust, Comfort You Deserve.
                        </p>
                        
                    </div>
                </div>  

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={Flight}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Flight Status Check
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Your Journey, Simplified – Flight Status at Your Fingertips.
                        </p>
                        
                    </div>
                </div> 

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={AI}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Sky AI Collection
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Empowering the Future with AI Innovations.
                        </p>
                        
                    </div>
                </div> 

                <div className='border-2 border-slate-200 bg-slate-100 rounded-md w-full md:w-64  h-52 mt-10 mx-2'>
                    <div className='flex flex-col px-6 py-4'>
                        <img
                            src={ShipWheel}
                            className='w-8 mt-2 mb-2'
                            alt=""
                        />
                        <h1 className='font-bold text-lg my-auto'>
                            Cruise Mapper
                        </h1>
                        <p className='text-sm text-slate-500 mt-4'>
                            Stay Informed, Wherever the Waves Take You.
                        </p>
                        
                    </div>
                </div> 
            </div>
        </div>

        <div>
            <div className='flex justify-center items-center flex-col w-[75%] mx-auto my-36'>
                <h1 className='font-bold text-4xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-20'>
                    Welcome to Sky Global Multi Services
                </h1>
                <p className='mt-12 font-semibold text-justify text-slate-400'>
                    Sky Global Multi Services is your one-stop solution for a wide range of global and local services, tailored to meet your personal and professional needs. From career advancement to home care, we provide innovative, AI-powered tools and comprehensive service offerings to empower individuals and families worldwide. Explore the future of convenience and functionality with our multi-dimensional application and website.
                </p>
            </div>
            <div className='w-[75%] mx-auto mt-20'>
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='py-10'>
                        <h1 className='font-bold text-2xl text-primary  mb-8'>
                            1. Global Careers Hub
                        </h1>
                        <p className='text-slate-400 font-semibold'>
                            Explore endless career opportunities across the globe. Our platform connects job seekers with employers in various industries, providing a seamless experience for building successful careers worldwide.
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='py-10 text-right'>
                        <h1 className='font-bold text-2xl text-primary  mb-8'>
                            2. Education Careers Hub
                        </h1>
                        <p className='text-slate-400 font-semibold'>
                            Take your teaching career to the next level with:
                            Job listings in the education sector.
                            Resources for professional development.
                            Connections to global educational institutions.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='py-10'>
                        <h1 className='font-bold text-2xl text-primary  mb-8'>
                            3. Maritime Careers Hub
                        </h1>
                        <p className='text-slate-400 font-semibold'>                           
                            Embark on a fulfilling journey in the maritime industry. From ship crew roles to shore-based positions, we help connect maritime professionals with leading companies globally.
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='py-10 text-right'>
                        <h1 className='font-bold text-2xl text-primary  mb-8'>
                            4. Home Care Services
                        </h1>
                        <p className='text-slate-400 font-semibold'>
                            We understand the importance of quality care at home. Sky Global Multi Services provides a range of home care solutions, including elder care, child care, and support for individuals with special needs

                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='py-10'>
                        <h1 className='font-bold text-2xl text-primary  mb-8'>
                            5. Global Exchange Rate
                        </h1>
                        <p className='text-slate-400 font-semibold'>
                            Stay updated with real-time global currency exchange rates. Our user-friendly tool ensures you make informed financial decisions, whether traveling or managing international transactions.
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='py-10 text-right'>
                        <h1 className='font-bold text-2xl text-primary  mb-8'>
                            6. Flight Status Check
                        </h1>
                        <p className='text-slate-400 font-semibold'>
                            Never miss a flight update! Track real-time flight statuses for a seamless travel experience
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-[4fr,1fr] gap-4 mb-20'>
                    <div className='py-10'>
                        <h1 className='font-bold text-2xl text-primary  mb-8'>
                            7. Cruise Mapper
                        </h1>
                        <p className='text-slate-400 font-semibold'>
                            Plan your next ocean adventure with ease. Cruise Mapper offers detailed information on cruise ships, itineraries, and ports of call, helping you create unforgettable travel experiences.
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='grid grid-cols-[1fr,4fr] gap-4 mb-20'>
                    <div></div>
                    <div className='py-10 text-right'>
                        <h1 className='font-bold text-2xl text-primary mb-8'>
                            8. Global International Center
                        </h1>
                        <p className='text-slate-400 font-semibold'>                        
                            Access resources and support tailored for international professionals, students, and businesses. From visa guidance to cultural integration, we’ve got you covered.
                        </p>
                    </div>
                </div>
            </div>



            <div className='flex justify-center items-start flex-col w-[75%] mx-auto my-10'>
                <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-16'>
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
                <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-16'>
                    Join Us Today!
                </h1>
                <p className='mt-4 font-semibold text-justify text-slate-400'>
                    Whether you're looking for career advancement, reliable home care, or tools to simplify your global lifestyle, Sky Global Multi Services is here to make it happen. Explore the possibilities and achieve your goals with confidence.
                </p>
            </div>

            <div className='flex justify-center items-start flex-col w-[75%] mx-auto my-10'>
                <h1 className='font-bold text-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient duration-500 mt-16'>
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