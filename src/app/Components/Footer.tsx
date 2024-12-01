import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='mx-auto bg-[#FFFFFF] py-8'>
      <div className='container mx-auto px-4 w-full'>
        {/* Subscription Section */}
        <div className='flex flex-col lg:flex-row justify-between items-center border-b pb-4 mb-4'>
          <div className='flex items-center mb-4 lg:mb-0'>
            <Image src='/Ddsgnr Library (1).png' alt='Ddsgnr Logo' width={130} height={40} style={{width:'auto', height:'auto'}} className='object-cover' />
          </div>
          <div className='flex flex-col lg:flex-row items-center w-full lg:w-auto'>
            <div className='flex items-center mb-4 lg:mb-0 lg:mr-4'>
              <input
                type='email'
                placeholder='Enter your Email Address'
                className='p-2 border rounded-l flex-grow'
              />
              <button className='p-2 text-black border rounded-r'>Subscribe</button> <br />
            </div>
            <p className='text-gray-600 mt-2 lg:mt-0 lg:ml-4'>
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>
        {/* Links Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <h3 className='font-bold mb-2'>Courses</h3>
            <ul>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Business</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Development</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Technology</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Design</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Programming</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-2'>Resources</h3>
            <ul>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Career</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Resume</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Learning</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Interview Preparation</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Jobs</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-2'>About Us</h3>
            <ul>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Contact</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Help/Support</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>FAQ</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Terms and Conditions</a></li>
              <li><a href='#' className='text-gray-600 hover:text-gray-800'>Partners</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className='flex flex-col lg:flex-row justify-between items-center mt-4 pt-4 border-t'>
          <p className='text-gray-600'>&copy; 2023 Ddsgnr. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 lg:mt-0'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>Privacy Policy</a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>Terms of Services</a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>Cookies Setting</a>
          </div>

          <div>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                <FontAwesomeIcon icon={faFacebook} className='h-6 w-6' />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                <FontAwesomeIcon icon={faInstagram} className='h-6 w-6' />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
              </a>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
