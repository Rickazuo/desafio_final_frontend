import styles from "./footer.module.css";
import polygonOpaque from "../../assets/polygonOpaque.svg";

export default function Footer() {
  return (
    <main className={styles.footer}>
      <div className={styles.markBusinessFooter}>
        <img
          className={styles.icon}
          src={polygonOpaque}
          alt="icon of business opaque"
        />
        <span className={`${styles.textBanner} roboto-bigger-bold`}>
          food explorer
        </span>
      </div>
      <span className={`${styles.copyright} roboto-smaller-regular`}>
        © 2023 - Todos os direitos reservados.
      </span>
    </main>
  );
}
