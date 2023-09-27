import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";

function AppLayout() {
  const { user } = useAuth();
  return (
    <div className={styles.app}>
      <Sidebar></Sidebar>
      {user && <User />}
      <Map></Map>
    </div>
  );
}

export default AppLayout;
