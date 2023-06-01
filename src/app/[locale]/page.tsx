"use client";
import AboutMe from "@/containers/AboutMe";
import OtherSkills from "@/containers/OtherSkills";
import Presentation from "@/containers/Presentation";
import Projects from "@/containers/Projects";
import Stack from "@/containers/Stack";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("projects");

  return (
    <>
      <Presentation />
      <AboutMe />
      <Stack />
      <OtherSkills />
      <Projects title={t("frontend")} />
    </>
  );
}
