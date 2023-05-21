"use client"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";

const HamburguerMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="w-6 h-6">
      {!showMenu ? (
        <RxHamburgerMenu
          className="w-6 h-6 text-light-blue dark:text-dark-white"
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <section>
          <TbLetterX
            className="w-6 h-6 text-light-blue dark:text-dark-white"
            onClick={() => setShowMenu(!showMenu)}
          />
        </section>
      )}
    </nav>
  );
};

export default HamburguerMenu;
