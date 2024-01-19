import styles from "./banner.module.css";
import imageBanner from "../../assets/macarrons.svg";

export default function Banner() {
  return (
    <main className={styles.main}>
      <img
        src={imageBanner}
        className={styles.imgBanner}
        alt="image of dish to banner"
      />
      <div className={styles.descriptionBanner}>
        <h3 className="poppins-500-medium">Sabores inigualáveis</h3>
        <p className="robot-small-regular">
          Sinta o cuidado do preparo com ingredientes selecionados
        </p>
      </div>
    </main>
  );
}
