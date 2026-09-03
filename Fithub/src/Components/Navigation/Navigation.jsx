import { NavLink } from "react-router";
import style from "./Navigation.module.scss";
import { Homepage } from "../../Pages/Homepage/Homepage";

export const Navigation = () => {
  return (
    <nav className={style.navStyle}>
      <ul>
        <li className={style.linkStyle}>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/Search">Search</NavLink>
        </li>
        <li>
          <NavLink href="/Login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
