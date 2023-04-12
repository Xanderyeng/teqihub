import React from "react";
import { Contact } from "../../components";
import { partnership } from "../../constants";
import partner from "../../assets/partner.avif";

export const Partner = ({ scrollToId }) => {
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
      id='partner'
      className='relative z-10 w-full h-auto top-[51px] border-0 border-red'
    >
      <div className='relative z-0 top-0 flex flex-col items-center gap-24 py-16 border-0 border'>
        {/* ---------- HEADING ---------- */}
        <div className='flex flex-col gap-4 relative justify-center w-[75vw] items-center border-0 border-blue'>
          {/* <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-white capitalize'>
            partnership
          </span> */}

          <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
            partner with teqihub
          </p>
          <span className='font-poppins font-semibold text-[2.4rem] flex flex-col text-white capitalize'>
            Powering the Future with Our Cutting-Edge Premier Gateway
          </span>
        </div>
        {/*  ------------ IMAGE SECTION ------------- */}
        <div className="relative z-0 w-[60vw] px-16 bg-partne bg-no-repeat bg-100% border-0 border ">

              <div className="absolute z-10 top-0 w-full h-full rounded-21 border-0 border-blue"></div>
              <div className="relative z-10 flex items-center justify-center grid grid-cols-10 gap-12">


              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              </div>
             

              </div>
       
              {/* <div className="relative z-0 w-[60vw] px-16 border-2 border">

<div className="absolute z-0 top-0 z-0 bg-maroon">
  <img className="block w-full" src={partner} alt="My Image" />
</div>

<div className="relative z-0 grid grid-cols-5 gap-4">
  <div className="relative z-0 h-[50vh] bg-transparent rounded-21 border-2 border-red"></div>
  <div className="relative z-0 h-[50vh] bg-transparent rounded-21 border-2 border-red"></div>
  <div className="relative z-0 h-[50vh] bg-transparent rounded-21 border-2 border-red"></div>
  <div className="relative z-0 h-[50vh] bg-transparent rounded-21 border-2 border-red"></div>
  <div className="relative z-0 h-[50vh] bg-transparent rounded-21 border-2 border-red"></div>
</div>

</div> */}

        {/*  -------- TEXT CONTENT -------- */}
        <div className='w-[70vw] flex flex-col justify-center py-8'>
          <span className='flex flex-col gap-16'>
            {partnership.map((data, index) => (
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
