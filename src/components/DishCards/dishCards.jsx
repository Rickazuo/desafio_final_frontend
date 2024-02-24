import React, { useState } from "react";
import styles from "./dishCards.module.css";
import heartIcon from "../../assets/heart.svg";
import fullHeartIcon from "../../assets/fullHeart.svg";
import pencilIcon from "../../assets/pencil.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function DishCards({
  title,
  description,
  img,
  liked,
  id,
  price,
}) {
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();
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
      {!user.admin && !liked && (
        <img className={styles.likedButton} src={heartIcon} alt="heart icon" />
      )}

      {!user.admin && liked && (
        <img className={styles.likedButton} src={fullHeartIcon} />
      )}

      {user.admin && (
        <img
          onClick={() => navigate(`/dish/edit/${id}`)}
          className={styles.likedButton}
          src={pencilIcon}
        />
      )}
      <div className={styles.containerDish}>
        <img
          onClick={() => navigate(`/dish/dishes/${id}`)}
          className={styles.dishImg}
          src={img}
          alt="image of a dish"
        />
        <p
          onClick={() => navigate(`/dish/dishes/${id}`)}
          className={`${styles.titleDish} poppins-300-bold `}
        >
          {title}
        </p>
        <p className={`${styles.descriptionDish} roboto-smaller-regular`}>
          {description}
        </p>
        <p className={`${styles.priceDish} roboto-biggest-regular`}>
          R$ {price}
        </p>
        {!user.admin && (
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
        )}
      </div>
    </main>
  );
}
