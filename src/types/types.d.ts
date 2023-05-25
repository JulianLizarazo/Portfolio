type Animations = "on" | "off";

type TAnimationContext = {
    animations: Animations,
    changeAnimations: () => void,
}

type Theme = "light" | "dark";

type TThemeContext = {
    theme: Theme,
    changeTheme: () => void,
}