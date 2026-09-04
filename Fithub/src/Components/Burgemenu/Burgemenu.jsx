import { NavLink } from "react-router";
import style from "./Burgermenu.module.scss";
import { Loginform } from "../Login/Login";

export default function BurgerMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={style.drawerOverlay} onClick={onClose}>
      <div className={style.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={style.drawerHeader}>
          <h2>Menu</h2>

          <button className={style.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className={style.drawerNav}>
          <NavLink to="/Home" onClick={onClose}>
            Home
          </NavLink>

          <NavLink to="/Search" onClick={onClose}>
            Search
          </NavLink>

          <Loginform />
        </nav>
      </div>
    </div>
  );
}
