type Animations = "on" | "off";

type TAnimationContext = {
    animations: Animations,
    changeAnimations: () => void,
}