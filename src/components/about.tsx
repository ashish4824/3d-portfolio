import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import cn from "classnames";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={cn(styles.sectionSubText, "text-white")}>Introduction</p>
          <h2 className={cn(styles.sectionHeadText, "text-white")}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I'm a passionate Frontend Developer at Wikisoft Technology, specializing in building exceptional web experiences. With expertise in React.js and modern JavaScript, I create responsive and intuitive user interfaces that drive business success. My experience includes developing admin panels, real-time chat applications, and e-commerce solutions. I combine technical skills with creative problem-solving to deliver clean, maintainable code and outstanding user experiences. Currently focused on React.js and exploring full-stack development with Node.js, I'm always eager to take on new challenges and bring innovative ideas to life!
        </p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
