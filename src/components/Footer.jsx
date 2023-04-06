import React, { useState, useRef } from "react";
import { addresses, navLinks } from "../constants/index";
import { IonIcon } from "@ionic/react";
import { styles } from "../styles";
import { logo } from "../assets";
import {
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoWhatsapp,
} from "ionicons/icons";

export const Footer = () => {
  const [active, setActive] = useState("");
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
  });

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
          from_email: form.email,
          to_email: "info@teqihub.com",
        },
        "WdH3o5lrRAnNfbzSF"
      )
      .then(
        () => {
          setLoading(false);
          alert(`Thank you. I will get back to you as soons as possible.`);

          setForm({
            email: "",
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
    <footer className='relative z-0 h-auto flex items-center flex-col gap-2 pb-4 justify-center border-0 border-blue '>
      <div className='grid grid-cols-4 gap-16 max-w-[75vw] pt-40 pb-28 border-b-2 border-contactBg2'>
        {/*  ------- COLUMN 1 ------- */}
        <div className='flex flex-col gap-16 justify-center border-0 border'>
          <img
            src={logo}
            alt='logo'
            className='w-[14em] h-auto object-contain'
          />
          <div className='flex flex-col gap-0 border-0 border-red'>
            {/* <span className='font-normal text-[1.4rem]'>
              <p>Find us</p>
            </span> */}
            <span className='flex flex-row gap-8'>
              <IonIcon icon={logoFacebook} className='text-[2.2em] hover:cursor-pointer hover:text-icons' />
              <IonIcon icon={logoTwitter} className='text-[2.2em] hover:cursor-pointer hover:text-icons' />
              <IonIcon icon={logoInstagram} className='text-[2.2em] hover:cursor-pointer hover:text-icons' />
              <IonIcon icon={logoWhatsapp} className='text-[2.2em] hover:cursor-pointer hover:text-icons' />
            </span>
          </div>
        </div>
        {/*  ------- COLUMN 2 ------- */}
        <div className='flex-col px-16 py-4 sm:flex gap-4 border-0 border'>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                active === link.title ? "text-hover" : "text-primary"
              } hover:text-hover text-[1.4rem] gap-8 font-light cursor-pointer list-none capitalize `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </div>
        {/*  ------- COLUMN 3 ------- */}
        <div className='flex-col px-16 py-4 sm:flex gap-4'>
          {addresses.map((data, index) => (
            <p key={index} index={index} className='font-light text-[1.4rem]'>
              {data.data}
            </p>
          ))}
        </div>
        {/*  ------- COLUMN 4 ------- */}
        <div className="flex flex-col py-4 gap-8 border-0 border">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col'
          >
            <label className='flex flex-col'>
              {/* <span className='text-white font-medium mb-4'>Your Name</span> */}
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={`Email Address`}
                className={`${styles.boxOutline} bg-contactBg2 placeholder:text-[#d2d2d2] py-4 px-8 text-white rounded-md outlined-none border-none text-[1.4rem] font-normal`}
              />
            </label>
          </form>
          <button
                type='submit'
                className={`${styles.boxOutline} bg-tertiary px-16 py-3 text-[#d2d2d2] capitalize text-[1.4rem] outline outline-1 outline-white w-fit text-white font-medium rounded-md hover:bg-white hover:text-card-bg-2`}
              >
                {loading ? "Sending..." : "Send"}
              </button>
        </div>
      </div>
      <div>
        <span className="text-[#c2c2c2] font-extralight text-[1.2rem]">
          @ 2023 TEQihub. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
