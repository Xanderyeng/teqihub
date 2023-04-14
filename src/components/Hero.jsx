import React from "react";
import { stats } from "../constants/index";
import { StatsCard } from "../containers/StatsCard";

export const Hero = () => {
  return (
    // h-[545px]
    <section className='relative z-29 w-full h-[95vh] border-0 border-pink '>
      {/* border-2 border-pink */}
      <div
        //  max-h-475
        className={`absolute inset-0 top-[51px] max-h-[100vh] bg-hero2 bg-no-repeat bg-center bg-100% mx-auto flex flex-row justify-center border-t-2 border-white gap-5 border-0 border-red `}
        //
      >
        {/* h-[455px] */}
        <div className='absolute inset-0 z-0 w-full overlay flex flex-col items-start justify-center border-0 border-green'></div>
        {/* border-2 border-yellow */}
        {/* Hero */}
        <div className='relative h-full w-[75vw] flex flex-row items-center border-0 border-red'>
          {/* border-2 border-red */}
          <div
            className=' flex flex-col justify-center border-0 border-pink
    '
          >
            <span className='font-sans'>
              <p className='text-[4.2rem] font-semibold'>Empowering your</p>
              <p className='capitalize font-bold text-mask text-[4.2rem]'>
                tech journey
              </p>
            </span>
            <div className='pt-16'>
              <button className='capitalize outline outline-2 outline-primary px-14 py-4 text-[1.6rem] text-primary hover:text-[#eaedf0] hover:-translate-y-1 hover:scale-105 duration-300'>
                Learn More
              </button>
            </div>
          </div>
          <div className='absolute bottom-0 px-12 py-6 rounded-t-21 text-black bg-white grid grid-cols-3 gap-8 justify-center align-center grid-rows-1'>
            {stats.map((stat, index) => (
              <StatsCard key={stat.title} index={index} {...stat}>
              
              </StatsCard>
              
            ))}
            <div className="absolute z-50 left-[33%] top-[15%] h-[70%] w-[1px] bg-black"></div>
            <div className="absolute z-50 left-[66%] top-[15%] h-[70%] w-[1px] bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
