import styles from "./dishCards.module.css";
import heartIcon from "../../assets/heart.svg";
import spaguettiGamer from "../../assets/spaguettiGamber.svg";

export default function DishCards() {
  return (
    <main className={styles.main}>
      <img className={styles.likedButton} src={heartIcon} alt="heart icon" />
      <div>
        <img src={spaguettiGamer} alt="image of a dish" />
        <p>Title Dish</p>
        <p>resume</p>
        <p>Price</p>
        <div>
          <span>quantity</span>
          <button>Incluir</button>
        </div>
      </div>
    </main>
  );
}
