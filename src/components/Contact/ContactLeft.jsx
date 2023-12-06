import React from 'react'
import { contactImg } from "../../assets";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8">
            <img src={contactImg} alt="contactImg" />
            <div className="mt-10 flex flex-col gap-5">
              <h3 className="text-4xl font-bold text-white">Ahmad Ibrahim</h3>
              <p className="text-2xl font-normal text-gray-400">
                Front-End Developer
              </p>
              <p className="text-lg text-gray-400 tracking-wide">
                I am a frontend developer, Creating web pages and web
                applications is my passion. I am looking forward to being the
                kind of assistant you need to make your business flourish.
              </p>
              <p className="text-lg text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+972 594 650 868</span>
              </p>
              <p className="text-lg text-gray-400 flex items-center gap-2">
                Email:{" "}
                <span className="text-lightText">ahmadalshak57@gmail.com</span>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="w-[60%] h-full text-xl uppercase flex flex-col justify-between">
                Find me in
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
          </div>
  )
}

export default ContactLeft