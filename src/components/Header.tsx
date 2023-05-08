'use client'

import { useTranslation } from "@/app/i18n/client";
import { Languages } from "./Languages";

type HeaderParams = {
    lng: string
}

const Header = ({lng}: HeaderParams) => {
    const { t } = useTranslation(lng, 'header')
    return(
        <header className="w-full h-14 bg-dark-black">
            <Languages t={t} lng={lng} />
        </header>
    )
}

export default Header;