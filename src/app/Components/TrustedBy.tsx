import React from 'react';
import Image from 'next/image';

const TrustedBy = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-4 sm:px-8">
        <div className="relative">
          <Image
            src="/trusted.png"
            alt="Trusted By Companies"
            width={1400}
            height={300}
            className="w-full h-auto max-w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;