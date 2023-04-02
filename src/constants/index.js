import {
   logo, toggle, heroBg, dataAnalytics, dataEngineering, dataScience, cyberSecurity
  } from "../assets";
  
  export const navLinks = [
    // {
    //     id: "courses",
    //     title: "Courses"
    // },
    {
      id: "corporate",
      title: "Corporate",
    },
    {
      id: "partner",
      title: "Partner",
    },
  ];
  
  export const courses = [
    {
      title: "data analytics",
      icon: dataAnalytics,
      text: "Analyzing data to uncover insights and improve outcomes"
    },
    {
      title: "cyber security",
      icon: cyberSecurity,
      text: "Defending against digital threats and safeguarding sensitive information."
      // 
      // Protecting computer systems and data from unauthorized access or attack.
    },
    {
      title: "data science",
      icon: dataScience,
      text: "Extracting insights and knowledge from data to drive better decisions."
    },
    {
      title: "data engineering",
      icon: dataEngineering,
      text: "Designing, building and optimizing data systems for efficient processing."
    },
  ]

  export const stats = [
    {
      title: "tutorials",
      number: "100",
    },
    {
      title: "students",
      number: "650",
    },
    {
      title: "success",
      number: "95",
    },
  ]