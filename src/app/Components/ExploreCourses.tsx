import React from 'react';

function ExploreCourses() {
  return (
    <div className='bg-white max-w-screen-xl mx-auto py-16 px-4 sm:px-8'>
      <div className='text-center mb-12'>
        <h2 className='sm:text-2xl font-bold text-black'>Explore Courses By Category</h2>
        <p className='text-gray-600 text-base sm:text-lg mt-4'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Category Cards */}
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Design and Development</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Marketing</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Development</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Communication</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Digital Marketing</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Self Development</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Business</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Finance</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>Consulting</h3>
          <p className='text-gray-600'>50+ Courses Available</p>
        </div>
      </div>
      <div className='text-center mt-8'>
      <button className='w-[155px] h-[48px] px-6 py-2 border-[1px]'>View Courses</button>
      </div>
    </div>
  );
}

export default ExploreCourses;




