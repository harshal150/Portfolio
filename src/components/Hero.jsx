import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import pic from "../assets/tejpic.jpg";
import { useTypewriter } from "react-simple-typewriter";
import {
  FaArrowRight,
  FaFileAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const getColor = (word) => {
    switch (word.toLowerCase()) {
      case "full":
      case "stack":
      case "developer":
        return "orange";
      case "web":
      case "designer":
        return "violet";
      case "application":
        return "blue";
      default:
        return "white"; // Set a default color if none match
    }
  };

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Web Designer", "Application Developer"],
    loop: 0,
  });
  const renderTextWithColors = () => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <span key={index} style={{ color: getColor(word) }}>
        {word}{" "}
      </span>
    ));
  };

  const openPDF = () => {
    window.open(
      "https://drive.google.com/file/d/1XAkTGKC5V5QsHPCqigeE4Cl0mi_3-plC/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className={` w-full h-screen mx-auto lg:flex `}>
      <div
        className={` inset-0 top-[120px] lg:mt-36  max-w-7xl mx-auto  flex flex-row lg:flex-row items-start gap-5 `}
      >
        <div className="flex lg:flex-col flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-96 violet-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white text-[30px]`}>
            Hi, I'm <span className="text-[#915EFF] text-[55px]">Harshal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A {renderTextWithColors()}
          </p>
          <p
            className={`mt-2 text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-ellipsis leading-relaxed`}
          >
            As a dedicated software developer, <br />I am committed to creating
            forward-thinking solutions <br /> and delivering high-quality
            software products, <br /> motivated by an unwavering drive for
            excellence <br /> and a passion for advancing the limits of
            innovation.
          </p>
          <div className="flex"> 

          <button
            onClick={openPDF}
            className="button bg-gradient-to-r from-blue-500 to-purple-600  lg:mt-20 mx-5 mt-3"
          >
            <div className="outline"></div>
            <div className="state state--default">
              <div className="icon">
                <FaFileAlt /> {/* Document icon */}
              </div>
              <p>
                <span style={{ "--i": 1 }}>R</span>
                <span style={{ "--i": 2 }}>e</span>
                <span style={{ "--i": 3 }}>s</span>
                <span style={{ "--i": 4 }}>u</span>
                <span style={{ "--i": 5 }}>m</span>
                <span style={{ "--i": 6 }}>e</span>
              </p>
            </div>
            <div className="state state--sent ">
              <div className="icon">
                {/* Document icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  strokeWidth="0.5px"
                  stroke="white"
                >
                  <g style={{ filter: "url(#shadow)" }}>
                    <path
                      fill="currentColor"
                      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <p className="flex items-center justify-center  text-center">
                <span style={{ "--i": 5 }}>S</span>
                <span style={{ "--i": 6 }}>e</span>
                <span style={{ "--i": 7 }}>n</span>
                <span style={{ "--i": 8 }}>t</span>
              </p>
            </div>
            <style>{`

.button {
 
  --radius: 14px;

  cursor: pointer;
  border-radius: var(--radius);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: 0 0.5px 0.5px 1px rgba(255, 255, 255, 0.2),
    0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 5px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  min-width: 160px;
  padding: 15px;
  height: 55px;
  font-family: "Galano Grotesque", Poppins, Montserrat, sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
}
.button:hover {
  transform: scale(1.02);
 
}
.button:active {
  transform: scale(1);
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.3),
    0 10px 3px -3px rgba(0, 0, 0, 0.2);
}
.button:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
 
  background: linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45))
      border-box;
  z-index: 0;
  transition: all 0.4s ease;
}
.button:hover::after {
  transform: scale(1.05, 1.1);
  
}
.button::before {
  content: "";
  inset: 7px 6px 6px 6px;
  position: absolute;
  background: linear-gradient(to top, var(--neutral-1), var(--neutral-2));
  border-radius: 30px;
  filter: blur(0.5px);
  z-index: 2;
}
.state p {
  display: flex;
  align-items: center;
  justify-content: center;
}
.state .icon {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: scale(1.25);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.state .icon svg {
  overflow: visible;
}

/* Outline */
.outline {
  position: absolute;
  border-radius: inherit;
  overflow: hidden;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
  inset: -2px -3.5px;
}
.outline::before {
  content: "";
  position: absolute;
  inset: -100%;
  background: conic-gradient(
    from 180deg,
    transparent 60%,
    white 80%,
    transparent 100%
  );
  animation: spin 2s linear infinite;
  animation-play-state: paused;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.button:hover .outline {
  opacity: 1;
}
.button:hover .outline::before {
  animation-play-state: running;
}

/* Letters */
.state p span {
  display: block;
  opacity: 0;
  animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
}
.button:hover p span {
  opacity: 1;
  animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
}
.button:focus p span {
  opacity: 1;
  animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
}
@keyframes wave {
  30% {
    opacity: 1;
    transform: translateY(4px) translateX(0) rotate(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-3px) translateX(0) rotate(0);
    color: var(--primary);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0);
  }
}
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px) translateX(5px) rotate(-90deg);
    color: var(--primary);
    filter: blur(5px);
  }
  30% {
    opacity: 1;
    transform: translateY(4px) translateX(0) rotate(0);
    filter: blur(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-3px) translateX(0) rotate(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0);
  }
}
@keyframes disapear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(5px) translateY(20px);
    color: var(--primary);
    filter: blur(5px);
  }
}

