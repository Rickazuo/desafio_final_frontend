import styles from "./header.module.css";
import icon from "../../assets/polygon.svg";
import signOut from "../../assets/signOut.svg";
import orderIcon from "../../assets/orderIcon.svg";

export default function Header() {
  return (
    <main className={styles.main}>
      <div className={styles.bannerHeader}>
        <img className={styles.icon} src={icon} alt="icon of business" />
        <span className={`${styles.textBanner} roboto-bigger-bold`}>
          food explorer
        </span>
      </div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
      <button className={`${styles.orderButton} poppins-100-medium`}>
        <img src={orderIcon} alt="order icon" />
        Pedido {}
      </button>
      <button className={styles.signOutButton}>
        <img src={signOut} alt="icon of sign out" />
      </button>
    </main>
  );
}
