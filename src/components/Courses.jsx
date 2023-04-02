import React from "react";
import { courses } from '../constants'
import { CoursesCard } from '../components'

export const Courses = () => {
  return (
    <section className='relative z-10 h-auto bg-courseBgg flex items-center py-32 justify-center border-0 border-blue '>
                {/* ADDS THE RADIAL BACKGROUND BLUR GLOW */}
    <div className="absolute z-0 top-[45%] section-radial-bg rounded-[100%] w-[45vw] h-[5vh]"/>
      {/* THIS DIV CONTAINER HOLDS ALL CHILD ELEMENTS  */}
      <div className='relative max-w-[80vw] flex flex-col gap-16 justify-center items-center h-auto border-0 border-yellow '>
        <div className='relative flex flex-col gap-4 items-center border-0 border-blue'>
          <span className='font-poppins font-semibold text-center leading-8 text-mask'>
            Course List.
          </span>
          <h1 className='font-poppins text-[4.8rem] text-center font-semibold capitalize '>
            courses
          </h1>
          <div className='w-full'></div>
          <span className='w-[65%] font-inter text-[1.4rem] text-center font-light text-white'>
            Interactive and effective training options customized to your unique
            needs and skillset, including self-paced online courses with
            workplace capstone projects, to help you gain practical experience
            and take your career to the next level.
          </span>
        </div>
                         {/* DIV TO HOLD THE CARDS */}

        <div className='flex items-center justify-center w-full px-0 py-16 border-0 border-pink'>
          <div className='grid grid-cols-4 gap-16'>
            {/* ------------ SAMPLE CARD --------------- */}
                {courses.map((course, index) => (
                  <CoursesCard key={course.title} index={index} {...course}/>
                ))}
            
            {/* ----------------- */}
           
          </div>
        </div>
        {/* {courses.map((course, index) => (
           <CoursesCard key={course.title} index={index} {...course}/>   
      ))} */}
      </div>
    </section>
  );
};
