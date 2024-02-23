// import React, { useState } from "react";
import AddAndEditDish from "../../components/AddAndEditDish/addAndEditDish";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import styles from "./home.module.css";
import { getAllDishes } from "../../api/dishes";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
  const [dishesList, setDishesList] = useState({
    meal: [],
    dessert: [],
    drink: [],
  });
  const { user } = useAuth();
  // const dishes = {
  //   meal: [
  //     {
  //       title: "Pizza Margherita",
  //       description: "Molho de tomate, mozzarella, manjericão.",
  //       img: "pizza.jpg",
  //       liked: true,
  //     },
  //     {
  //       title: "Sushi",
  //       description: "Variedade de sushi fresco.",
  //       img: "sushi.jpg",
  //       liked: false,
  //     },
  //     {
  //       title: "Hambúrguer",
  //       description: "Hambúrguer artesanal, queijo, bacon.",
  //       img: "hamburguer.jpg",
  //       liked: true,
  //     },
  //     {
  //       title: "Salada Caesar",
  //       description: "Alface, croutons, queijo parmesão.",
  //       img: "saladaCaesar.jpg",
  //       liked: false,
  //     },
  //     {
  //       title: "Lasanha",
  //       description: "Camadas de massa, carne, queijo.",
  //       img: "lasanha.jpg",
  //       liked: true,
  //     },
  //   ],
  //   dessert: [
  //     {
  //       title: "Brownie",
  //       description: "Chocolate com nozes.",
  //       img: "brownie.jpg",
  //       liked: true,
  //     },
  //     {
  //       title: "Sorvete",
  //       description: "Sorvete de baunilha com calda.",
  //       img: "sorvete.jpg",
  //       liked: false,
  //     },
  //     {
  //       title: "Cheesecake",
  //       description: "Cheesecake de frutas vermelhas.",
  //       img: "cheesecake.jpg",
  //       liked: true,
  //     },
  //     {
  //       title: "Tiramisu",
  //       description: "Café, mascarpone, cacau.",
  //       img: "tiramisu.jpg",
  //       liked: false,
  //     },
  //     {
  //       title: "Macaron",
  //       description: "Macarons coloridos variados.",
  //       img: "macaron.jpg",
  //       liked: true,
  //     },
  //   ],
  //   drink: [
  //     {
  //       title: "Limonada",
  //       description: "Refrescante e natural.",
  //       img: "limonada.jpg",
  //       liked: true,
  //     },
  //     {
  //       title: "Mojito",
  //       description: "Rum, hortelã, limão.",
  //       img: "mojito.jpg",
  //       liked: false,
  //     },
  //     {
  //       title: "Café",
  //       description: "Café expresso forte.",
  //       img: "cafe.jpg",
  //       liked: true,
  //     },
  //     {
  //       title: "Chá Verde",
  //       description: "Chá verde aromático.",
  //       img: "chaVerde.jpg",
  //       liked: false,
  //     },
  //     {
  //       title: "Smoothie",
  //       description: "Smoothie de frutas vermelhas.",
  //       img: "smoothie.jpg",
  //       liked: true,
  //     },
  //   ],
  // };

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
      <div className={styles.carousel}>
        <Carousel dishes={dishesList.meal} />
        <Carousel dishes={dishesList.dessert} />
        <Carousel dishes={dishesList.drink} />
      </div>
      <Footer />
    </main>
  );
}
