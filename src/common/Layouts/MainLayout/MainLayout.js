import styles from "./MainLayout.module.css";

function MainLayout({ children }) {
  return (
    <main className={styles.MainLayoutWrapper}>
      {children}
    </main>
  );
}

export default MainLayout;
