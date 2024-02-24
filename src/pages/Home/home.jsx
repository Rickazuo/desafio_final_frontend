// import React, { useState } from "react";
// import AddAndEditDish from "../../components/AddAndEditDish/addAndEditDish";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import styles from "./home.module.css";
import { getAllDishes } from "../../api/dishes";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Banner from "../../components/Banner/banner";

export default function Home() {
  const [dishesList, setDishesList] = useState({
    meal: [],
    dessert: [],
    drink: [],
  });
  const { user } = useAuth();

  const transformDishes = (dishes) => {
    const transformed = dishes.reduce(
      (acc, dish) => {
        const categoryKey = dish.category.toLowerCase();

        if (!acc[categoryKey]) {
          acc[categoryKey] = [];
        }

        acc[categoryKey].push({
          id: dish.id,
          title: dish.name,
          description: dish.description,
          img: dish.image_url.split("/").pop(), // TODO check this logic
          liked: dish.liked === 1,
          price: dish.price,
        });

        return acc;
      },
      { meal: [], dessert: [], drink: [] }
    );

    return transformed;
  };

  const getDishesList = async () => {
    try {
      const response = await getAllDishes(user.token);
      if (response) {
        const dishes = transformDishes(response.data);
        setDishesList(dishes);
      }
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  };

  useEffect(() => {
    getDishesList();
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <div className={styles.carousel}>
        <Carousel dishes={dishesList.meal} />
        <Carousel dishes={dishesList.dessert} />
        <Carousel dishes={dishesList.drink} />
      </div>
      <Footer />
    </main>
  );
}
