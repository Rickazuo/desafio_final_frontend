// import React, { useState } from "react";
import Carousel from "../../components/Carousel/carousel";
import DishDetails from "../../components/DishDetails/dishDetails";
import styles from "./home.module.css";

export default function Home() {
  const dishes = {
    meal: [
      {
        title: "Pizza Margherita",
        description: "Molho de tomate, mozzarella, manjericão.",
        img: "pizza.jpg",
        liked: true,
      },
      {
        title: "Sushi",
        description: "Variedade de sushi fresco.",
        img: "sushi.jpg",
        liked: false,
      },
      {
        title: "Hambúrguer",
        description: "Hambúrguer artesanal, queijo, bacon.",
        img: "hamburguer.jpg",
        liked: true,
      },
      {
        title: "Salada Caesar",
        description: "Alface, croutons, queijo parmesão.",
        img: "saladaCaesar.jpg",
        liked: false,
      },
      {
        title: "Lasanha",
        description: "Camadas de massa, carne, queijo.",
        img: "lasanha.jpg",
        liked: true,
      },
    ],
    dessert: [
      {
        title: "Brownie",
        description: "Chocolate com nozes.",
        img: "brownie.jpg",
        liked: true,
      },
      {
        title: "Sorvete",
        description: "Sorvete de baunilha com calda.",
        img: "sorvete.jpg",
        liked: false,
      },
      {
        title: "Cheesecake",
        description: "Cheesecake de frutas vermelhas.",
        img: "cheesecake.jpg",
        liked: true,
      },
      {
        title: "Tiramisu",
        description: "Café, mascarpone, cacau.",
        img: "tiramisu.jpg",
        liked: false,
      },
      {
        title: "Macaron",
        description: "Macarons coloridos variados.",
        img: "macaron.jpg",
        liked: true,
      },
    ],
    drink: [
      {
        title: "Limonada",
        description: "Refrescante e natural.",
        img: "limonada.jpg",
        liked: true,
      },
      {
        title: "Mojito",
        description: "Rum, hortelã, limão.",
        img: "mojito.jpg",
        liked: false,
      },
      {
        title: "Café",
        description: "Café expresso forte.",
        img: "cafe.jpg",
        liked: true,
      },
      {
        title: "Chá Verde",
        description: "Chá verde aromático.",
        img: "chaVerde.jpg",
        liked: false,
      },
      {
        title: "Smoothie",
        description: "Smoothie de frutas vermelhas.",
        img: "smoothie.jpg",
        liked: true,
      },
    ],
  };

  return (
    <main className={styles.main}>
      <div className={styles.carousel}>
        {/* <Carousel dishes={dishes.meal} />
        <Carousel dishes={dishes.dessert} />
        <Carousel dishes={dishes.drink} /> */}
        <DishDetails />
      </div>
    </main>
  );
}
