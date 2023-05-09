import style from "./LightSelectedSwitch.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const LightSelectedSwitch = () => {
  return (
    <section className={style.switch}>
      <div className={style.on}>
        <BsFillSunFill width={8} height={8} />
      </div>
      <div className={style.off}>
        <BsFillMoonFill width={8} height={8} />
      </div>
      <div className={style.mountain}></div>
    </section>
  );
};

export default LightSelectedSwitch;
