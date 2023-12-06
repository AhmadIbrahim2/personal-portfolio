import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/ahmad.png";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaBootstrap,
    FaGithub,
    FaNpm,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const Footer = () => {
    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex justify-center  gap-40">
            <div className="w-full h-full flex flex-col gap-6 py-6">
                <img className="w-40" src={logo} alt="logo" />
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

            <div className="w-full h-full">
                <h3 className="text-2xl uppercase text-designColor tracking-wider">
                    Quick Link
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    {navLinksdata.map((navlink) => (
                        <li>
                            <span className="w-full text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                                <Link
                                    activeClass="a"
                                    to={navlink.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {navlink.title}
                                </Link>
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full flex flex-col gap-6">

                <div className="flex gap-6">
                    <span className="bannerIcon">
                        <FaHtml5 />
                    </span>
                    <span className="bannerIcon">
                        <FaCss3Alt />
                    </span>
                    <span className="bannerIcon">
                        <IoLogoJavascript />
                    </span>
                </div>

                <div className="flex gap-6">
                    <span className="bannerIcon">
                        <FaReact />
                    </span>
                    <span className="bannerIcon">
                        <FaBootstrap />
                    </span>
                    <span className="bannerIcon">
                        <SiTailwindcss />
                    </span>
                </div>

                <div className="flex gap-6">
                    <span className="bannerIcon">
                        <FaGithub />
                    </span>
                    <span className="bannerIcon">
                        <FaNpm />
                    </span>
                    <span className="bannerIcon">
                        <SiRedux />
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Footer;
