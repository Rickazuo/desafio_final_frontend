import Banner from "../../components/Banner/banner";
import Carousel from "../../components/Carousel/carousel";
import Menu from "../../components/Menu/menu";
import styles from "./home.module.css";

const images = [
  "https://picsum.photos/200",
  "https://picsum.photos/100",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Carousel images={images} />
    </main>
  );
}
