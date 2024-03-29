import React, { useState } from "react";
import styles from "./createAccount.module.css";
import polygon from "../../assets/polygon.svg";
import AccountModule from "../../components/AccountModule/AccountModule";
import { createNewUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await createNewUser(formData);
      if (response) {
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src={polygon} alt="polygon image" />
        <span className="roboto-giant-bold">food explorer</span>
      </div>
      <AccountModule title="Crie sua conta">
        <div>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.divForm}>
              <label
                className={`${styles.labelForm} roboto-small-regular`}
                htmlFor="name"
              >
                Seu nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Exemplo: Maria da Silva"
                required
                className={styles.labelInput}
              />
            </div>
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
              Criar conta
            </button>
          </form>
          <a href="/">
            <p className={`${styles.alreadyAccountButton} poppins-100-medium`}>
              Já tenho uma conta
            </p>
          </a>
        </div>
      </AccountModule>
    </main>
  );
}
