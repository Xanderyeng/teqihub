import React from 'react'
import { styles } from '../styles'

export const Hero = () => {
  return (
    <section className="relative z-5 w-full h-[525px] border-0 border-pink">
    {/* border-2 border-pink */}
     <div
        className={` absolute inset-0 top-[90px] max-w-screen-lg max-h-455 bg-backdrop bg-no-repeat bg-top bg-contain mx-auto flex flex-row items-start gap-5  `}
        // border-2 border-blue
      >

    <div className="relative z-0 w-full h-[435px] overlay flex flex-col items-start justify-center ">
    {/* border-2 border-yellow */}
    <div className="flex">

    {/* Hero */}
    <span className='font-sans'>
      <p className='text-[4.2rem] font-semibold '>
        Empowering your
      </p>
      <p className='capitalize font-bold text-mask text-[4.2rem]'>tech journey</p>
    </span>
    </div>

    </div>
      </div>
    </section>
  )
}
