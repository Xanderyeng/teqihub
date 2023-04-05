import React from "react";

export const Hero = () => {
  return (
    // h-[545px]
    <section className='relative z-29 w-full h-[95vh] border-0 border-pink '>
      {/* border-2 border-pink */}
      <div
      //  max-h-475
        className={`absolute inset-0 top-[55px] max-h-[100vh] bg-backdrop bg-no-repeat bg-center bg-100% mx-auto flex flex-row justify-center gap-5 border-0 border-red `}
        //
      >
      {/* h-[455px] */}
        <div className='absolute inset-0 z-0 w-full overlay flex flex-col items-start justify-center border-0 border-green'></div>
          {/* border-2 border-yellow */}
              {/* Hero */}
          <div className='relative h-full w-[75vw] flex flex-row items-center '>
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
              <button className='capitalize outline outline-2 outline-primary px-14 py-4 text-[1.6rem] text-primary hover:text-[#eaedf0] hover:-translate-y-1 hover:scale-105 duration-300'>Learn More</button>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
};
