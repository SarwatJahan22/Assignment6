import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';

function OurTeam() {
  return (
    <div className='bg-[#F7F7F7] max-w-[1300px] mx-auto px-4 py-10'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 text-center'>Our Team</h2>
        <p className='text-center mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Member 1 */}
        <div className='px-4 py-6 bg-white rounded-lg shadow-md text-center'>
          <Image src='/image 1.png' alt='James Nduku' width={80} height={80} style={{width:'auto', height:'auto'}} className='cover' />
          <h3 className='mt-4 text-xl font-semibold'>James Nduku</h3>
          <p className='text-gray-600'>Marketing Coordinator</p>
          <div className='flex justify-center mt-4 space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faDribbble} className='h-6 w-6' />
            </a>
          </div>
        </div>

        {/* Member 2 */}
        <div className='px-4 py-6 bg-white rounded-lg shadow-md text-center'>
          <Image src='/image 2.png' alt='Joseph Munyambu' width={80} height={80} style={{width:'auto', height:'auto'}} className='mx-auto rounded-full' />
          <h3 className='mt-4 text-xl font-semibold'>Joseph Munyambu</h3>
          <p className='text-gray-600'>Nursing Assistant</p>
          <div className='flex justify-center mt-4 space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faDribbble} className='h-6 w-6' />
            </a>
          </div>
        </div>

        {/* Member 3 */}
        <div className='px-4 py-6 bg-white rounded-lg shadow-md text-center'>
          <Image src='/image 3.png' alt='Joseph Ngumbau' width={80} height={80} style={{width:'auto', height:'auto'}} className='mx-auto rounded-full' />
          <h3 className='mt-4 text-xl font-semibold'>Joseph Ngumbau</h3>
          <p className='text-gray-600'>Medical Assistant</p>
          <div className='flex justify-center mt-4 space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faDribbble} className='h-6 w-6' />
            </a>
          </div>
        </div>

        {/* Member 4 */}
        <div className='px-4 py-6 bg-white rounded-lg shadow-md text-center'>
          <Image src='/image 4.png' alt='Erick Kipkemboi' width={80} height={80} style={{width:'auto', height:'auto'}} className='mx-auto rounded-full' />
          <h3 className='mt-4 text-xl font-semibold'>Erick Kipkemboi</h3>
          <p className='text-gray-600'>Web Designer</p>
          <div className='flex justify-center mt-4 space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faDribbble} className='h-6 w-6' />
            </a>
          </div>
        </div>

        {/* Member 5 */}
        <div className='px-4 py-6 bg-white rounded-lg shadow-md text-center'>
          <Image src='/image 5.png' alt='Stephen Kerubo' width={80} height={80} style={{width:'auto', height:'auto'}} className='mx-auto rounded-full' />
          <h3 className='mt-4 text-xl font-semibold'>Stephen Kerubo</h3>
          <p className='text-gray-600'>President of Sales</p>
          <div className='flex justify-center mt-4 space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faDribbble} className='h-6 w-6' />
            </a>
          </div>
        </div>

        {/* Member 6 */}
        <div className='px-4 py-6 bg-white rounded-lg shadow-md text-center'>
          <Image src='/image 6.png' alt='John Leboo' width={80} height={80} style={{width:'auto', height:'auto'}} className='mx-auto rounded-full' />
          <h3 className='mt-4 text-xl font-semibold'>John Leboo</h3>
          <p className='text-gray-600'>Dog Trainer</p>
          <div className='flex justify-center mt-4 space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>
              <FontAwesomeIcon icon={faDribbble} className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
