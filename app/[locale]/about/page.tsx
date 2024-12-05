import React from 'react';
import Woman from '@/public/img/about/woman.png';
import Link from 'next/link';
import Image from 'next/image';

function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="container mt-32 mx-auto flex flex-col md:flex-row items-center justify-center gap-x-8 text-center md:text-left">
       
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
            <Image
              src={Woman}
              alt="image"
              className="object-cover h-auto w-[450px] transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            />
       
        </div>

  
        <div className="flex-1 flex mt-10 flex-col items-center md:items-start justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-base text-left md:text-lg mb-6 max-w-sm md:max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptate, consequuntur maiores eveniet mollitia nulla quod incidunt
            molestiae libero earum.
          </p>
          <Link
            href="/portfoglio"
            className="py-[18px] px-[50px] h-[66px] w-56 flex items-center justify-center text-base uppercase  font-semibold  text-white bg-black"
          >
            View My Work
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
