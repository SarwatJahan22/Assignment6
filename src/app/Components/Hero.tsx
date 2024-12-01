import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white py-20 w-full min-h-[800px]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left px-4 md:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Learn new skills <br /> online with ease
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Discover a wide range of courses covering a variety of <br />
            subjects, taught by expert instructors.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Start learning now
            </button>
            <button className="bg-gray-200 text-black px-6 py-3 rounded hover:bg-gray-300 transition">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 px-4">
          <Image
            src="/Image.png"
            alt="Person holding a book"
            width={600}
            height={950}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;