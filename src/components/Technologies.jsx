import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaDatabase } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpringboot, SiMongodb } from "react-icons/si";
import { DiPython } from "react-icons/di";
import {motion} from 'motion/react';

const iconVariants=(duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeatType:"reverse",
        },
    },
});
function Technologies() {
  return (
    <div className="border-b border-neutral-800 p-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="React"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        
        {/* Java */}
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Java"
        >
          <FaJava className="text-7xl text-orange-600" />
        </motion.div>
        
        {/* Spring Boot */}
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Spring Boot"
        >
          <SiSpringboot className="text-7xl text-green-500" />
        </motion.div>
        
        {/* Python */}
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Python"
        >
          <DiPython className="text-7xl text-yellow-500" />
        </motion.div>
        
        {/* Database */}
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Database"
        >
          <FaDatabase className="text-7xl text-blue-400" />
        </motion.div>
        
        {/* PostgreSQL */}
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="PostgreSQL"
        >
          <BiLogoPostgresql className="text-7xl text-sky-400" />
        </motion.div>
        
        {/* MongoDB */}
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
