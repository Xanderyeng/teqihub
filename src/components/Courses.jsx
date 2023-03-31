import React from "react";
// import { courses } from '../constants'
// import { CoursesCard } from '../components'
import { dataAnalytics } from "../assets";

export const Courses = () => {
  return (
    <section className='relative z-2 bg-sectionOverlay flex items-center justify-center border-0 border-blue '>
          {/* THIS DIV CONTAINER HOLDS ALL CHILD ELEMENTS  */}
      <div className='max-w-screen-lg w-full flex flex-col justify-center items-center h-[65vh] border-0 border-yellow'>
        <div className='flex flex-col items-center border-0 border-blue'>
          <span className='font-poppins font-semibold text-center leading-8 text-mask'>
            Course List.
          </span>
          <h1 className='font-poppins text-[4.8rem] text-center font-semibold capitalize '>
            our courses
          </h1>
          <div className='w-full'></div>
          <span className='w-[65%] font-inter text-[1.4rem] text-center font-light text-text-gray'>
            Interactive and effective training options customized to your unique
            needs and skillset, including self-paced online courses with
            workplace capstone projects, to help you gain practical experience
            and take your career to the next level.
          </span>
        </div>
        {/* DIV TO HOLD THE CARDS */}

        <div className='flex items-center justify-center p-16 border-2 border-pink'>
          <div className='grid grid-cols-4 gap-16'>
                {/* SAMPLE CARD */}
            <div className='border-2 border-pink w-32 h-32'>
            <span>{dataAnalytics}</span>
                   <p>Data Analytics</p>
              <p className='features-details'>lorem Ipsum</p>

            </div>
            <div className='border-2 border-pink w-32 h-32'></div>
            <div className='border-2 border-pink w-32 h-32'></div>
            <div className='border-2 border-pink w-32 h-32'></div>
            {/* {courses.map((course, index) => (
           <CoursesCard key={course.title} index={index} {...course}/>   
      ))} */}
          </div>
        </div>

      </div>
    </section>
  );
};
