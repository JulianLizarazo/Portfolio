import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

type NavBarProps = {
  showMenu: boolean;
  handleShowMenu: Dispatch<SetStateAction<boolean>>;
};

const NavBar = ({ showMenu, handleShowMenu }: NavBarProps) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("navigation");
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        handleShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      key="navModal"
      className="w-full h-24 fixed top-14 left-0 bg-light-white dark:bg-dark-black text-light-blue dark:text-dark-white border-b-2 border-light-blue dark:border-dark-white shadow-[2px_16px_19px_-15px_rgba(0,0,0,0.75)] shadow-light-blue dark:shadow-dark-white lg:left-auto lg:right-[5%] lg:w-1/4 lg:border-l-2 lg:border-r-2"
      animate={showMenu && { height: "320px" }}
      exit={{ height: "96px", opacity: 0 }}
    >
      <ul className="w-full h-full flex flex-col justify-around items-center">
        <li className="cursor-pointer">
          <Link
            className="flex items-center gap-4 hover:underline"
            to="/"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => handleShowMenu(false)}
          >
            {t("home")}
            <AiOutlineArrowRight />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="flex items-center gap-4 hover:underline"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => handleShowMenu(false)}
          >
            {t("aboutMe")}
            <AiOutlineArrowRight />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="flex items-center gap-4 hover:underline"
            to="stack"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => handleShowMenu(false)}
          >
            {t("stack")}
            <AiOutlineArrowRight />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="flex items-center gap-4 hover:underline"
            to="other"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => handleShowMenu(false)}
          >
            {t("otherSkills")}
            <AiOutlineArrowRight />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="flex items-center gap-4 hover:underline"
            to="frontend"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => handleShowMenu(false)}
          >
            {t("frontend")}
            <AiOutlineArrowRight />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="flex items-center gap-4 hover:underline"
            to="backend"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => handleShowMenu(false)}
          >
            {t("backend")}
            <AiOutlineArrowRight />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="flex items-center gap-4 hover:underline"
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => handleShowMenu(false)}
          >
            {t("contact")}
            <AiOutlineArrowRight />
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
