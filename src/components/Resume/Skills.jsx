import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
        <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
      </div>

      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">html5</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />              
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">css3</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />               
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">Bootstrap</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />               
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">Tailwind</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              /> 
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">SASS</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />               
              </span>
            </div>
          </div>
        </div>


        <div className="w-full lgl:w-1/2">
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">javascript</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              /> 
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">jquery</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />               
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">react js</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />               
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">redux tool kit</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />               
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className='overflow-x-hidden'>
              <p className="uppercase text-lg font-medium">flutter</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              />               
              </span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Skills;
