import React, { useState } from "react";
import styles from "./dishCards.module.css";
import heartIcon from "../../assets/heart.svg";
import spaghettiGambe from "../../assets/spaghettiGambe.svg";

export default function DishCards() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const formattedQuantity = quantity < 10 ? `0${quantity}` : quantity;

  return (
    <main className={styles.main}>
      <img className={styles.likedButton} src={heartIcon} alt="heart icon" />
      <div className={styles.containerDish}>
        <img src={spaghettiGambe} alt="image of a dish" />
        <p className={`${styles.titleDish} poppins-300-bold `}>
          spaghettiGambe
        </p>
        <p className={`${styles.descriptionDish} roboto-smaller-regular`}>
          Massa fresca com camarões e pesto.
        </p>
        <p className={`${styles.priceDish} roboto-biggest-regular`}>R$ XX,XX</p>
        <div className={styles.footerDishCard}>
          <div className={styles.quantity}>
            <button
              onClick={handleDecrease}
              className={`${styles.buttonQuantity}`}
            >
              -
            </button>
            <span className="roboto-big-bold">{formattedQuantity}</span>
            <button
              onClick={handleIncrease}
              className={`${styles.buttonQuantity}`}
            >
              +
            </button>
          </div>
          <button className={`${styles.buttonDish} poppins-100-medium`}>
            Incluir
          </button>
        </div>
      </div>
    </main>
  );
}
