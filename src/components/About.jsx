import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[220px] w-full transform transition-all duration-300 hover:scale-105">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[15px] bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 shadow-lg hover:shadow-xl"
    >
      <div
        options={{
          max: 25,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-gray-900 rounded-[15px] py-6 px-6 min-h-[240px] flex flex-col justify-center items-center transform transition duration-300 hover:-translate-y-1"
      >
        <div className="flex justify-center items-center bg-gradient-to-br from-white to-gray-200 p-3 rounded-full shadow-md transform transition-all duration-300 hover:rotate-[10deg]">
          <img src={icon} alt="service-icon" className="w-12 h-12 object-contain" />
        </div>

        <h3 className="text-white text-[18px] font-bold text-center mt-4 leading-tight">
          {title}
        </h3>

        {/* <button className="mt-4 py-1 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
          Explore
        </button> */}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Passionate Software Engineer with a Master’s in Computer Applications and 1 year of hands-on experience in FullStack development, specializing in ReactJS, NodeJS, ExpressJS, and TypeScript. Proficient in building dynamic, high-performance applications with a strong foundation in RESTful APIs, MySQL, and Redux. Always eager to explore innovative solutions and currently open to new opportunities to leverage my skills in impactful projects!
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-6 no-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap gap-6 w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");

