import "./Home.css";
import { AiFillFire } from "react-icons/ai";
import { IoPartlySunny } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Profile from "/aprofile.png";
import studentpredication from "/studentpredication.png";
import heartdiseasedetection from "/heartdiseasedetection.png";
import ecommerce from "/ecommerce.png";
import passwordmanager from "/passwordmanager.png";
import taskmanager from "/taskmanager.png";
import connectcables from "/connectcables.png";
import ratanindustries from "/ratanindustries.png";
import yashrajcab from "/yashrajcab.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import type { ChangeEvent, FormEvent } from "react";

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
          : fullText.substring(0, currentText.length + 1) // Add char
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      message
    )}`;
    window.open(url, "_blank");
  };

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true; // Track if component is mounted

    const imageUrls = [
      "/aprofile.png",
      "/studentpredication.png",
      "/heartdiseasedetection.png",
      "/ecommerce.png",
      "/passwordmanager.png",
      "/taskmanager.png",
      "/connectcables.png",
      "/ratanindustries.png",
      "/yashrajcab.png",
      "/loginbg.png",
      "/fbg.jpg",
    ];

    const preloadImage = (url: string): Promise<void> => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;

        // If image is already cached, resolve immediately
        if (img.complete) {
          resolve();
          return;
        }

        img.onload = () => resolve();
        img.onerror = () => resolve(); // Keep going even if one fails
      });
    };

    Promise.all(imageUrls.map(preloadImage))
      .then(() => {
        if (isMounted) {
          setIsPageLoaded(true);
        }
      })
      .catch((err) => {
        console.error("Image preload failed", err);
        if (isMounted) {
          setIsPageLoaded(true); // Fallback to show content anyway
        }
      });

    return () => {
      isMounted = false; // Cleanup to prevent memory leaks
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "Heart Disease Detector",
      image: heartdiseasedetection,
      description:
        "End-to-end Machine Learning web application deployed on PythonAnywhere. Features a responsive Flask backend and Random Forest model, providing distinct interfaces for raw clinical data entry and user-friendly symptom assessment.",
      skills: ["PANDAS", "MATPLOTLIB", "SKLEARN", "FLASK", "HTML", "CSS", "JS"],
      link: "https://heartdisease.pythonanywhere.com/",
    },
    {
      id: 2,
      name: "EduLens-Student Result Predictor",
      image: studentpredication,
      description:
        "Regression analysis tool deployed via Flask to forecast academic performance. Utilizes Scikit-Learn to process study metrics, delivering accurate grade predictions and actionable analytics for educational planning.",
      skills: ["PANDAS", "MATPLOTLIB", "SKLEARN", "FLASK", "HTML", "CSS", "JS"],
      link: "https://studentresultpredictor.pythonanywhere.com/",
    },
    {
      id: 3,
      name: "E-Commerce",
      image: ecommerce,
      description:
        "Full-stack e-commerce platform mirroring major retailers. Features include a comprehensive vendor dashboard, secure shopping cart, unique group buying capabilities, and real-time email notifications for complete order lifecycle tracking.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://ecommerce8.pythonanywhere.com/",
    },
    {
      id: 4,
      name: "Password Manager",
      image: passwordmanager,
      description:
        "A robust password management tool that securely stores user credentials. Implements a double-verification system where users must re-enter their login password to reveal hidden sensitive information, ensuring data safety.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://passwordsmanager.pythonanywhere.com/",
    },
    {
      id: 5,
      name: "Task Manager",
      image: taskmanager,
      description:
        "Intuitive personal organizer designed to boost productivity. Users can securely log in to schedule tasks and receive instant, timely notifications exactly when their specific deadlines arrive.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://taskmanager5.pythonanywhere.com/",
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
  return (
    <>
      {!isPageLoaded && (
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
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
      )}
      <div
        style={{
          opacity: isPageLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <div className="orgBg">
          {/* 1. The Moving Orbs */}
          <motion.div
            animate={{
              x: ["0%", "20%", "0%"], // Moved by percentage relative to itself
              y: ["0%", "-10%", "0%"],
              scale: [1, 1.1, 1], // Reduced scale slightly to save space
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "20%",
              left: "10%", // Adjusted to be closer to center
              width: "clamp(200px, 50vw, 400px)", // Responsive width: Min 200px, Max 400px
              height: "clamp(200px, 50vw, 400px)", // Matches width
              background: "#7b2ff7",
              borderRadius: "50%",
              filter: "blur(80px)", // Reduced blur slightly for performance on mobile
              opacity: 0.6,
              zIndex: 0,
            }}
          />

          {/* Cyan Blob */}
          <motion.div
            animate={{
              x: ["0%", "-20%", "0%"],
              y: ["0%", "10%", "0%"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "30%", // Adjusted to avoid overlapping perfectly
              right: "10%",
              width: "clamp(150px, 40vw, 320px)", // Responsive width
              height: "clamp(150px, 40vw, 320px)",
              background: "#2bf2ff",
              borderRadius: "50%",
              filter: "blur(80px)",
              opacity: 0.5,
              zIndex: 0,
            }}
          />

          {/* 2. Glass Overlay (Optional) */}
          {/* This makes the text readable by darkening the background slightly */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)", // Mild tint
              backdropFilter: "blur(20px)", // "Frosted Glass" effect over the orbs
              zIndex: 1,
            }}
          />

          {/* 3. Your Content Goes Here */}

          <div className="ContentContainer">
            <motion.div
              className="heroSection"
              id="home"
              variants={containerVariants}
              animate={isPageLoaded ? "visible" : "hidden"}
              initial="hidden"
            >
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
              </div>
            </motion.div>
            <div className="aboutSection" id="about">
              <div className="aboutContainera">
                <img src={Profile} alt="Abhishek" className="profileImg" />
              </div>
              <div className="aboutContainerb">
                <h1>About Us</h1>
                <p>
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
                    <button className="projectBut" type="submit">
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
          <p className="headerIco">
            <AiFillFire />
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
            <a href="#contact" className="navHref">
              Contact Me
            </a>
            <a href="" className="resumeBut">
              Resume
            </a>
          </div>
          <p className="headerIco">
            <IoPartlySunny />
          </p>
        </motion.header>
      </div>
    </>
  );
}
