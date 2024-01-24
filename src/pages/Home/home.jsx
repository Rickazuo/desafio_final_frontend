import Banner from "../../components/Banner/banner";
import Menu from "../../components/Menu/menu";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Banner /> */}
      <Menu />
    </main>
  );
}
