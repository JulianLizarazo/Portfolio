import Image from "next/image";
import { languages } from "@/app/i18n/settings";
import EEUU from "@/assets/estadosunidos.png";
import ESPANIA from "@/assets/espana.png";

import { MouseEventHandler, useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import i18next from "i18next";

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
    <nav>
      <ul>
        {!showCompleteLanguages ? (
          <li onClick={handleClick}>
            <Image
              src={lng === "es" ? ESPANIA : EEUU}
              alt={lng === "es" ? `${t("colombiaFlag")}` : `${t("eeuuFlag")}`}
              width={24}
              height={24}
            />
            <span>{lng.toUpperCase()}</span>
          </li>
        ) : (
          <>
            <li onClick={handleClick}>
              <Image
                src={lng === "es" ? ESPANIA : EEUU}
                alt={lng === "es" ? `${t("colombiaFlag")}` : `${t("eeuuFlag")}`}
                width={24}
                height={24}
              />
              <span>{lng.toUpperCase()}</span>
            </li>
            {languages
              .filter((l) => lng !== l)
              .map((l) => {
                return (
                  <li key={l}>
                    <Link href={lng === "es" ? "/en" : "/es"}>
                      <Image
                        src={l === "es" ? ESPANIA : EEUU}
                        alt={
                          lng === "es"
                            ? `${t("eeuuFlag")}`
                            : `${t("colombiaFlag")}`
                        }
                        width={24}
                        height={24}
                      />
                      <span> {l.toUpperCase()}</span>
                    </Link>
                  </li>
                );
              })}
          </>
        )}
      </ul>
    </nav>
  );
};
