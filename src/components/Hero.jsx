import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import pic from "../assets/tejpic.jpg";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
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

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] lg:mt-36  max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className="w-5 h-5 rounded-full bg-[#915EFF]" /> */}
          {/* <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-[30px]`}>
            Hi, I'm <span className="text-[#915EFF] text-[55px]">Harshal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A {renderTextWithColors()}
          </p>
        </div>
        <div className="relative group w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mt-10 lg:mt-0 lg:ml-80 rounded-full overflow-hidden shadow-lg flex-shrink-0">
      {/* Responsive Image */}
      <img
        src={pic}
        alt="Tejas"
        className="object-cover w-full h-full rounded-full"
      />
      {/* Hover Effect Text */}
    </div>
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
