import React from "react";
import corporate from "../../assets/corporate.avif";
import corp1 from "../../assets/Corporate world.webp"
import corp2 from '../../assets/Corporate_world_II.avif'
import corp3 from "../../assets/ApplicationCodeLibraries.avif"
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
      <div className='relative z-29 w-full border-0 border-pink z-0 top-0 flex flex-col items-center gap-24 pb-40 border-0 border'>
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
            <div className='absolute inset-0 z-0 h-[100%] overlayL flex flex-col items-start justify-center  border-0 border' />
            <div className='absolute inset-0 z-0 h-[100%] overlayR flex flex-col items-end justify-center' />
            <div className='absolute inset-0 z-0 h-[100%] overlayB2 flex flex-col items-start justify-center' />

            <div className='relative z-500 h-full w-[85vw] flex flex-row border-0 border-red'>
              <div className='relative z-0 pt-[10%] flex flex-col border-0 border-pink'>
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
        <div className=' w-[70vw] flex flex-col justify-center py-0'>
              {/* <div className='w-[600px] h-[180px] bg-peach rounded-21'></div> */}
          <span className='relative flex flex-col gap-16'>
                                  {/* --------------------  BOX 1  -------------------- */}
          <div className="relative flex flex-row gap-24 pt-32">
           
            <div className="relative flex flex-row justify-center pl-16 pr-32 py-32 -mr-96 items-center bg-corp-a border-0 border-red">
              <p className='relative z-20 top-0 font-white -mr-16 font-extralight font-ubuntu text-[1.8rem]' >
              Investing in your employees' technology skills can yield numerous benefits for your organization, such as increased productivity, improved job performance, reduced employee turnover, and enhanced competitiveness in the market.<br/><br/> By partnering with TEQihub, you can ensure that your workforce is equipped to tackle the challenges of the digital age and position your organization for sustained success.
              </p>
            </div>
             <div className="relative z-0 flex items-center justify-center h-auto transform -scale-x-100 border-0 border-red">
             {/* <div className=" relative z-10 bg-pink"></div> */}
              <img src={corp3} className="relative z-5 w-[180em] h-auto " />
              <div className='absolute inset-0 z-0 h-auto overlayCorpA flex items-start justify-center border-0 border-green' />
            </div>
          </div>
         
                                  {/* --------------------  BOX 2  -------------------- */}
          <div className="relative flex flex-row gap-4 items-center max-w-[75vw] mt-72 pt-32 border-0 border-green ">
            <div className=" relative -top-80 flex flex-col justify-center h-[48rem] rounded-[60% / 58%] pl-32  py-28 -mr-72 bg-corp-b border-0 border-green" style={{ borderRadius: "60% / 58%" }}>
            {/* <div className=""></div> */}
              <p className='relative z-20 -top-0 text-main-bg-2 font-normal w-[80%] text-center font-ubuntu text-[1.8rem]' >
              We offer customized IT corporate training solutions that are tailored to meet the unique needs of your organization. <br/><br/> Our primary goal is to empower your employees with the knowledge and skills they need to use and manage technology effectively to achieve your business objectives.
              </p>
            </div>
            <div className="relative z-0 flex items-center justify-center bg-corp1 rounded-21 bg-100% border-0 border-red ">
            <img src={corp2} className="relative z-0 w-[100em] h-auto rounded-21" />
            <div className='absolute z-0 inset-0 z-0 h-auto overlayCorpB flex items-start justify-center rounded-21 border-0 border-green' />
            </div>
          </div>
                                 {/* --------------------  BOX 3  -------------------- */}
                                 <div className="flex flex-row gap-16  border-0 border">
            <div className="flex items-center justify-center bg-cor bg-no-repeat bg-contain rounded-21 flip-horizontally border-0 borde overl ">
           <img src={corp1} className="w-[105em] rounded-21" />
            </div>
            <div className="flex flex-row justify-center items-center outline outline-2 outline-card-bg-2 p-4 border-0 border-red">
              <p className='font-white w-[9] font-extralight font-inter text-[1.8rem] bg- border-0 border-green' >
              In today's corporate world, technology is developing at an unprecedented pace, and staying ahead of the curve is critical for business success. <br/><br/> At TEQihub, we understand the importance of having a highly skilled workforce that can navigate the ever-changing technological landscape with ease.
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
