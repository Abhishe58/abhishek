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
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Message: ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
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
            initial="hidden"
            animate="visible"
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
                <motion.span variants={buttonVariants}>Projects</motion.span>
              </motion.p>

              <motion.p
                className="ctaButb"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Contact Us
                </motion.span>
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
                solutions that combine great design with intelligent data-driven
                logic. Continuously learning new technologies, solving complex
                problems, contributing to open-source, and exploring AI
                innovation with the goal of creating impactful, smart solutions.
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
              <div className="projectBox">
                <img
                  src={studentpredication}
                  alt="Student Result Predictor"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">
                    EduLens-Student Result Predictor
                  </p>
                  <p className="projectDescribe">
                    Regression analysis tool deployed via Flask to forecast
                    academic performance. Utilizes Scikit-Learn to process study
                    metrics, delivering accurate grade predictions and
                    actionable analytics for educational planning.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">HTML</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">JS</p>
                    <p className="projectSkilluse">PYTHON</p>
                    <p className="projectSkilluse">FLASK</p>
                    <p className="projectSkilluse">SKLEARN</p>
                    <p className="projectSkilluse">PANDAS</p>
                    <p className="projectSkilluse">MATPLOTLIB</p>
                  </div>
                  <a
                    href="https://studentresultpredictor.pythonanywhere.com"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="projectBox">
                <img
                  src={heartdiseasedetection}
                  alt="Student Result Predictor"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">Heart Disease Detector</p>
                  <p className="projectDescribe">
                    End-to-end Machine Learning web application deployed on
                    PythonAnywhere. Features a responsive Flask backend and
                    Random Forest model, providing distinct interfaces for raw
                    clinical data entry and user-friendly symptom assessment.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">HTML</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">JS</p>
                    <p className="projectSkilluse">PYTHON</p>
                    <p className="projectSkilluse">FLASK</p>
                    <p className="projectSkilluse">SKLEARN</p>
                    <p className="projectSkilluse">PANDAS</p>
                    <p className="projectSkilluse">MATPLOTLIB</p>
                  </div>
                  <a
                    href="https://heartdisease.pythonanywhere.com/"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="projectBox">
                <img
                  src={ecommerce}
                  alt="Student Result Predictor"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">E-Commerce</p>
                  <p className="projectDescribe">
                    Full-stack e-commerce platform mirroring major retailers.
                    Features include a comprehensive vendor dashboard, secure
                    shopping cart, unique group buying capabilities, and
                    real-time email notifications for complete order lifecycle
                    tracking.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">HTML</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">JS</p>
                    <p className="projectSkilluse">PYTHON</p>
                    <p className="projectSkilluse">FLASK</p>
                    <p className="projectSkilluse">SQLITE</p>
                  </div>
                  <a
                    href="https://ecommerce8.pythonanywhere.com/"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="projectBox">
                <img
                  src={passwordmanager}
                  alt="Student Result Predictor"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">Password Manager</p>
                  <p className="projectDescribe">
                    A robust password management tool that securely stores user
                    credentials. Implements a double-verification system where
                    users must re-enter their login password to reveal hidden
                    sensitive information, ensuring data safety.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">HTML</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">JS</p>
                    <p className="projectSkilluse">PYTHON</p>
                    <p className="projectSkilluse">FLASK</p>
                    <p className="projectSkilluse">SQLITE</p>
                  </div>
                  <a
                    href="https://passwordsmanager.pythonanywhere.com/"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="projectBox">
                <img
                  src={taskmanager}
                  alt="Student Result Predictor"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">Task Manager</p>
                  <p className="projectDescribe">
                    Intuitive personal organizer designed to boost productivity.
                    Users can securely log in to schedule tasks and receive
                    instant, timely notifications exactly when their specific
                    deadlines arrive.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">HTML</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">JS</p>
                    <p className="projectSkilluse">PYTHON</p>
                    <p className="projectSkilluse">FLASK</p>
                    <p className="projectSkilluse">SQLITE</p>
                  </div>
                  <a
                    href="https://taskmanager5.pythonanywhere.com"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            <h1>My Clients</h1>
            <div className="projectContainer">
              <div className="projectBox">
                <img
                  src={ratanindustries}
                  alt="Connect Cables"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">Ratan Industries</p>
                  <p className="projectDescribe">
                    Designed and developed a professional chemical manufacturing
                    website featuring product catalogs, industry-focused
                    solutions, quality compliance sections, SEO optimization,
                    and a clean, interactive UI built with React.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">REACT</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">TYPE SCRIPT</p>
                    <p className="projectSkilluse">EMAILJS</p>
                  </div>
                  <a
                    href="https://ratanindustries.netlify.app/"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="projectBox">
                <img
                  src={yashrajcab}
                  alt="Connect Cables"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">Yash Raj Cab Services</p>
                  <p className="projectDescribe">
                    Built a modern taxi service website for Yash Raj Cab
                    Services, focusing on user-friendly navigation, service
                    clarity, mobile responsiveness, and conversion-driven layout
                    for local, airport, and outstation bookings.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">REACT</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">TYPE SCRIPT</p>
                    <p className="projectSkilluse">WhatsApp Integration</p>
                  </div>
                  <a
                    href="https://yashrajcabservices.netlify.app/"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="projectBox">
                <img
                  src={connectcables}
                  alt="Connect Cables"
                  className="projectImg"
                />
                <div className="projectminBox">
                  <p className="projectTitle">Connect Cables</p>
                  <p className="projectDescribe">
                    Delivered a responsive business website for Connect Cables,
                    enhancing their online presence through structured content,
                    optimized performance, and a professional industrial brand
                    identity.
                  </p>
                  <div className="projectskillBox">
                    <p className="projectSkilluse">HTML</p>
                    <p className="projectSkilluse">CSS</p>
                    <p className="projectSkilluse">JS</p>
                    <p className="projectSkilluse">EMAILJS</p>
                  </div>
                  <a
                    href="https://studentresultpredictor.pythonanywhere.com"
                    target="_blank"
                    className="projectBut"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
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
                    className="inputField"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="inputField"
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    placeholder="Message..."
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
                <p className="icoLink">
                  <AiFillInstagram />
                </p>
                <p className="icoLink">
                  <FaLinkedin />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.header
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
    </>
  );
}
