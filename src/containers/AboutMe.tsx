import Image from "next/image";
import profile from "../assets/profile.jpeg";
import ContactButtons from "@/components/ContactButtons";
import { useTranslations } from "next-intl";

const AboutMe = () => {
    const t = useTranslations("about-me");
    return(
        <section id="about" className="w-full h-[36rem] flex flex-col items-center justify-evenly pt-10 lg:flex-row">
            <section>
                <Image src={profile} alt="Profile image" className="w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rounded-full"/>
            </section>
            <section>
                <p className="mx-4 max-w-[600px] text-justify text-lg lg:text-xl">{t("text")}</p>
                <ContactButtons/>
            </section>
        </section>
    )
}   

export default AboutMe;