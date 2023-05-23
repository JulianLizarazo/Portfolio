import StackDesktop from "@/components/Stack/StackDesktop";
import StackMobile from "@/components/Stack/StackMobile";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useTranslations } from "next-intl";


const Stack = () => {
    const { width } = useWindowSize();
    const t = useTranslations("skills");
    return(
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-center">{t("stack")}</h2>
            <p className="text-2xl font-bold text-center">(STACK)</p>
            {width < 1024 ? <StackMobile/> : <StackDesktop/>}
        </section>
    )
}

export default Stack;