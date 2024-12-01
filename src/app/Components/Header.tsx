import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="bg-[#F7F7F7]">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4 gap-4">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:gap-4 text-center md:text-left">
          <span className="font-normal text-sm">Phone Number: 956 742 455 678</span>
          <span className="hidden md:block border-l border-gray-300 h-4"></span>
          <span className="font-normal text-sm">Email: info@ddsgnr.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          <Image
            src="/icons8-facebook-50.png"
            alt="Facebook"
            width={24}
            height={24}
            className="block"
          />
          <Image
            src="/icons8-instagram-24.png"
            alt="Instagram"
            width={24}
            height={24}
            className="block"
          />
          <Image
            src="/icons8-twitter-50.png"
            alt="Twitter"
            width={24}
            height={24}
            className="block"
          />
          <Image
            src="/icons8-linkedin-24 (1).png"
            alt="LinkedIn"
            width={24}
            height={24}
            className="block"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
