import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

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
    <section className='relative z-0 h-auto flex items-center flex-col gap-28 py-0 justify-center border-0 border-blue '>
    
      <div className='flex flex-col gap-4 relative justify-center items-center'>
        <span className='font-poppins font-semibold text-[1.8rem] flex flex-col text-mask capitalize'>
          contact us.
        </span>
        <p className='font-poppins text-[3.2rem] font-semibold capitalize'>
          {/* Accelerate your growth */}
          get in touch with us
          {/* Trust the numbers: Our courses make a difference. */}
        </p>
      </div>
      <div className=' relative z-2 grid grid-cols-10 gap-16 rounded-21 border-2 border-pink w-[75vw] py-32 px-20 bg-contact bg-100% bg-no-repeat bg-center '>
      <div className="absolute inset-0 z-0 h-[100%] w-[100%] rounded-21 contact-overlay"></div>
              {/* ---------- GRID COL 1 -------------- */}
        <div className='relative z-1 flex flex-col col-span-6 border-2 border-red'>
          {/* <span className='font-poppins font-normal text-[3.2rem]'>
            <p>Drop us a message</p>
          </span>
          <p className='font-secondary text-[1.4rem]  '>
            We will get back to you soon as possible.
          </p> */}

          {/* ----------------- FORM ----------------- */}

          <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={`font-poppins font-normal text-[3.2rem]`}>Drop us a message</h3>
        <p className={`font-secondary text-[1.4rem]`}>We will get back to you soon as possible.</p>
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
              className='bg-contactBg placeholder:text-primary py-6 px-8 text-white rounded-full outlined-none border-none text-[1.4rem] font-normal'
            />
          </label>

          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Email</span> */}
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Work email'
              className='bg-contactBg placeholder:text-primary py-6 px-8 text-white rounded-full outlined-none border-none text-[1.4rem] font-medium'
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
              className='bg-contactBg placeholder:text-primary py-6 px-8 text-white rounded-full outlined-none border-none text-[1.4rem] font-medium'
            />
          </label>
          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Message</span> */}
            <textarea
              rows='7'
              type='message'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Message'
              className='bg-contactBg placeholder:text-primary py-6 px-6 text-white rounded-21 outlined-none border-none text-[1.4rem] font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>


        </div>
            {/* ---------- GRID COL 2 -------------- */}
        <div className='realtive z-1 col-span-4 border-2 border-red'>contact</div>
      </div>
    </section>
  );
};
