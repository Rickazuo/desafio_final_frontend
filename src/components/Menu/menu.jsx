import DishCards from "../DishCards/dishCards";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <main className={styles.menu}>
      <p>Refeições</p>
      <div>
        <div>
          <DishCards />
        </div>
      </div>
    </main>
  );
}
