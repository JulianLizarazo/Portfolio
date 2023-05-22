"use client"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const hoverLight = {
  backgroundColor: "#172b4d",
  borderColor: "#E9DAC1",
  color: "#FBF8F1",
};

const hoverDark = {
  backgroundColor: "#F5EDED",
  borderColor: "#3E3636",
  color: "#151414",
};

const ContactButtons = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className="w-full h-[8rem] flex items-center justify-around">
      <motion.a
        className="flex items-center gap-1 cursor-pointer border border-solid rounded bg-light-blue border-light-brown text-light-white  dark:bg-dark-white dark:border-dark-gray dark:text-dark-black p-2 lg:bg-light-white lg:border-light-blue lg:text-light-blue lg:dark:bg-dark-black lg:dark:border-dark-white lg:dark:text-dark-white"
        whileHover={theme === "light" ? hoverLight : hoverDark}
      >
        <AiFillGithub className="w-10 h-10" />
        <span>Github</span>
      </motion.a>
      <motion.a
        className="flex items-center gap-1 cursor-pointer border border-solid rounded bg-light-blue border-light-brown text-light-white dark:bg-dark-white dark:border-dark-gray dark:text-dark-black p-2 lg:bg-light-white lg:border-light-blue lg:text-light-blue lg:dark:bg-dark-black lg:dark:border-dark-white lg:dark:text-dark-white"
        whileHover={theme === "light" ? hoverLight : hoverDark}
      >
        <AiFillLinkedin className="w-10 h-10" />
        <span>Linkedin</span>
      </motion.a>
    </div>
  );
};

export default ContactButtons;
