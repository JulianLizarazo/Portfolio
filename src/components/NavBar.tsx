import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import {AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

type NavBarProps = {
  showMenu: boolean;
};

const NavBar = ({ showMenu }: NavBarProps) => {
  const t = useTranslations("navigation");
  return (
    <motion.nav
      key="navModal"
      className="w-full h-24 fixed top-14 left-0 bg-light-white dark:bg-dark-black text-light-blue dark:text-dark-white border-b-2 border-light-blue dark:border-dark-white shadow-[2px_16px_19px_-15px_rgba(0,0,0,0.75)] shadow-light-blue dark:shadow-dark-white lg:left-auto lg:right-[5%] lg:w-1/4 lg:border-l-2 lg:border-r-2"
      animate={showMenu && { height: "320px" }}
      exit={{ height: "96px", opacity: 0 }}
    >
      <ul className="w-full h-full flex flex-col justify-around items-center ">
        <li className="cursor-pointer">
          <Link className="flex items-center gap-4 hover:underline" to="/" spy={true} smooth={true} offset={-20}  duration={500}>
             {t("home")}
             <AiOutlineArrowRight/> 
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="flex items-center gap-4 hover:underline" to="about" spy={true} smooth={true} offset={-20} duration={500}>
            {t("aboutMe")}
            <AiOutlineArrowRight/> 
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="flex items-center gap-4 hover:underline" to="stack" spy={true} smooth={true} offset={-20}   duration={500}>
            {t("stack")}
            <AiOutlineArrowRight/> 
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="flex items-center gap-4 hover:underline" to="other" spy={true} smooth={true} offset={-20}  duration={500}>
            {t("otherSkills")}
            <AiOutlineArrowRight/> 
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="flex items-center gap-4 hover:underline"
            to="frontend"
            spy={true}
            smooth={true}
            offset={-20} 
            duration={500}
          >
            {t("frontend")}
            <AiOutlineArrowRight/> 
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="flex items-center gap-4 hover:underline"
            to="backend"
            spy={true}
            smooth={true}
            offset={-20} 
            duration={500}
          >
            {t("backend")}
            <AiOutlineArrowRight/> 
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="flex items-center gap-4 hover:underline"
            to="contact"
            spy={true}
            smooth={true}
            offset={-20} 
            duration={500}
          >
            {t("contact")}
            <AiOutlineArrowRight/> 
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
