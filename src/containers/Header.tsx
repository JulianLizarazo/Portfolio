"use client";

import { Languages } from "../components/Languages";
import ThemeSwitch from "@/components/ThemeSwitch";
import AnimationHandler from "@/components/AnimationHandler";
import { useWindowSize } from "@/hooks/useWindowSize";
import HamburguerMenu from "@/components/HamburguerMenu";

type HeaderParams = {
  lng: string;
};

const Header = ({ lng }: HeaderParams) => {
  const { width } = useWindowSize();

  return (
    <header className="w-full h-14 flex items-center justify-evenly bg-light-white dark:bg-dark-black">
      <Languages lng={lng} />
      <ThemeSwitch />
      <AnimationHandler />
      {width < 768 ? <HamburguerMenu /> : <p>ola</p>}
    </header>
  );
};

export default Header;
