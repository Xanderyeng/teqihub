import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { contactInfo } from "../constants";
import { InfoStrip } from "../containers/InfoStrip";

export const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tjj7wkn",
        "template_tspwuuo",
        {
          from_name: form.name,
          to_name: "contact",
          from_email: form.email,
          to_email: "contact@chepkiyeng.co.ke",
          message: form.message,
        },
        "WdH3o5lrRAnNfbzSF"
      )
      .then(
        () => {
          setLoading(false);
          alert(`Thank you. I will get back to you as soons as possible.`);

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong. Please try again");
        }
      );
  };

  return (
    <section className='relative z-0 h-auto flex items-center flex-col gap-28 pb-0 justify-center border-0 border-blue '>
      <div className='flex flex-col gap-4 relative justify-center items-center'>
        <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-white capitalize'>
          {/* contact us */}
        </span>
        <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
          {/* Accelerate your growth */}
          contact us
          {/* Trust the numbers: Our courses make a difference. */}
        </p>
      </div>
      <div className=' relative z-2 grid grid-cols-10 gap-16 rounded-21 border-0 border-pink w-[75vw] py-0 px-20 bg-contact bg-100% bg-no-repeat bg-center '>
        <div className='absolute inset-0 z-0 h-[100%] w-[100%] rounded-21 contact-overlay'></div>
        {/* ---------- GRID COL 1 -------------- */}
        <div className='relative z-1 flex flex-col col-span-6 pb-16 border-0 border-red'>
          <span className='font-poppins font-normal text-[3.2rem]'>
            {/* <p>Contact Us</p> */}
          </span>
          <p className='font-secondary text-[1.4rem]  '>
            {/* We will get back to you soon as possible. */}
          </p>

          {/* ----------------- FORM ----------------- */}

          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 px-12 rounded-2xl'
          >
            <h3 className={`font-poppins font-normal text-[3.2rem]`}>
            {/* Get in touch with us */}
            </h3>
            <p className={`font-secondary font-light text-[1.4rem] pt-6`}>
              {/* We will get back to you soon as possible. */}
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                {/* <span className='text-white font-medium mb-4'>Your Name</span> */}
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder={`Full Name`}
                  className={`${styles.boxOutline} bg-contactBg2 placeholder:text-[#d2d2d2] py-6 px-8 text-white rounded-md outlined-none border-none text-[1.4rem] font-normal`}
                />
              </label>

              <label className='flex flex-col'>
                {/* <span className='text-white font-medium mb-4'>Email</span> */}
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='E-mail'
                  className={`${styles.boxOutline} bg-contactBg2 placeholder:text-[#d2d2d2] py-6 px-8 text-white rounded-md outlined-none border-none text-[1.4rem] font-medium`}
                />
              </label>
              <label className='flex flex-col'>
                {/* <span className='text-white font-medium mb-4'>Email</span> */}
                <input
                  type='text'
                  name='subject'
                  value={form.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  className={`${styles.boxOutline} bg-contactBg2 placeholder:text-[#d2d2d2] py-6 px-8 text-white rounded-md outlined-none border-none text-[1.4rem] font-medium`}
                />
              </label>
              <label className='flex flex-col'>
                {/* <span className='text-white font-medium mb-4'>Message</span> */}
                <textarea
                  rows='4'
                  type='message'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Message'
                  className={`${styles.boxOutline} bg-contactBg2 placeholder:text-[#d2d2d2] py-6 px-6 text-white rounded-md outlined-none border-none text-[1.4rem] font-medium`}
                />
              </label>
              {/*  <button className='relative px-14 py-4 text-primary capitalize text-[1.6rem] bg-secondary rounded-md hover:bg-transparent hover:text-white'>Explore</button> */}
              <button
                type='submit'
                className={`${styles.boxOutline} bg-tertiary px-14 py-4 text-[#d2d2d2] capitalize text-[1.6rem] outline outline-1 outline-white w-fit text-white font-medium rounded-md hover:bg-white hover:text-card-bg-2`}
              >
                {loading ? "Sending..." : "Connect"}
              </button>
            </form>
          </motion.div>
        </div>
        {/* ---------- GRID COL 2 -------------- */}
        <div className='relative z-1 col-span-4 flex flex-col gap-14 justify-center border-0 border-red'>
                  {/* ------ CONTACT DETAILS ------- */}
          {/* <div className='flex flex-row flex-no-wrap items-center gap-8 border-0 border'>
            <div className='rounded-full flex flex-row p-4 bg-contactBg2 shadow-card'>
              <img src={q} className='w-[2.4em] h-auto' />
              <IonIcon icon={callOutline} className='text-[2.4em]'/>
            </div>
            <span className='text-white'>
              <p className='font-medium text-[1.8rem]'>&#43; 1800 145 276</p>
            </span>
          </div> */}
          {/* ------ END ------- */}
              {contactInfo.map((info, index)=> (
              <InfoStrip key={index} index={index} {...info} />
              ))}

        </div>
      </div>
    </section>
  );
};
