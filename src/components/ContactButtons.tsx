"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const ContactButtons = () => {
  return (
    <div className="w-full h-[8rem] flex items-center justify-around">
      <a
        className="flex items-center gap-1 cursor-pointer border border-solid rounded bg-light-blue border-light-brown text-light-white  dark:bg-dark-white dark:border-dark-gray dark:text-dark-black p-2 lg:bg-light-white lg:border-light-blue lg:text-light-blue lg:dark:bg-dark-black lg:dark:border-dark-white lg:dark:text-dark-white
        lg:hover:bg-light-blue lg:hover:border-light-brown lg:hover:text-light-white lg:dark:hover:bg-dark-white lg:dark:hover:border-dark-gray lg:dark:hover:text-dark-black
        "
        href="https://github.com/JulianLizarazo"
        target="_blank"
      >
        <AiFillGithub className="w-10 h-10" />
        <span>Github</span>
      </a>
      <a
        className="flex items-center gap-1 cursor-pointer border border-solid rounded bg-light-blue border-light-brown text-light-white  dark:bg-dark-white dark:border-dark-gray dark:text-dark-black p-2 lg:bg-light-white lg:border-light-blue lg:text-light-blue lg:dark:bg-dark-black lg:dark:border-dark-white lg:dark:text-dark-white
        lg:hover:bg-light-blue lg:hover:border-light-brown lg:hover:text-light-white lg:dark:hover:bg-dark-white lg:dark:hover:border-dark-gray lg:dark:hover:text-dark-black"
        href="https://www.linkedin.com/in/julianlizarazo/"
        target="_blank"
      >
        <AiFillLinkedin className="w-10 h-10" />
        <span>Linkedin</span>
      </a>
    </div>
  );
};

export default ContactButtons;
