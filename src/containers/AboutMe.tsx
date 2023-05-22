import Image from "next/image";
import colombia from "../assets/colombia.png";
import ContactButtons from "@/components/ContactButtons";
import { useTranslations } from "next-intl";

const AboutMe = () => {
    const t = useTranslations("about-me");
    return(
        <section className="w-full h-[36rem] flex flex-col items-center justify-around pt-10">
            <section>
                <Image src={colombia} alt="xd" width={150} height={150}/>
            </section>
            <section>
                <p className="mx-4 max-w-[600px] text-justify text-lg">{t("text")}</p>
                <ContactButtons/>
            </section>
        </section>
    )
}

export default AboutMe;