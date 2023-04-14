import React from "react";
import { Contact } from "../../components";
import { partnership } from "../../constants";
import partner from "../../assets/partner_org.avif";
import corp1 from "../../assets/Corporate world.webp"

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
    <section id='partner' className='relative z-10 w-full h-auto top-[51px] border-0 border-red' >
      <div className='relative z-0 top-0 flex flex-col items-center gap-24  border-0 border-red'>
        {/* ---------- HEADING ---------- */}
        {/* <div className='flex flex-col gap-4 relative justify-center w-[75vw] items-center border-2 border-blue'>
          <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-white capitalize'>
            partnership
          </span>

          <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
            partner with teqihub
          </p>
          <span className='font-poppins font-semibold text-[2.4rem] flex flex-col text-white capitalize'>
            Powering the Future with Our Cutting-Edge Premier Gateway
          </span>
        </div> */}
                          {/* ----------------- HERO SECTION ---------------- */}
          <div className='relative z-0 w-full border-0 border-green '>
          {/* <img src={corporate} alt='' className=' object-100%' /> */}
          <div className='relative z-0 flex justify-center h-[85vh] bg-partner bg-no-repeat bg-100% bg-center border-0 border'>
            <div className='absolute inset-0 z-0 h-[100%] overla flex flex-col items-start justify-center' />
            <div className='absolute inset-0 z-0 h-[100%] overlayP flex flex-col items-start justify-center' />
            <div className='absolute inset-0 z-0 h-[100%] overlayPB flex flex-col items-end justify-center' />

            <div className='relative z-500 h-full w-[85vw] flex flex-row border-0 border-red'>
              <div className='relative z-0 pt-[10%] flex flex-col border-0 border-pink'>
                <span className='font-sans text-[2.8rem]'>
                  <p className=' font-medium'>Powering the Future with </p>
                  <p className=' font-medium'>
                  Our Cutting-Edge Premier Gateway
                  </p>
                  {/* <p className=' font-medium'>For Unmatched Success </p> */}

                  {/* <p className='capitalize font-bold text-mask text-[4.2rem]'>
                tech journey
              </p> */}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  ------------ IMAGE SECTION ------------- */}
        {/* <div className="relative z-0 w-[60vw] px-16 bg-partne bg-no-repeat bg-100% border-0 border ">

              <div className="absolute z-10 top-0 w-full h-full rounded-21 border-0 border-blue"></div>
              <div className="relative z-10 flex items-center justify-center grid grid-cols-10 gap-12">


              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              <div className="relative z-30 col-span-2 h-[50vh] bg-partner bg-no-repeat bg-cover rounded-21 border-0 border-red"></div>
              </div>
             

        </div> */}
       
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

      
       

        <div className='w-[70vw] flex flex-col justify-center py-8'>
              {/* ---------- REPEATING COMPONENT > NEEDS ISOLATION */}
        <div className="flex flex-row gap-16 border-0 border">
            <div className="flex items-center justify-center bg-cor bg-no-repeat bg-contain rounded-21 flip-horizontally border-0 borde overl ">
           {/* <img src={corp1} className="w-[105em] rounded-21" /> */}
           <span className="w-[30em] h-[30em] rounded-21 bg-main-bg"></span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className='font-white w-[9] font-extralight font-inter text-[1.8rem]' >
              We cater to companies seeking to recruit junior to experienced IT professionals, tap into our large pool of industry-ready graduates with IT skills across various domains.
              </p>
            </div>
          </div>
          {/* ----------------------------------- BOX 2 ------------------------------- */}

          <div className="flex flex-row gap-16 border-0 border">
           
            <div className="flex flex-row justify-center items-center">
              <p className='font-white w-[9] font-extralight font-inter text-[1.8rem]' >
              We are committed to providing transformative, tech-based learning experiences to our alumni, as part of this effort, we organize events that enable our talent pool to interact with the industry and gain valuable exposure.
              </p>
            </div>
            <div className="flex items-center justify-center bg-cor bg-no-repeat bg-contain rounded-21 flip-horizontally border-0 borde overl ">
           {/* <img src={corp1} className="w-[105em] rounded-21" /> */}
           <span className="w-[30em] h-[30em] rounded-21 bg-main-bg"></span>
            </div>
          </div>

          {/* -------------------------------- BOX 3 ---------------------------------- */}
          <div className="flex flex-row gap-16 border-0 border">
            <div className="flex items-center justify-center bg-cor bg-no-repeat bg-contain rounded-21 flip-horizontally border-0 borde overl ">
           {/* <img src={corp1} className="w-[105em] rounded-21" /> */}
           <span className="w-[30em] h-[30em] rounded-21 bg-main-bg"></span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className='font-white w-[9] font-extralight font-inter text-[1.8rem]' >
              By partnering with TEQihub, companies can access a diverse talent pool and foster a strong talent pipeline for their IT needs. 
              </p>
            </div>
          </div>
          {/* -------------------------------- END OF BOX 3 ---------------------------------- */}
            {/*  -------- MAPPING OVER TEXT CONTENT -------- */}
          {/* <span className='flex flex-col gap-16'>
            {partnership.map((data, index) => (
              <p
                key={index}
                index={index}
                className='font-white font-extralight font-inter text-[1.8rem]'
              >
                {data.text}
              </p>
            ))}
          </span> */}
        </div>
      </div>
      <Contact />
    </section>
  );
};
