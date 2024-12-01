import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


function Navbar() {
  return (
   
   <nav className='bg-[#F7F7F7] w-full h-[72px] border-b'>


<div className="container mx-auto flex justify-between items-center h-full px-4">

  {/* logo section */}
<div className='flex-items-center'>
<Image src="/Ddsgnr Library (1).png" alt="Ddsgnr Logo" width={90} height={30} style={{width:'auto', height: 'auto'}}  className='object-cover' priority/>  </div>

{/* Navigation Links */}

<div className='w-full md:w-auto flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 px-8 py-4'>
<Link href="/" className="text-gray-600 hover:text-gray-900 transition">Home</Link>
<Link href="/courses" className="text-gray-600 hover:text-gray-900 transition">Courses </Link>
 <Link href="/services" className="text-gray-600 hover:text-gray-900 transition">Services </Link>
  <Link href="/achievement" className="text-gray-600 hover:text-gray-900 transition">Achievement </Link> 
  <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">About Us</Link> 
  <Link href="/testimonial" className="text-gray-600 hover:text-gray-900 transition">Testimonial </Link>

   </div>
    {/* login and sign up */}
    <div className="w-full md:auto flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0"> 
    <Link href="/login" className="text-gray-600 hover:text-gray-900 transition">Login </Link>
    <Link href="/signup" className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition'>Sign Up</Link>
</div>

</div>

   </nav>
  );
};

export default Navbar;
