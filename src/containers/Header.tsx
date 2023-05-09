"use client";

import { useTranslation } from "@/app/i18n/client";
import { Languages } from "../components/Languages";
import ThemeSwitch from "@/components/ThemeSwitch";
import AnimationHandler from "@/components/AnimationHandler";

type HeaderParams = {
  lng: string;
};

const Header = ({ lng }: HeaderParams) => {
  const { t } = useTranslation(lng, "header");
  return (
    <header className='flex w-full h-14 bg-light-white dark:bg-dark-black'>
      <Languages lng={lng} />
      <ThemeSwitch/>
      <AnimationHandler t={t}/>
    </header>
  );
};

export default Header;
