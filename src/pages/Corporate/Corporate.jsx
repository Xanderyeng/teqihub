import React from "react";
import corporate from "../../assets/corporate.avif";
import { Contact } from "../../components";
import { corp } from "../../constants";
// import image1 from '../../assets/image3'

export const Corporate = ({ scrollToId }) => {
  React.useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToId]);
  return (
    <section
      id='corporate'
      className='relative z-10 w-full h-auto top-[52px] border-0 border-red'
    >
      <div className='relative z-29 w-full border-0 border-pink z-0 top-0 flex flex-col items-center gap-24 pb-16 border-0 border'>
        {/* <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-white capitalize'>
            corporate
          </span> */}
        {/* ---------- HEADING ---------- */}
        {/* <div className='flex flex-col gap-4 relative justify-center w-[75vw] items-center border-0 border-blue'>
          
          <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
            corporate training
          </p>
          <span className='font-poppins font-semibold text-[2.2rem] flex flex-col text-white capitalize'>
          Empower Your Team with State-of-the-Art Data Techniques for Unmatched Success
          </span>
        </div> */}
        {/* -------- IMAGE ------- */}
        <div className='relative z-0 w-full border-0 border-green '>
          {/* <img src={corporate} alt='' className=' object-100%' /> */}
          <div className='relative z-0 flex justify-center h-[85vh] bg-corporate bg-no-repeat bg-contain bg-center border-0 border'>
            <div className='absolute inset-0 z-0 h-[100%] overlayB flex flex-col items-start justify-center' />
            <div className='absolute inset-0 z-0 h-[100%] overlayL flex flex-col items-start justify-center' />
            <div className='absolute inset-0 z-0 h-[100%] overlayR flex flex-col items-end justify-center' />

            <div className='relative z-500 h-full w-[85vw] flex flex-row items-center border-0 border-red'>
              <div className=' flex flex-col justify-center border-0 border-pink'>
                <span className='font-sans text-[2.8rem]'>
                  <p className=' font-medium'>Empower Your Team With </p>
                  <p className=' font-medium'>
                    State-Of-The-Art Data Techniques
                  </p>
                  <p className=' font-medium'>For Unmatched Success </p>

                  {/* <p className='capitalize font-bold text-mask text-[4.2rem]'>
                tech journey
              </p> */}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  -------- TEXT CONTENT -------- */}
        <div className=' w-[70vw] flex flex-col justify-center py-8'>
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
