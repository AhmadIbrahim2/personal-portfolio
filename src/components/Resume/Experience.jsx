import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
        <h2 className="text-4xl  font-bold">Training Experience</h2>
      </div>
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className='w-full lgl:w-1/2'>
          <div className="mt-10 w-full h-[330px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Front-End Training"
              subTitle="ASAL Technologies Company (06/2023 - 09/2023)"
              des="I have successfully finished a 320 hours intensive training program specializing in Frontend Development with React!."
              result="Success"
            />
          </div>
          <div className="mt-10 w-full h-[330px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="ANA JAWWAL Program"
              subTitle="JAWWAL (06/2021 - 06/2022)"
              des="A program organized annually by Jawwal Company for university students, focusing on increasing communication and management skills."
              result="Success"
            />
          </div>
        </div>
        <div className='w-full lgl:w-1/2'>
          <div className="mt-10 w-full h-[330px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Front-End Course"
              subTitle="Knowledge Academy (04/2022 - 08/2022)"
              des="I have successfully finished a four months intensive course specializing in Frontend web Development."
              result="Success"
            />
          </div>
          <div className="mt-10 w-full h-[330px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Project Coordinator"
              subTitle="A M Qattan Foundation (10/2022 - 08/2023)"
              des="Designed, planned, created, implemented and monitored all aspects of the
              project. And evaluated project risks and problems and provided recommendations for
              mitigation."                                                                     
              result="Success"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
