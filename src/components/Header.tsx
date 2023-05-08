'use client'
import Image from "next/image";
import eeuuFlag from "@/assets/estados-unidos.png";
import { useTranslation } from "@/app/i18n/client";

type HeaderParams = {
    lng: string
}

const Header = ({lng}: HeaderParams) => {
    const { t } = useTranslation(lng, 'header')
    return(
        <header className="w-full h-14 bg-dark-black">
            <section aria-label="change language section">
                <Image src={eeuuFlag} alt="United states flag" width={24} height={24}/>
                <span>EN</span>
                {t('hola')}
            </section>
        </header>
    )
}

export default Header;