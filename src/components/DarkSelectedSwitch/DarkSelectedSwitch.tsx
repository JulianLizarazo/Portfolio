import style from "./DarkSelectedSwitch.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const DarkSelectedSwitch = () => {
    return(
<section className={style.switch}>
      <div className={style.on}>
      <BsFillMoonFill width={8} height={8} className="text-dark-white" />
      </div>
      <div className={style.off}>
      <BsFillSunFill width={8} height={8} className="text-light-blue" />
       
      </div>
      <div className={style.mountain}></div>
    </section>
    )
};

export default DarkSelectedSwitch;