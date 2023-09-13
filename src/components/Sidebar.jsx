import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of citeis</p>
      <footer className={styles.footer}>gsdga</footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}

export default Sidebar;
