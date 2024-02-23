import React, { useState, useEffect } from "react";
import styles from "./dishDetails.module.css";
import leftArrow from "../../assets/leftArrow.svg";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { getDishById } from "../../api/dishes";

export default function DishDetails() {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [dish, setDish] = useState(null);
  const { id } = useParams();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const formattedQuantity = quantity < 10 ? `0${quantity}` : quantity;

  useEffect(() => {
    const getDish = async () => {
      try {
        const response = await getDishById(user.token, id);
        if (response) {
          setDish(response.data);
        }
      } catch (error) {
        console.error("Falha ao buscar os detalhes do prato:", error);
      }
    };

    getDish();
  }, []);

  console.log(dish);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.backButton}>
        <img src={leftArrow} alt="icon left arrow" />
        <h2>Voltar</h2>
      </div>
      <div className={styles.detailsOfDish}>
        <img
          className={styles.imgDish}
          src="/chaVerde.jpg"
          alt="image of a selected dish"
        />
        <div className={styles.informationOfDish}>
          <h1 className={`${styles.titleDish}  poppins-500-medium`}>
            {dish.name}
          </h1>
          <p className={`${styles.descriptionDish} poppins-300-regular`}>
            {dish.description}
          </p>
          <div className={styles.tagsOfDish}>
            <p className={`${styles.tag} poppins-100-medium`}>tags1</p>
          </div>
          <div className={styles.footerInformation}>
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
            <button className={styles.addButton}>
              incluir - R$ {dish.price}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
