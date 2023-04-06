export const menuItems = [
  // {
  //   title: 'Home',
  //   url: '/',
  // },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Courses',
    url: '/courses',
    submenu: [
      {
        title: 'Data analytics',
        url: 'web-design',
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
        title: 'data science',
        url: 'data-science',
        submenu: [
          {
            title: "SQL",
            url: "sql",
          },
          {
            title: "python",
            url: "python",
          },
          {
            title: "statistics",
            url: "statistics",
          },
          {
            title: "AIML",
            url: "aiml",
          },
        ],
      },
      {
        title: 'data engineering',
        url: 'data-engineering',
        submenu: [
          {
            title: "azure",
            url: "azure",
          },
          {
            title: "ADF",
            url: "adf",
          },
          {
            title: "Datalake",
            url: "datalake",
          },
          {
            title: "CosmosDB",
            url: "cosmodb",
          },
          {
            title: "MongoDB",
            url: "mongodb",
          },
        ]
      },
      {
        title: 'cyber security',
        url: 'cyber-security',
        submenu: [
          {
            title: "CEH v11 (Certified Ethical Hacker)",
            url: "",
          },
          {
            title: "CISSP (Certified Information Systems Security Professional)",
            url: "",
          },
          {
            title: "CISA (Certified Information Systems Auditors)",
            url: "",
          },
          {
            title: "CISM ( Certified Information Security Manager)",
            url: "",
          },
          {
            title: "CCSP (Certified Cloud Security Professional)",
            url: "",
          },
        ]
      },
    ],
  },
  {
    title: 'Corporate',
    url: '/corporate',
  },
      {
        title: 'Partner',
        url: 'partner',
      },
      // {
      //   title: 'Our values',
      //   url: 'our-values',
      // },
];
