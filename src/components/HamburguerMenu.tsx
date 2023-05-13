import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";

const HamburguerMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav>
      {!showMenu ? (
        <RxHamburgerMenu
          width={15}
          height={15}
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <section>
          <TbLetterX
            width={15}
            height={15}
            onClick={() => setShowMenu(!showMenu)}
          />
        </section>
      )}
    </nav>
  );
};

export default HamburguerMenu;
