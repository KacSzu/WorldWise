import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>gsdga</footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}

export default Sidebar;
