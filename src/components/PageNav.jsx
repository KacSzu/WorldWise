import { NavLink } from "react-router-dom";
import { nav, list } from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={nav}>
      <ul className={list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
