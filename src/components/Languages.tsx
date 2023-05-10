import Image from "next/image";
import { languages } from "@/app/i18n/settings";
import EEUU from "@/assets/estadosunidos.png";
import ESPANIA from "@/assets/espana.png";

import { MouseEventHandler, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
type LanguageProps = {
  lng: string;
};

export const Languages = ({ lng }: LanguageProps) => {
  const [showCompleteLanguages, setShowCompleteLanguages] =
    useState<boolean>(false);
  
    const { t } = useTranslation(lng, "header");

  const handleClick = (): MouseEventHandler<HTMLElement> => {
    setShowCompleteLanguages(!showCompleteLanguages);
  };

  return (
    <nav  aria-label="change language section" onClick={handleClick}>
      <ul>
        <li>
          <Image
            src={lng === "es" ? ESPANIA : EEUU}
            alt={lng === "es" ? `${t('colombiaFlag')}` : `${t('eeuuFlag')}`}
            width={24}
            height={24}
          />
          <span>{lng.toUpperCase()}</span>
        </li>
        {showCompleteLanguages &&
          languages
            .filter((l) => lng !== l)
            .map((l) => {
              return (
                <li key={l}>
                  <Image
                    src={l === "es" ? ESPANIA : EEUU}
                    alt={lng === "es" ? `${t('eeuuFlag')}` : `${t('colombiaFlag')}`}
                    width={24}
                    height={24}
                  />
                  <span> {l.toUpperCase()}</span>
                </li>
              );
            })}
      </ul>
    </nav>
  );
};
