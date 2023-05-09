import type { TFunction } from "i18next";


type AnimationHandlerProps = {
    t: TFunction<string, undefined, string>
}

const AnimationHandler = ({ t }: AnimationHandlerProps) => {
    return(
        <section>
            <span>{t('animation')}</span>
        </section>
    )
}

export default AnimationHandler;