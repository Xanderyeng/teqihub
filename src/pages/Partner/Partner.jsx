import React from 'react'
import { Contact } from '../../components'
import { partnership } from '../../constants'

export const Partner = ({ scrollToId }) => {
  React.useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollToId]);
  return (
    <section id='partner' className='relative z-10 w-full h-auto top-[51px] border-0 border-red'>
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
      <Contact/>
    </section>
  )
}
