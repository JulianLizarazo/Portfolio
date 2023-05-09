"use client";

import { useTranslation } from "@/app/i18n/client";
import { Languages } from "../components/Languages";
import ThemeSwitch from "@/components/ThemeSwitch";

type HeaderParams = {
  lng: string;
};

const Header = ({ lng }: HeaderParams) => {
  const { t } = useTranslation(lng, "header");
  return (
    <header className='flex w-full h-14 bg-dark-black'>
      <Languages lng={lng} />
      <ThemeSwitch/>
    </header>
  );
};

export default Header;
