import React from "react";
import { Contact } from "./Contact";
import { Courses } from "./Courses";
import { Hero } from "./Hero";
import { Success } from "./Success";

export const Home = ({ scrollToId }) => {
    React.useEffect(() => {
        if (scrollToId) {
          const element = document.getElementById(scrollToId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [scrollToId]);
    
      return (
        <>
          <Hero />
          <Courses id="courses" />
          <Success id="success" />
          <Contact id="contact" />
        </>
      );
};
