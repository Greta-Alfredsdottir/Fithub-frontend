import { useState } from "react";
import BurgerMenu from "../Burgemenu/Burgemenu";

import style from "./Navigation.module.scss";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={style.Navbar}>
      <button
        className={style.Burgerbtn}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
