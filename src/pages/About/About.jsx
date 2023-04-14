import React from "react";
import { Contact } from "../../components";
import { aboutData } from "../../constants";

export const About = () => {
  return (
    <section className='relative z-10 w-full top-[51px] border-0 border-red'>
      <div className='relative z-0 top-0 flex flex-col items-center gap-24 pb-32 border-0 border'>
        {/* ---------- HEADING ---------- */}
        {/* <div className='flex flex-col gap-4 relative justify-center w-[75vw] items-center border-0 border-blue'>
          <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-white capitalize'>
            about
          </span>
          <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
            who we are
          </p>
        </div> */}

        {/* ----------------- HERO SECTION ---------------- */}
        <div className='relative z-0 w-full border-0 border-green '>
          {/* <img src={corporate} alt='' className=' object-100%' /> */}
          <div className='relative z-0 flex justify-center h-[85vh] bg-about bg-no-repeat bg-100% bg-center border-0 border'>
            <div className='absolute inset-0 z-0 h-[100%] overla flex flex-col items-start justify-center' />
            <div className='absolute inset-0 z-0 h-[100%] overla flex flex-col items-start justify-center' />
            <div className='absolute inset-0 z-0 h-[100%] overlayPB flex flex-col items-end justify-center' />

            <div className='relative z-500 h-full w-[85vw] flex flex-row border-0 border-red'>
              <div className='relative z-0 pt-[10%] flex flex-col border-0 border-pink'>
                <span className='font-sans text-[2.8rem]'>
                  <p className=' font-medium'>Elevate Your Career </p>
                  <p className=' font-medium'>
                  with Our Transformational Courses
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

        
                          {/*  -------- TEXT CONTENT -------- */}
        <div className='w-[70vw] flex flex-col justify-center gap-28 py-8'>
                 {/* ---------- REPEATING COMPONENT > NEEDS ISOLATION */}
                 <div className="flex flex-row gap-16 border-0 border">
            <div className="flex items-center justify-center bg-cor bg-no-repeat bg-contain rounded-21 flip-horizontally border-0 borde overl ">
           {/* <img src={corp1} className="w-[105em] rounded-21" /> */}
           <span className="w-[30em] h-[30em] rounded-21 bg-main-bg"></span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className='font-white w-[9] font-extralight font-inter text-[1.8rem]' >
              The field of Information Technology (IT) is rapidly evolving, and staying up-to-date with the latest trends and developments is crucial in today's digital world. With businesses and organizations increasingly relying on technology to respond to market demands and streamline their operations, the demand for IT professionals has grown significantly.
              </p>
            </div>
          </div>
         {/* ----------------------------------- BOX 2 ------------------------------- */}

         <div className="flex flex-row gap-16 border-0 border">
           
           <div className="flex flex-row justify-center items-center">
             <p className='font-white w-[9] font-extralight font-inter text-[1.8rem]' >
             That's where TEQihub comes in - as a leading resource and training provider, we specialize in courses focused on Data Science, Data Analytics, Data Engineering, AI Machine Learning, and Cyber Security.
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
             Our goal at TEQihub is to equip professionals with a competitive edge in the technology realm. <br/> Our courses are designed and customized by top industry experts who bring a wealth of experience and knowledge to the table, ensuring that our students are well-equipped to meet the demands of the job market. <br/> <br/> In addition to our training courses, our platform serves as a conduit between tech opportunities, job seekers, and employers, making it easier for our graduates to find job placements that align with their skill sets and career goals. 
             </p>
           </div>
         </div>
         {/* -------------------------------- END OF BOX 3 ---------------------------------- */}

          {/* <span className='flex flex-col gap-16'>
            {aboutData.map((data, index) => (
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
      <Contact/>
    </section>
  );
};
