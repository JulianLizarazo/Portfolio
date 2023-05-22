import Image from "next/image";
import colombia from "../assets/colombia.png";
import ContactButtons from "@/components/ContactButtons";
import { useTranslations } from "next-intl";

const AboutMe = () => {
    const t = useTranslations("about-me");
    return(
        <section className="w-full h-[36rem] flex flex-col items-center justify-evenly pt-10 lg:flex-row">
            <section>
                <Image src={colombia} alt="xd" className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]"/>
            </section>
            <section>
                <p className="mx-4 max-w-[600px] text-justify text-lg lg:text-xl">{t("text")}</p>
                <ContactButtons/>
            </section>
        </section>
    )
}

export default AboutMe;