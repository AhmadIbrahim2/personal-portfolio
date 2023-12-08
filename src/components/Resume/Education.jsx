import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
      </div>
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className="mt-6 lgl:mt-14 w-full h-[200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of An-Najah National (2019 - 2023)"
            result="Success"
          />
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kufur-rai Secondary School (2016 - 2019)"
            result="Success"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
