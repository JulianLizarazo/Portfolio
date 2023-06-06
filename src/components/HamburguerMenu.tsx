"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";
import NavBar from "./NavBar";
import { AnimatePresence } from "framer-motion";

type HamburguerMenuProps = {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

const HamburguerMenu = ({ setIsVisible }: HamburguerMenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);



  useEffect(() => {
    if (showMenu) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [showMenu]);
  console.log(showMenu);
  return (
    <nav className="w-6 h-6">
      {!showMenu ? (
        <RxHamburgerMenu
          className="w-6 h-6 text-light-blue dark:text-dark-white cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <>
          <TbLetterX
            className="w-6 h-6 text-light-blue dark:text-dark-white cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          <AnimatePresence>
            {showMenu && (
              <NavBar
                key="navModal"
                showMenu={showMenu}
                handleShowMenu={setShowMenu}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </nav>
  );
};

export default HamburguerMenu;
