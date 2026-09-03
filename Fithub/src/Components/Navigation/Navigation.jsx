import { NavLink } from "react-router";
import style from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={style.navStyle}>
      <ul>
        <li className={style.linkStyle}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
