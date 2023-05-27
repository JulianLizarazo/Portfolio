"use client"
import AboutMe from "@/containers/AboutMe";
import OtherSkills from "@/containers/OtherSkills";
import Presentation from "@/containers/Presentation";
import Projects from "@/containers/Projects";
import Stack from "@/containers/Stack";

export default function Home() {
  return (
    <>
      <Presentation/>
      <AboutMe/>
      <Stack/>
      <OtherSkills/>
      <Projects/>
    </>
  )
}
