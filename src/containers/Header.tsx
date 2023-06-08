"use client";
import { useState, useEffect } from "react";
import { Languages } from "../components/Languages";
import ThemeSwitch from "@/components/ThemeSwitch";
import AnimationHandler from "@/components/AnimationHandler";
import HamburguerMenu from "@/components/HamburguerMenu";
import { motion } from "framer-motion";

type HeaderParams = {
  lng: string;
};

const Header = ({ lng }: HeaderParams) => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [navOpened, setNavOpened] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos! > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleHoverStart = () => {
    setIsVisible(true);
  };

  const handleHoverEnd = () => {
    if (window.pageYOffset > 0 && !navOpened) {
      setIsVisible(false);
    }
  };


  return (
    <motion.header
      className="w-full fixed flex items-center justify-evenly z-[500] bg-light-white dark:bg-dark-black"
      animate={isVisible || navOpened ? { height: "56px" } : { opacity: 0 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Languages lng={lng} />
      <ThemeSwitch />
      <AnimationHandler />
      <HamburguerMenu setIsVisible={setNavOpened} />
    </motion.header>
  );
};

export default Header;
