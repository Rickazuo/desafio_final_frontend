import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./addAndEditDish.module.css";
import leftArrow from "../../assets/leftArrow.svg";
import { useAuth } from "../../context/AuthContext";
import { getDishById } from "../../api/dishes";
export default function AddAndEditDish({ title, canDelete, onSubmit }) {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    ingredients: "",
  });

  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !data.name ||
      !data.description ||
      !data.category ||
      !data.price
      // ||!data.image_url
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    onSubmit({ ...data, user_id: user.id, image_url: "sushi.jpg" }, id); // TODO this image_url will be changed
  };

  useEffect(() => {
    const fetchDish = async () => {
      if (id) {
        try {
          const response = await getDishById(user.token, id);
          if (response && response.data) {
            setData(response.data);
          }
        } catch (error) {
          console.error("Erro ao buscar detalhes do prato:", error);
        }
      }
    };
    fetchDish();
  }, [id, user.token]);
  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <div onClick={() => navigate("/home")} className={styles.backButton}>
        <img src={leftArrow} alt="icon left arrow" />
        <h2 className="poppins-300-bold">Voltar</h2>
      </div>
      <h1 className={`${styles.titleAddOrEdit} poppins-400-medium`}>{title}</h1>
      <div className={styles.fieldsOfDish}>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldImageContainer}>
            <label className={styles.label} htmlFor="">
              Imagem do prato
            </label>
            <button className={styles.selectButton}> Selecione imagem</button>
          </div>
          <div className={styles.fieldNameContainer}>
            <label className={styles.label} htmlFor="name">
              Nome
            </label>
            <input
              name="name"
              value={data.name || ""}
              onChange={handleChange}
              className={styles.nameField}
              type="text"
              placeholder="Ex.: Salada Caesar"
            />
          </div>
          <div className={styles.fieldCategoryContainer}>
            <label className={styles.label} htmlFor="category">
              Categoria
            </label>
            <select
              name="category"
              value={data.category || ""}
              onChange={handleChange}
              className={styles.category}
            >
              <option value="">Selecione uma categoria</option>
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </div>
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldIngredientsContainer}>
            <label className={styles.label} htmlFor="ingredients">
              Ingredientes
            </label>
            <input
              name="ingredients"
              value={data.ingredients || ""}
              onChange={handleChange}
              className={styles.ingredients}
              type="text"
            />
          </div>
          <div className={styles.fieldPriceContainer}>
            <label className={styles.label} htmlFor="price">
              Preço
            </label>
            <input
              name="price"
              value={data.price || ""}
              onChange={handleChange}
              className={styles.price}
              type="text"
              placeholder="R$ 00,00"
            />
          </div>
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldDescriptionContainer}>
            <label className={styles.label} htmlFor="description">
              Descrição
            </label>
            <textarea
              name="description"
              value={data.description || ""}
              onChange={handleChange}
              className={styles.description}
              cols="30"
              rows="10"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </div>
        </div>
        <div className={styles.containerButton}>
          {canDelete && (
            <button className={`${styles.deleteButton}  poppins-100-medium`}>
              Excluir prato
            </button>
          )}
          <button
            type="submit"
            className={`${styles.saveButton} poppins-100-medium`}
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </form>
  );
}
