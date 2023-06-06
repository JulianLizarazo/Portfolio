import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

type NavBarProps = {
  showMenu: boolean;
};

const NavBar = ({ showMenu }: NavBarProps) => {
  const t = useTranslations("navigation");
  return (
    <motion.nav
      key="navModal"
      className="w-full h-24 fixed top-14 left-0 bg-light-white dark:bg-dark-black text-light-blue dark:text-dark-white border-b-2 border-light-blue dark:border-dark-white shadow-[2px_16px_19px_-15px_rgba(0,0,0,0.75)] shadow-light-blue dark:shadow-dark-white"
      animate={showMenu && { height: "320px" }}
      exit={{ height: "96px", opacity: 0 }}
    >
      <ul className="w-full h-full flex flex-col justify-around items-center ">
        <li>
          <Link to="/" spy={true} smooth={true} offset={-20}  duration={500}>
            {t("home")}
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>
            {t("aboutMe")}
          </Link>
        </li>
        <li>
          <Link to="stack" spy={true} smooth={true} offset={-20}   duration={500}>
            {t("stack")}
          </Link>
        </li>
        <li>
          <Link to="other" spy={true} smooth={true} offset={-20}  duration={500}>
            {t("otherSkills")}
          </Link>
        </li>
        <li>
          <Link
            to="frontend"
            spy={true}
            smooth={true}
            offset={-20} 
            duration={500}
          >
            {t("frontend")}
          </Link>
        </li>
        <li>
          <Link
            to="backend"
            spy={true}
            smooth={true}
            offset={-20} 
            duration={500}
          >
            {t("backend")}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-20} 
            duration={500}
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
