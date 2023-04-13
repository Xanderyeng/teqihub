import React from "react";
import corporate from "../../assets/corporate.avif";
import { Contact } from "../../components";
import { corp } from "../../constants";
import { cyberSecurity } from "../../assets";
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
      <div className='relative z-29 w-full border-0 border-pink z-0 top-0 flex flex-col items-center gap-24 pb- border-0 border'>
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
              {/* <div className='w-[600px] h-[180px] bg-peach rounded-21'></div> */}
          <span className='flex flex-col gap-16'>
                                  {/* --------------------    -------------------- */}
          <div className="flex flex-row gap-32 border-0 border">
            <div className="flex items-center justify-center w-[1800px] h-[280px] bg-corp2 bg-no-repeat bg-contain rounded-21 flip-horizontally border-0 borde overl ">
            <span className=' w-24 h-24 card-svg -rotate-45'>
            {/* {cyberSecurity} */}
          </span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className='font-white w-[90%] font-extralight font-inter text-[1.8rem]' >
              In today's corporate world, technology is developing at an unprecedented pace, and staying ahead of the curve is critical for business success. At TEQihub, we understand the importance of having a highly skilled workforce that can navigate the ever-changing technological landscape with ease.
              </p>
            </div>
          </div>
                                  {/* --------------------    -------------------- */}
          <div className="flex flex-row gap-4 items-center rounded-21 pt-32 ">
            <div>
              <p className='font-white w-[90%] pl-32 font-extralight font-inter text-[1.8rem]' >
              We offer customized IT corporate training solutions that are tailored to meet the unique needs of your organization. Our primary goal is to empower your employees with the knowledge and skills they need to use and manage technology effectively to achieve your business objectives.
              </p>
            </div>
            <div className=" flex items-center justify-center w-[500px] h-[] bg-corp1 rounded-21 rotate- bg-100% ">
            <span className=' w-24 h-24 card-svg -rotate-45'>
            {/* {cyberSecurity} */}
          </span>
            </div>
          </div>
                                 {/* --------------------    -------------------- */}
          <div className="flex flex-row gap-32 pt-32">
            <div className=" flex items-center justify-center  w-[1000px] h-[200px] bg-contactBg2 rounded-21 rotate-45 ">
            <span className=' w-24 h-24 card-svg -rotate-45'>
            {cyberSecurity}
          </span>
            </div>
            <div>
              <p className='font-white w-[80%] font-extralight font-inter text-[1.8rem]' >
              Investing in your employees' technology skills can yield numerous benefits for your organization, such as increased productivity, improved job performance, reduced employee turnover, and enhanced competitiveness in the market. By partnering with TEQihub, you can ensure that your workforce is equipped to tackle the challenges of the digital age and position your organization for sustained success.
              </p>
            </div>
          </div>
            {/* {corp.map((data, index) => (
              <div >
              <div key={index} index={index} className='flex flex-row gap-16'>
              <p className='font-white font-extralight font-inter text-[1.8rem]' >
                {data.text}
              </p>
              </div>
              </div>
            ))} */}
          </span>
        </div>
      </div>
      <Contact />
    </section>
  );
};
