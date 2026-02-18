import "./Uphome.css";
import { IoDocument } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Profile from "/aprofile.png";
import studentpredication from "/studentpredication.png";
import heartdiseasedetection from "/heartdiseasedetection.png";
import ecommerce from "/ecommerce.png";
import passwordmanager from "/passwordmanager.png";
import taskmanager from "/taskmanager.png";
import blog from "/blog.png";
import connectcables from "/connectcables.png";
import ratanindustries from "/ratanindustries.png";
import yashrajcab from "/yashrajcab.png";
import inventry_management from "/inventry_management.png";
import gturesdesign from "/gturesdesign.png";
import gtuolddesign from "/gtuolddesign.png";
import resumePdf from "/resumea.pdf";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import type { ChangeEvent, FormEvent } from "react";
import Tspartical from "./Tspartical";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays each child by 0.2s
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 10 },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

export default function Home() {
  const texts = [
    "Web Developer",
    "AI/ML Enthusiast",
    "Creative Problem Solver",
  ];

  // 2. State to hold the current text being displayed
  const [currentText, setCurrentText] = useState("");

  // 3. State to keep track of the animation phase
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0); // Index of the current word in 'texts'
  const [typingSpeed, setTypingSpeed] = useState(180);

  useEffect(() => {
    // Determine which word we are currently typing
    const i = loopNum % texts.length;
    const fullText = texts[i];

    // Main logic function
    const handleTyping = () => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1) // Delete char
          : fullText.substring(0, currentText.length + 1), // Add char
      );

      // Speed Logic: Typing is standard, deleting is faster
      setTypingSpeed(isDeleting ? 30 : 150);

      // PHASE 1: Finished Typing
      if (!isDeleting && currentText === fullText) {
        // Pause at end of word, then switch to deleting
        setTimeout(() => setIsDeleting(true), 1500);

        // PHASE 2: Finished Deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to next word
        setTypingSpeed(500); // Pause before typing new word
      }
    };

    // Set the timer to run the handleTyping function
    const timer = setTimeout(handleTyping, typingSpeed);

    // Cleanup: clear timer if component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, texts]);

  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
  });

  // Fixed: Updated type to include HTMLTextAreaElement
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookCab = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "+919510954023";

    const message =
      `Portfolio Request\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Message: ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const imageUrls = [
      "/aprofile.png",
      "/studentpredication.png",
      "/heartdiseasedetection.png",
      "/inventry_management.png",
      "/ecommerce.png",
      "/passwordmanager.png",
      "/taskmanager.png",
      "/connectcables.png",
      "/ratanindustries.png",
      "/yashrajcab.png",
      "/loginbg.png",
      "/fbg.jpg",
      "/gturesdesign.png",
      "/gtuolddesign.png",
    ];

    // 1. Add ': string' to define the input type
    // 2. Add ': Promise<void>' to define what the function returns
    const preloadImage = (url: string): Promise<void> => {
      // 3. Add '<void>' here to tell TypeScript this promise resolves with no data
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
        if (img.complete) resolve();
      });
    };

    const loadImagesPromise = Promise.all(imageUrls.map(preloadImage));

    // 4. Add '<void>' here too
    const timeoutPromise = new Promise<void>((resolve) =>
      setTimeout(resolve, 3000),
    );

    Promise.race([loadImagesPromise, timeoutPromise]).then(() => {
      if (isMounted) setIsPageLoaded(true);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // if (!isPageLoaded) {
  //   return <div>Loading...</div>; // Or your custom Spinner component
  // }

  const projects = [
    {
      id: 1,
      name: "Inventry Management System",
      image: inventry_management,
      description:
        "AI-Powered Inventory Manager (MERN + FastAPI). Integrates a custom Machine Learning model to predict future sales demand, preventing stockouts through real-time analytics, dynamic visualizations, and automated low-inventory alerts.",
      skills: [
        "PANDAS",
        "MATPLOTLIB",
        "SKLEARN",
        "REACT",
        "EXPRESS",
        "NODE.JS",
        "MONGODB",
      ],
      link: "https://inventrymanagementj.netlify.app/",
    },
    {
      id: 2,
      name: "Heart Disease Detector",
      image: heartdiseasedetection,
      description:
        "End-to-end Machine Learning web application deployed on PythonAnywhere. Features a responsive Flask backend and Random Forest model, providing distinct interfaces for raw clinical data entry and user-friendly symptom assessment.",
      skills: ["PANDAS", "MATPLOTLIB", "SKLEARN", "FLASK", "HTML", "CSS", "JS"],
      link: "https://heartdisease.pythonanywhere.com/",
    },
    {
      id: 3,
      name: "EduLens-Student Result Predictor",
      image: studentpredication,
      description:
        "Regression analysis tool deployed via Flask to forecast academic performance. Utilizes Scikit-Learn to process study metrics, delivering accurate grade predictions and actionable analytics for educational planning.",
      skills: ["PANDAS", "MATPLOTLIB", "SKLEARN", "FLASK", "HTML", "CSS", "JS"],
      link: "https://studentresultpredictor.pythonanywhere.com/",
    },
    {
      id: 4,
      name: "E-Commerce",
      image: ecommerce,
      description:
        "Full-stack e-commerce platform mirroring major retailers. Features include a comprehensive vendor dashboard, secure shopping cart, unique group buying capabilities, and real-time email notifications for complete order lifecycle tracking.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://ecommerce8.pythonanywhere.com/",
    },
    {
      id: 5,
      name: "Password Manager",
      image: passwordmanager,
      description:
        "A robust password management tool that securely stores user credentials. Implements a double-verification system where users must re-enter their login password to reveal hidden sensitive information, ensuring data safety.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://passwordsmanager.pythonanywhere.com/",
    },
    {
      id: 6,
      name: "Task Manager",
      image: taskmanager,
      description:
        "Intuitive personal organizer designed to boost productivity. Users can securely log in to schedule tasks and receive instant, timely notifications exactly when their specific deadlines arrive.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://taskmanager5.pythonanywhere.com/",
    },
    {
      id: 7,
      name: "Blog",
      image: blog,
      description:
        "A custom-designed content hub showcasing minimal aesthetics and clean typography. Prioritizing user experience, this project blends engaging animations with accessibility best practices to create an immersive storytelling environment.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://theblogs.pythonanywhere.com/",
    },
  ];

  const client = [
    {
      id: 1,
      name: "Ratan Industries",
      image: ratanindustries,
      description:
        "Designed and developed a professional chemical manufacturing website featuring product catalogs, industry-focused solutions, quality compliance sections, SEO optimization, and a clean, interactive UI built with React.",
      skills: ["REACT", "CSS", "TYPE SCRIPT", "EmailJs"],
      link: "https://ratanindustries.netlify.app/",
    },
    {
      id: 2,
      name: "Yash Raj Cab Services",
      image: yashrajcab,
      description:
        "Built a modern taxi service website for Yash Raj Cab Services, focusing on user-friendly navigation, service clarity, mobile responsiveness, and conversion-driven layout for local, airport, and outstation bookings.",
      skills: ["REACT", "CSS", "TYPE SCRIPT", "WhatsApp Integration"],
      link: "https://yashrajcabservices.netlify.app/",
    },
    {
      id: 3,
      name: "Connect Cables",
      image: connectcables,
      description:
        "Delivered a responsive business website for Connect Cables, enhancing their online presence through structured content, optimized performance, and a professional industrial brand identity.",
      skills: ["HTML", "CSS", "JS", "EmailJs"],
      link: "https://connectcables.co.in/",
    },
  ];

  const [resprev, setResprev] = useState(true);

  const redesign = [
    {
      id: 1,
      name: "GTU Student Portal",
      image: gturesdesign,
      oldimage: gtuolddesign,
    },
  ];

  const openPdf = () => {
    window.open(resumePdf, "_blank");
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff", // Ensure it has a background color
          display: "flex", // Center content easily
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // THE TRANSITION MAGIC:
          opacity: isPageLoaded ? 0 : 1,
          pointerEvents: isPageLoaded ? "none" : "all", // Allows clicking content under it once faded
          transition: "opacity 0.5s ease",
        }}
        className="loadingContainer"
      >
        <h1 style={{ textAlign: "center" }}>
          Welcome to <span style={{ color: "slateblue" }}>Abhishek</span>{" "}
          Portfolio
        </h1>
        <h2 style={{ textAlign: "center" }}>
          Loading my experience<span id="loadania">.</span>
          <span id="loadanib">.</span>
          <span id="loadanic">.</span>
        </h2>
      </div>

      <div>
        <div className="orgBg">
          <div className="ContentContainer">
            <motion.div
              className="heroSection"
              id="home"
              variants={containerVariants}
              animate={isPageLoaded ? "visible" : "hidden"}
              initial="hidden"
            >
              <Tspartical />
              <div className="typeBox">
                <motion.p className="hiab" variants={itemVariants}>
                  Hi, I'm Abhishek{" "}
                </motion.p>

                <div className="typeminBox">
                  <motion.p className="hibb" variants={itemVariants}>
                    {currentText}
                  </motion.p>
                  <motion.p
                    className="cursor"
                    variants={itemVariants}
                    style={{ display: "inline-block" }}
                  >
                    |
                  </motion.p>
                </div>

                <style>{`
          .cursor {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
              </div>

              <motion.p className="subTitle" variants={itemVariants}>
                Building Smart, Modern Web Solutions
              </motion.p>

              <div className="ctaBox">
                <motion.p
                  className="ctaBut"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.a href="#projects" variants={buttonVariants}>
                    Projects
                  </motion.a>
                </motion.p>

                <motion.p
                  className="ctaButb"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.a
                    href="#contact"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Contact Us
                  </motion.a>
                </motion.p>

                <motion.a
                  onClick={openPdf}
                  className="ctaBut"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
            <div className="aboutSection" id="about">
              <div className="aboutContainera">
                <img src={Profile} alt="Abhishek" className="profileImg" />
              </div>
              <div className="aboutContainerb">
                <h1>About Us</h1>
                <p className="aboutdes">
                  A passionate Web Developer and Data Science enthusiast skilled
                  in front-end, back-end, data visualization, and machine
                  learning. Enjoys building modern, user-friendly digital
                  solutions that combine great design with intelligent
                  data-driven logic. Continuously learning new technologies,
                  solving complex problems, contributing to open-source, and
                  exploring AI innovation with the goal of creating impactful,
                  smart solutions.
                </p>
              </div>
            </div>
            <div className="skillsSection" id="skills">
              <h1>My Expertise</h1>
              <div className="skillContainer">
                <h2>Frontend Languages</h2>
                <div className="flContainer">
                  <p className="skillPl">HTML</p>
                  <p className="skillPl">CSS</p>
                  <p className="skillPl">JS</p>
                  <p className="skillPl">REACT</p>
                  <p className="skillPl">BOOTSTRAP</p>
                </div>
                <h2>Backend Languages</h2>
                <div className="flContainer">
                  <p className="skillPl">PYTHON</p>
                  <p className="skillPl">FLASK</p>
                  <p className="skillPl">NODE JS</p>
                  <p className="skillPl">EXPRESS JS</p>
                </div>
                <h2>Database</h2>
                <div className="flContainer">
                  <p className="skillPl">MYSQL</p>
                  <p className="skillPl">MONGODB</p>
                  <p className="skillPl">POSTGRESQL</p>
                </div>
                <h2>Data Science and Analysis</h2>
                <div className="flContainer">
                  <p className="skillPl">PANDAS</p>
                  <p className="skillPl">NUMPY</p>
                  <p className="skillPl">MATPLOTLIB</p>
                  <p className="skillPl">SEABORN</p>
                  <p className="skillPl">SKLEARN</p>
                  <p className="skillPl">TENSORFLOW/KERAS</p>
                </div>
              </div>
            </div>
            <div className="projectSection" id="projects">
              <h1>Professional Highlights</h1>
              <div className="projectContainer">
                {projects.map((pro) => {
                  return (
                    <div className="projectBox" key={pro.id}>
                      <img
                        src={pro.image}
                        alt="Student Result Predictor"
                        className="projectImg"
                      />
                      <div className="projectminBox">
                        <p className="projectTitle">{pro.name}</p>
                        <p className="projectDescribe">{pro.description}</p>
                        <div className="projectskillBox">
                          {pro.skills.map((skillPro) => {
                            return (
                              <p className="projectSkilluse" key={skillPro}>
                                {skillPro}
                              </p>
                            );
                          })}
                        </div>
                        <a
                          href={pro.link}
                          target="_blank"
                          className="projectBut"
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h1>My Clients</h1>
              <div className="projectContainer">
                {client.map((cli) => {
                  return (
                    <div className="projectBox" key={cli.id}>
                      <img
                        src={cli.image}
                        alt={cli.name}
                        className="projectImg"
                      />
                      <div className="projectminBox">
                        <p className="projectTitle">{cli.name}</p>
                        <p className="projectDescribe">{cli.description}</p>
                        <div className="projectskillBox">
                          {cli.skills.map((cliSkill) => {
                            return (
                              <p className="projectSkilluse" key={cliSkill}>
                                {cliSkill}
                              </p>
                            );
                          })}
                        </div>
                        <a
                          href={cli.link}
                          target="_blank"
                          className="projectBut"
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h1>Re-Design Websites</h1>
              <div className="projectContainer">
                {redesign.map((design) => (
                  <div key={design.id} className="redesignContainer">
                    <div className="redesignBoxa">
                      <img
                        src={resprev ? design.image : design.oldimage}
                        alt={design.name}
                        className="redesignImage"
                      />
                    </div>
                    <div className="redesignBoxb">
                      <p className="projectTitle">{design.name}</p>
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <p
                          onClick={() => setResprev(true)}
                          className="resnewBut"
                        >
                          My Design
                        </p>
                        <p
                          onClick={() => setResprev(false)}
                          className="resnewButb"
                        >
                          Old Design
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="contactSection" id="contact">
              <h1>Contact Me</h1>
              <p>
                I’m always open to connecting, collaborating, or discussing new
                opportunities in web development and data science. Whether you
                have a project idea, a question, or just want to say hello feel
                free to reach out!
              </p>
              <div className="contactxyz">
                <div className="contactusContainera">
                  <form onSubmit={handleBookCab}>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="inputField"
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="inputField"
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      placeholder="Message..."
                      name="message"
                      onChange={handleChange}
                      className="textArea"
                    ></textarea>
                    <button className="projectButx" type="submit">
                      Submit Form
                    </button>
                  </form>
                </div>
                <div className="contactusContainerb">
                  <h2>Let's Connect</h2>
                  <p>
                    <mark>
                      {" "}
                      Have a project in mind or just want to chat about tech,
                      data, or web development? Drop me a message. I’d love to
                      hear from you!
                    </mark>
                  </p>
                  <div className="linkBox">
                    <a
                      href="mailto:abhishekmevada85@gmail.com"
                      target="_blank"
                      className="contactusLink"
                    >
                      abhishekmevada85@gmail.com
                    </a>
                    <a
                      href="https://wa.me/919510954023"
                      target="_blank"
                      className="contactusLink"
                    >
                      +91 9510954023
                    </a>
                    <a
                      href="https://maps.app.goo.gl/Pjv2ajuA5b5fKSPQ6"
                      target="_blank"
                      className="contactusLink"
                    >
                      Gandhinagar, Gujarat
                    </a>
                  </div>
                </div>
              </div>
              <div className="ftContainer">
                <div className="icobox">
                  <a
                    href="https://www.instagram.com/abhi.mevada19"
                    target="_blank"
                    className="icoLink"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-mevada-b85218321"
                    target="_blank"
                    className="icoLink"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.header
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          // 2. Set initial state
          initial="hidden"
          // 3. Toggle between the variant names based on your state
          animate={isPageLoaded ? "visible" : "hidden"}
        >
          <p onClick={openPdf} className="headerIco">
            <IoDocument />
          </p>
          <div className="nav">
            <a href="#home" className="navHref">
              Home
            </a>
            <a href="#about" className="navHref">
              About Me
            </a>
            <a href="#skills" className="navHref">
              Skills
            </a>
            <a href="#projects" className="navHref">
              Project
            </a>
            {/* <a href="#contact" className="navHref">
              Contact Me
            </a>*/}
            {/*<a onClick={openPdf} className="resumeBut">
              Resume
            </a>*/}
          </div>
          <a
            href="https://www.linkedin.com/in/abhishek-mevada-b85218321"
            target="_blank"
            className="headerIco"
          >
            <FaLinkedin />
          </a>
        </motion.header>
      </div>
    </>
  );
}
