import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    summa,
    poker,
    appacademy,
    scale,
    littlejohn,
    punchender,
    mlc4,
    threejs,
    sequelize,
    express,
    numpy,
    python
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Quality Assurance Analyst",
      icon: mobile,
    },
    {
      title: "Mathematician",
      icon: backend,
    },
    {
      title: "Tennis Enthusiast",
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
      name: "Sequelize",
      icon: sequelize,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Numpy",
      icon: numpy,
    },
    {
      name: "Express",
      icon: express,
    },
  ];

  const experiences = [
    {
      title: "AI Trainer",
      company_name: "Scale AI",
      icon: scale,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Generate responses to prompts about various programming languages and technologies.",
        "Evaluate responses on their effectiveness, succinctness, and relevance to a prompt.",
        "Compare two responses, evalute their strengths and weakness, and determine which one is better.",
      ],
    },
    {
      title: "Personal Study and App Academy",
      company_name: "Student",
      icon: appacademy,
      iconBg: "#383E56",
      date: "June 2022 - Sept 2023",
      points: [
        "Began by studing Python in my spare time for fun to complete coding challenges such as Google Foobar, Leetcode, and ProjectEuler.net.",
        "Enrolled in a rigorous coding bootcamp to refresh my skills where we focussed on rapid development of web apps using Python and Javascript technologies.",
        "Since completing the bootcamp I've been teaching myself about machine leanring, neural networks, and three.js.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Math Tutor and Poker Player",
      company_name: "Self-Employed",
      icon: poker,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - May 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Associate Technical Consultant",
      company_name: "Summa Technologies",
      icon: summa,
      iconBg: "#383E56",
      date: "March 2013 - June 2016",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "LittleJohn",
      description:
        "Web-based trading simulation that allows you to search for stocks, trade, and add stocks to your watchlist so you can follow all stocks in your portfolio or on your watchlist.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "sqlalchemy",
          color: "pink-text-gradient",
        },
      ],
      image: littlejohn,
      source_code_link: "https://github.com/aromito7/LittleJohn",
      live_site_link: "https://littlejohn-co7t.onrender.com/",
    },
    {
      name: "Punchender",
      description:
        "A simulation of Kickstarter (hence the name being two antonyms) where you can create fake projects with goals and rewards for backers who want to fund your dream project.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: punchender,
      source_code_link: "https://github.com/aromito7/PunchEnder",
      live_site_link: "https://punchender-ry4p.onrender.com",
    },
    {
      name: "MLC4",
      description:
        "UNDER CONSTRUCTION. You can play against a simple AI bot.  TODO: Currently working on using Machine Learning with Tensorflow to train an advanced bot that will learn how to play the game.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: mlc4,
      source_code_link: "https://github.com/aromito7/MLC4",
      // live_site_link: "https://mlc-vx53.onrender.com",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
