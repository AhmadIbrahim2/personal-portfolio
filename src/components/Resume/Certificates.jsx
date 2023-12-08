import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
        <h2 className="text-4xl  font-bold">Training Experience</h2>
      </div>
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <div className="mt-10 w-full h-[330px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Front-End Development"
              subTitle="Knowledge Academy (04/2022 - 08/2022)"
              des="I have successfully finished a four months intensive course specializing in Frontend web Development."
              result="Success"
            />
          </div>
        </div>
        <div className="w-full lgl:w-1/2">
          <div className="mt-10 w-full h-[330px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Dart & Flutter"
              subTitle="Udemy (02/20223 - 07/2023)"
              des="I have finished a dart and flutter develpment course by Abdullah Mansour. "
              result="Success"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
