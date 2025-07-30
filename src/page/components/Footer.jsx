import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r mt-8 from-blue-600 via-purple-700 to-indigo-700 text-white py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-2">Sky Global Services</p>
                    <p className="mb-2">123 International Way</p>
                    <p className="mb-2">Global City, Earth 45678</p>
                    <p className="mb-2">Email: <a href="mailto:support@skyglobal.com" className="underline hover:text-gray-300">support@skyglobal.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="underline hover:text-gray-300">+1 (234) 567-890</a></p>
                </div>

                {/* Social Media / Additional Links - optional */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                    <div className="flex justify-center md:justify-start space-x-6 text-xl">
                        <a href="https://facebook.com/skyglobal" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300"><FaFacebook /></a>
                        <a href="https://twitter.com/skyglobal" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300"><FaTwitter /></a>
                        <a href="https://linkedin.com/company/skyglobal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300"><FaLinkedin /></a>
                        <a href="https://instagram.com/skyglobal" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm text-white/80">
                &copy; {new Date().getFullYear()} Sky Global Services. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
