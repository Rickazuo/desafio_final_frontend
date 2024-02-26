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
  const [dishesList, setDishesList] = useState([]);
  const [searchedDishesList, setSearchedDishesList] = useState([]);
  const { user } = useAuth();

  const transformDishes = (dishes) => {
    const transformed = dishes.reduce(
      (acc, dish) => {
        const categoryKey = dish.category.toLowerCase();

        if (!acc[categoryKey]) {
          acc[categoryKey] = [];
        }

        const img = dish.image_url
          ? dish.image_url.split("/").pop()
          : "defaultImage.jpg";

        acc[categoryKey].push({
          id: dish.id,
          title: dish.name,
          description: dish.description,
          img,
          liked: dish.liked === 1,
          price: dish.price,
        });

        return acc;
      },
      { meal: [], dessert: [], drink: [] }
    );

    return transformed;
  };

  const searchDishes = (searchQuery) => {
    if (!searchQuery.trim()) {
      setSearchedDishesList(dishesList);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredDishes = dishesList.filter((dish) =>
      dish.name.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchedDishesList(filteredDishes);
  };

  const getDishesList = async () => {
    try {
      const response = await getAllDishes(user.token);
      console.log(response);
      if (response) {
        const dishes = response.data;
        setDishesList(dishes);
        setSearchedDishesList(dishes);
      }
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  };

  useEffect(() => {
    getDishesList();
  }, []);

  const filteredDishes = transformDishes(searchedDishesList);

  return (
    <main className={styles.main}>
      <Header onSearch={searchDishes} />
      <Banner />
      <div className={styles.carousel}>
        <Carousel dishes={filteredDishes.meal} />
        <Carousel dishes={filteredDishes.dessert} />
        <Carousel dishes={filteredDishes.drink} />
      </div>
      <Footer />
    </main>
  );
}
