import { IonIcon } from "@ionic/react";
import { callOutline, mailOutline, earthOutline } from 'ionicons/icons'
import {
  dataAnalytics,
  dataEngineering,
  dataScience,
  cyberSecurity,
} from "../assets";

export const navLinks = [
  {
    id: "courses",
    title: "Courses",
    submenu: [
      {
        title: "data analytics",
        url: "data-analytics",
        submenu: [
          {
            title: "SQL",
            url: "sql",
          },
          {
            title: "Python with Pandas",
            url: "python-with-pandas",
          },
          {
            title: "PowerBi with DAx",
            url: "powerbi-with-dax",
          },
        ],
      },
      {
        title: "web development",
        url: "web-dev",
      },
      {
        title: "SEO",
        url: "seo",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate",
  },
  {
    id: "partner",
    title: "Partner",
  },
];

export const coursesList = [
  {
    title: "data analytics",
    icon: dataAnalytics,
    text: "Analyzing data to uncover insights and improve outcomes",
  },
  {
    title: "data science",
    icon: dataScience,
    text: "Extracting insights and knowledge from data to drive better decisions.",
  },
  {
    title: "data engineering",
    icon: dataEngineering,
    text: "Designing, building and optimizing data systems for efficient processing.",
  },
  {
    title: "cyber security",
    icon: cyberSecurity,
    text: "Defending against digital threats and safeguarding sensitive information.",
    //
    // Protecting computer systems and data from unauthorized access or attack.
  },
];

export const stats = [
  {
    title: "success",
    number: "95",
    icon: "%",
  },
  {
    title: "tutorials",
    number: "100",
    icon: "+",
  },
  {
    title: "students",
    number: "650",
    icon: "+",
  },
  
];

export const contactInfo = [
  {
    icon: callOutline,
    info: "+ 1800 145 276",
    subInfo:"free support",
  },
  {
    icon: earthOutline,
    info: "www.teqihub.com",
    subInfo:"our official website",
  },
  {
    icon: mailOutline,
    info: "info@teqihub.com",
    subInfo:"help email support",
  },
]
