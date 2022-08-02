import styles from "./MainLayout.module.css";
import Logo from "../../Components/Logo/";
function MainLayout({ children }) {
  return (
    <main className={styles.MainLayoutWrapper}>
      <div>
        <Logo />
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
