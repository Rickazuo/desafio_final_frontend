import React, { useState } from "react";
import styles from "./header.module.css";
import icon from "../../assets/polygon.svg";
import signOut from "../../assets/signOut.svg";
import orderIcon from "../../assets/orderIcon.svg";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
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
            className={styles.searchInput}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className={styles.buttonContainer}>
            <button
              onClick={() => navigate("/dish/create")}
              className={`${styles.buttonMenu} poppins-200-medium`}
            >
              Novo Prato
            </button>
            <button
              onClick={logout}
              className={`${styles.buttonMenu} poppins-200-medium`}
            >
              Sair
            </button>
          </div>
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
          <div
            onClick={() => navigate("/home")}
            className={styles.bannerHeader}
          >
            <img className={styles.icon} src={icon} alt="icon of business" />
            <div>
              <span className={`${styles.textBanner} roboto-bigger-bold`}>
                food explorer
              </span>
              {!!user.admin && (
                <p className={`${styles.adminTag} roboto-smallest-regular`}>
                  admin
                </p>
              )}
            </div>
          </div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {!user.admin && (
            <button
              onClick={() => user.admin && navigate("/dish/create")}
              className={`${styles.orderButton} poppins-100-medium`}
            >
              {!user.admin && <img src={orderIcon} alt="order icon" />}
              <p className={styles.orderNotification}>N</p>
              <span className={styles.orderText}>
                {user.admin ? "Novo prato" : "Pedido"}
              </span>
            </button>
          )}
          <button onClick={logout} className={styles.signOutButton}>
            <img src={signOut} alt="icon of sign out" />
          </button>
        </>
      )}
    </main>
  );
}
