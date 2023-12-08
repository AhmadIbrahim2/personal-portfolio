import React from "react";
import Title from "../Layout/Title";
import Card from "./Card";
import { FaEdit } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title={"features"} des={"what i do"}/>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card title="HTML5/CSS3 Responsive" des="Get your desired web page coded into full responsive HTML & CSS page ready to deploy" icon={<MdOutlineMobileFriendly/>} />
        <Card title="React Development" des="Create your complex web app for your business using React js" icon={<FaLaptopCode/>}/>
        <Card title="Editing & Re-design" des="Do you have some edits and retouchs or even a complete re-design I am here to do it" icon={<FaEdit/>}/>
      </div>
    </section>
  );
};

export default Features;
