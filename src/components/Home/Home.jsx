import React from "react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";

const Home = () => {
  
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex gap-10 items-center border-b-[1px] border-b-black font-titleFont"
    >
      <LeftHome />
      <RightHome />
      
    </section>
  );
};

export default Home;
