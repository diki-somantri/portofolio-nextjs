import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="0vw" y="-14vw" />
        <Skill name="SQL" x="0vw" y="-21vw" />
        <Skill name="MongoDB" x="-19vw" y="-18vw" />
        <Skill name="Git" x="20vw" y="-13vw" />
        <Skill name="PHP" x="18vw" y="0vw" />
        <Skill name="Laravel" x="36vw" y="-6vw" />
        <Skill name="NodeJS" x="36vw" y="6vw" />
        <Skill name="Javascript" x="0vw" y="10vw" />
        <Skill name="NextJS" x="16vw" y="15vw" />
        <Skill name="ExpressJS" x="0vw" y="24vw" />
        <Skill name="ReactJS" x="-16vw" y="15vw" />
        <Skill name="CSS" x="-18.5vw" y="0vw" />
        <Skill name="Tailwind" x="-28vw" y="-8vw" />
        <Skill name="VueJS" x="-27vw" y="8vw" />
        <Skill name="Bootstrap" x="-37vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;
