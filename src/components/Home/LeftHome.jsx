import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FiDownload, FiSend } from "react-icons/fi";

const LeftHome = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-xl font-normal">WELCOME TO MY WORLD</h4>

        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Ahmad Ibrahim</span>
        </h1>

        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-xl line font-bodyFont tracking-wide leading-7">
          I am a frontend developer, Creating web pages and web applications is
          my passion. I am looking forward to being the kind of assistant you
          need to make your business flourish.
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <h2 className="font-titleFont text-base uppercase mb-4">
            {" "}
            find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100007739567476"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>

            <a href="https://x.com/sheakh_ahmad/" className="bannerIcon">
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-ibrahim-4b113522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <DiJavascript1 />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="w-[240px] h-16 bg-designColor text-gray-200  border-designColor text-2xl flex gap-3 items-center justify-center rounded-md shadow-shadowOne hover:bg-black hover:bg-opacity-25 hover:-translate-y-1 transition-all hover:text-white cursor-pointer duration-300">
          <h2>Contact Me</h2>
          <FiSend />
        </div>
        <div className="w-[310px] h-16 bg-black bg-opacity-25 text-gray-200  border-designColor text-2xl flex gap-3 items-center justify-center rounded-md shadow-shadowOne hover:bg-designColor hover:-translate-y-1 transition-all hover:text-white cursor-pointer duration-300">
          <h2>Download Resume</h2>
          <FiDownload /> 
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
