import React, { useState } from "react";
import styles from "./loginAccount.module.css";
import polygon from "../../assets/polygon.svg";
import AccountModule from "../../components/AccountModule/AccountModule";
import { Link } from "react-router-dom";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function loginAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { authenticateLogin } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response.data) {
        authenticateLogin(response.data);
        navigate("/home");
      }
    } catch (error) {}
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src={polygon} alt="polygon image" />
        <span className="roboto-giant-bold">food explorer</span>
      </div>
      <AccountModule title="Faça login">
        <div>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.divForm}>
              <label
                className={`${styles.labelForm} roboto-small-regular`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Exemplo: exemplo@exemplo.com.br"
                required
                className={styles.labelInput}
              />
            </div>
            <div className={styles.divForm}>
              <label
                className={`${styles.labelForm} roboto-small-regular`}
                htmlFor="password"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="No mínimo 6 caracteres"
                required
                className={styles.labelInput}
                minLength={6}
              />
            </div>
            <button
              type="submit"
              className={`${styles.createAccountButton} poppins-100-medium`}
            >
              Entrar
            </button>
          </form>
          <Link to="/register">
            <p className={`${styles.alreadyAccountButton} poppins-100-medium`}>
              Criar uma conta
            </p>
          </Link>
        </div>
      </AccountModule>
    </main>
  );
}
