import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    mongoose,
    mysql,
    python,
    bootstrap,
    threejs,
    redux,
    tailwind,
    git,
    heroku,
    chrd,
    portfolio,
    badmintoners,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Nodejs Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Mongoose",
      icon: mongoose,
    },
    {
        name:"MySQL",
        icon: mysql,
    },
    {
      name:"Python",
      icon: python, 
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    
    {
        name:"Bootstrap",
        icon: bootstrap, 
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Heroku",
      icon: heroku,
    },
  ];
  
  const experiences = [
    {
      title: "Web Editor",
      company_name: "CHRD",
      icon: chrd,
      iconBg: "#265828",
      date: "February 2022 - Present",
      points: [
        "Edit and update website content, send press releases",
        "Manage VPN accounts, enforcing security check practices",
        "Update Prisoners of Conscience data",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Web application with responsive design and captivating 3D visuals, powered by React and styled with Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/guangluda/portfolio",
      web_link: "https://www.jiwuportfolio.top/",
    },
    {
      name: "Badmintoners",
      description:
        "Web application that enables users to search for badminton courts, create/update/delete courts, leave reviews, with user authentication, validation, image upload, maps.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: badmintoners,
      source_code_link: "https://github.com/guangluda/badmintoners",
      web_link: "https://calm-atoll-78639.herokuapp.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };




