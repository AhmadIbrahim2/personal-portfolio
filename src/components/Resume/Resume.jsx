import React, { useState } from "react";
import Title from "../Layout/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificates from "./Certificates";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center text-center">
        <Title title={"1+ YEARS OF EXPERIENCE"} des={"My Resume"} />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`} 
            onClick={()=> setEducationData(true) & setSkillData(false) &setExperienceData(false) & setAchievementData(false)}>Education</li>
          <li className={`${
              skillData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            onClick={()=> setEducationData(false) & setSkillData(true) &setExperienceData(false) & setAchievementData(false)}>Professional Skills</li>
          <li className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            onClick={()=> setEducationData(false) & setSkillData(false) &setExperienceData(true) & setAchievementData(false)}>Experience</li>
          <li className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
             onClick={()=> setEducationData(false) & setSkillData(false) &setExperienceData(false) & setAchievementData(true)}>Certificates</li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills/>}
      {experienceData && <Experience />}
      {achievementData && <Certificates />}
    </section>
  );
};

export default Resume;