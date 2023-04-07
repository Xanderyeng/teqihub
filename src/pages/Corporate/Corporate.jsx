import React from "react";
import corporate from '../../assets/corporate.avif'
import { Contact } from "../../components";
import { corp } from "../../constants";

export const Corporate = () => {
  return (
    <section className='relative z-10 w-full h-auto top-[51px] border-0 border-red'>
      <div className='relative z-0 top-0 flex flex-col items-center gap-24 py-16 border-0 border'>
                       {/* ---------- HEADING ---------- */}
        <div className='flex flex-col gap-4 relative justify-center w-[75vw] items-center border-0 border-blue'>
          <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-white capitalize'>
            corporate
          </span>
          <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
            corporate training
          </p>
        </div>
                                {/* -------- IMAGE ------- */}
        <div className='relative z-0 w-[55vw] rounded-3xl border-0 border-green '>
          <div className='absolute inset-0 z-0 h-full overlay2 flex flex-col items-start justify-center border-0 border-green rounded-3xl'></div>
          <img src={corporate} alt='' className='rounded-3xl object-cover' />
        </div>
                          {/*  -------- TEXT CONTENT -------- */}
        <div className='w-[70vw] flex flex-col justify-center py-8'>
          <span className='flex flex-col gap-16'>
            {corp.map((data, index) => (
              <p
                key={index}
                index={index}
                className='font-white font-extralight font-inter text-[1.8rem]'
              >
                {data.text}
              </p>
            ))}
          </span>
        </div>
      </div>
      <Contact />
    </section>
  );
};