/* Plane */
.state--default .icon svg {
  animation: land 0.6s ease forwards;
}
.button:hover .state--default .icon {
  transform: rotate(45deg) scale(1.25);
}
.button:focus .state--default svg {
  animation: takeOff 0.8s linear forwards;
}
.button:focus .state--default .icon {
  transform: rotate(0) scale(1.25);
}
@keyframes takeOff {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
    transform: translateX(70px) rotate(45deg) scale(2);
  }
  100% {
    opacity: 0;
    transform: translateX(160px) rotate(45deg) scale(0);
  }
}
@keyframes land {
  0% {
    transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2);
    opacity: 0;
    filter: blur(3px);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0);
    opacity: 1;
    filter: blur(0);
  }
}

/* Contrail */
.state--default .icon:before {
  content: "";
  position: absolute;
  top: 50%;
  height: 2px;
  width: 0;
  left: -5px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
}
.button:focus .state--default .icon:before {
  animation: contrail 0.8s linear forwards;
}
@keyframes contrail {
  0% {
    width: 0;
    opacity: 1;
  }
  8% {
    width: 15px;
  }
  60% {
    opacity: 0.7;
    width: 80px;
  }
  100% {
    opacity: 0;
    width: 160px;
  }
}

/* States */
.state {
  padding-left: 29px;
  z-index: 2;
  display: flex;
  position: relative;
}
.state--default span:nth-child(4) {
  
}
.state--sent {
  display: none;
}
.state--sent svg {
  transform: scale(1.25);
  margin-right: 8px;
}
.button:focus .state--default {
  position: absolute;
}
.button:focus .state--sent {
  display: flex;
  align-items:center;
}
.button:focus .state--sent span {
  opacity: 0;
  animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
}
.button:focus .state--sent .icon svg {
  opacity: 0;
  animation: appear 1.2s ease forwards 0.8s;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(4) rotate(-40deg);
    color: var(--primary);
    filter: blur(4px);
  }
  30% {
    opacity: 1;
    transform: scale(0.6);
    filter: blur(1px);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}



        `}</style>
          </button>

          <div className="flex lg:items-center items-start space-x-3 lg:mt-20 mt-4 lg:mx-7" >
            {/* Arrow Button */}
            <button
              onClick={handleToggle}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 hover: "
            >
              <FaArrowRight />
            </button>

            {/* Social Media Buttons */}
            {isExpanded && (
            <div
            className=" absolute right-7 inset-y-[560px] lg:static flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-3"
          >
          
                {/* LinkedIn */}
                <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-125 transition duration-300">
                  <FaLinkedin />
                </button>

                {/* GitHub */}
                <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 hover:scale-125   transition duration-300">
                  <FaGithub />
                </button>

                {/* Instagram */}
                <button className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-125  transition duration-300">
                  <FaInstagram />
                </button>

                {/* Twitter */}
                <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 hover:scale-125  transition duration-300">
                  <FaTwitter />
                </button>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
      <div className=" group w-48 h-48 sm:w-64 sm:h-80 lg:w-80 lg:h-80 mt-10 lg:mt-32 mx-auto lg:mx-auto rounded-full overflow-hidden  shadow-lg flex-shrink-0 ">
        {/* Responsive Image */}
        <img
          src={pic}
          alt="Tejas"
          className="object-cover w-full h-full rounded-full"
        />
        {/* Hover Effect Text */}
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
