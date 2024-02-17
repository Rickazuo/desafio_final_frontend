import React, { useState } from "react";
import styles from "./header.module.css";
import icon from "../../assets/polygon.svg";
import signOut from "../../assets/signOut.svg";
import orderIcon from "../../assets/orderIcon.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className={`${isMenuOpen ? styles.mainMenu : styles.main}`}>
      {isMenuOpen ? (
        <div className={styles.menu}>
          <div className={styles.headerMenu}>
            <div
              className={`${styles.hamburger} ${
                isMenuOpen ? styles.hamburgerActive : ""
              }`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={`${isMenuOpen ? styles.textMenu : styles.none}`}>
              Menu
            </span>
          </div>
          <input
            className={styles.searchInputMenu}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
          <button className={`${styles.buttonMenu} poppins-200-medium`}>
            Sair
          </button>
        </div>
      ) : (
        <>
          <div
            className={`${styles.hamburger} ${
              isMenuOpen ? styles.hamburgerActive : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.bannerHeader}>
            <img className={styles.icon} src={icon} alt="icon of business" />
            <span className={`${styles.textBanner} roboto-bigger-bold`}>
              food explorer
            </span>
          </div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
          <button className={`${styles.orderButton} poppins-100-medium`}>
            <img src={orderIcon} alt="order icon" />
            <p className={styles.orderNotification}>N</p>
            <span className={styles.orderText}>Pedido</span>
          </button>
          <button className={styles.signOutButton}>
            <img src={signOut} alt="icon of sign out" />
          </button>
        </>
      )}
    </main>
  );
}
