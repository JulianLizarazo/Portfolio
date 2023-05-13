import Image from "next/image";
import { languages } from "@/app/i18n/settings";
import EEUU from "@/assets/estadosunidos.png";
import COLOMBIA from "@/assets/colombia.png";

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
    <nav className="h-full flex items-center cursor-pointer text-light-blue dark:text-dark-white">
      <ul className="relative">
        {!showCompleteLanguages ? (
          <li
            onClick={handleClick}
            className="flex gap-1.5 border-2 border-solid border-light-brown rounded-md p-1 hover:bg-light-gray dark:border-dark-gray dark:hover:bg-dark-gray"
          >
            <Image
              src={lng === "es" ? COLOMBIA : EEUU}
              alt={lng === "es" ? `${t("colombiaFlag")}` : `${t("eeuuFlag")}`}
              width={24}
              height={24}
            />
            <span>{lng.toUpperCase()}</span>
          </li>
        ) : (
          <>
            <li
              onClick={handleClick}
              className="flex gap-1.5 border-t-2 border-x-2 border-solid border-light-brown rounded-t-md p-1 pb-2 hover:bg-light-gray dark:border-dark-gray dark:hover:bg-dark-gray"
            >
              <Image
                src={lng === "es" ? COLOMBIA : EEUU}
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
                  <li
                    key={l}
                    className="absolute top-8 bg-light-white dark:bg-dark-black border-b-2 border-x-2 border-solid border-light-brown rounded-b-md p-1 pe-2 pt-2 hover:bg-light-gray dark:border-dark-gray dark:hover:bg-dark-gray"
                  >
                    <Link
                      href={lng === "es" ? "/en" : "/es"}
                      className="flex gap-1.5"
                    >
                      <Image
                        src={l === "es" ? COLOMBIA : EEUU}
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
