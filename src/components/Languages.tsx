"use client";
import Image from "next/image";
import EEUU from "@/assets/estadosunidos.png";
import COLOMBIA from "@/assets/colombia.png";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type LanguageProps = {
  lng: string;
};

export const Languages = ({ lng }: LanguageProps) => {
  const [showCompleteLanguages, setShowCompleteLanguages] =
    useState<boolean>(false);

  const languageRef = useRef<HTMLDivElement | null>(null);

  const t = useTranslations("header");

  const handleClick = (): void => {
    setShowCompleteLanguages(!showCompleteLanguages);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setShowCompleteLanguages(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={languageRef}
      className="h-full flex items-center cursor-pointer text-light-blue dark:text-dark-white z-30"
    >
      <ul className="relative">
        {!showCompleteLanguages ? (
          <li
            onClick={handleClick}
            className="flex gap-1.5 border border-solid border-light-blue rounded-md p-1 hover:bg-light-gray dark:border-dark-white dark:hover:bg-dark-gray"
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
              className="flex gap-1.5 border-t border-x border-solid border-light-blue rounded-t-md p-1 pb-2 hover:bg-light-gray dark:border-dark-white dark:hover:bg-dark-gray"
            >
              <Image
                src={lng === "es" ? COLOMBIA : EEUU}
                alt={lng === "es" ? `${t("colombiaFlag")}` : `${t("eeuuFlag")}`}
                width={24}
                height={24}
              />
              <span>{lng.toUpperCase()}</span>
            </li>
            <li className="absolute top-8 bg-light-white dark:bg-dark-black border-b border-x border-solid border-light-blue rounded-b-md p-1 pe-2 pt-2 hover:bg-light-gray dark:border-dark-white dark:hover:bg-dark-gray">
              <Link
                href={lng === "es" ? "/en" : "/es"}
                className="flex gap-1.5"
              >
                <Image
                  src={lng === "es" ? EEUU : COLOMBIA}
                  alt={
                    lng === "es" ? `${t("eeuuFlag")}` : `${t("colombiaFlag")}`
                  }
                  width={24}
                  height={24}
                />
                <span> {lng === "es" ? "EN" : "ES"}</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
