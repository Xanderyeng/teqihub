import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

export const CoursesCard = ({index, icon, title, text}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.75 * index, 0.75)}
      className='flex justify-center align-center py-4 gap-16'
    >
      <div
        className='features-glass-box'
        options={{ max: 5, scale: 1, speed: 450 }}
      >
        <span>{icon}</span>
        <p>{title}</p>
        <p className='features-details'>{text}</p>
      </div>
    </motion.div>
  )
}
