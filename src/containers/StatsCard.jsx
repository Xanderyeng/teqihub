import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const StatsCard = ({ title, number, icon, index }) => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <div className='flex flex-col justify-center [nth-child(even)]:text-center mx-6 border-blue border-0'>
        <span className='font-poppins font-medium text-[32px] text-inherit capitalize'>
          {counterOn && (
            <CountUp start={0} end={number} duration={1.5} delay={index/1.75} />
          )}
          &nbsp;
          {icon}
        </span>
        <p className='font-inter text-[16px] font-light capitalize whitespace-normal text-inherit'>
          &nbsp;{title}
        </p>
        
      </div>
      
    </ScrollTrigger>
  );
};
