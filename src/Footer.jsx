import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from './assets/Logo1.png'

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-8">
      <div className="container border-t border-b py-4 border-gray mx-auto px-4 md:flex md:justify-between">
        
        <div className="mb-6 md:mb-0 flex gap-2 flex-col justify-center items-center">
         
            <img src={logo} alt="" />
        
          <p className="text-gray-400 ">© R Singhania</p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
    
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="text-white font-light">About</a></li>
              <li><a href="#" className="text-white font-light">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Terms</h3>
            <ul>
              <li><a href="#" className=" text-white font-light">Data Privacy</a></li>
              <li><a href="#" className=" text-white font-light">Terms</a></li>
              <li><a href="#" className=" text-white font-light">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Related</h3>
            <ul>
              <li><a href="#" className=" text-white font-light ">Find Buyer</a></li>
              <li><a href="#" className=" text-white font-light">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 md:mt-0 space-x-4 text-2xl">
          <a href="#" className=" text-white "><FaLinkedin /></a>
          <a href="#" className=" text-white"><FaTwitter /></a>
          <a href="#" className=" text-white"><FaFacebook /></a>
          <a href="#" className=" text-white"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;