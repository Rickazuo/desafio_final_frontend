import styles from "./addAndEditDish.module.css";
import leftArrow from "../../assets/leftArrow.svg";

export default function AddAndEditDish() {
  return (
    <main className={styles.main}>
      <div className={styles.backButton}>
        <img src={leftArrow} alt="icon left arrow" />
        <h2 className="poppins-300-bold">Voltar</h2>
      </div>
      <h1 className={`${styles.titleAddOrEdit} poppins-400-medium`}>
        Adicionar prato / Editar Prato
      </h1>
      <div className={styles.fieldsOfDish}>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldImageContainer}>
            <label className={styles.label} htmlFor="">
              Imagem do prato
            </label>
            <button className={styles.selectButton}> Selecione imagem</button>
          </div>
          <div className={styles.fieldNameContainer}>
            <label className={styles.label} htmlFor="">
              Nome
            </label>
            <input
              className={styles.nameField}
              type="text"
              placeholder="Ex.: Salda Ceasar"
            />
          </div>
          <div className={styles.fieldCategoryContainer}>
            <label className={styles.label} htmlFor="">
              Categoria
            </label>
            <select className={styles.category} name="" id="">
              Refeição
            </select>
          </div>
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldIngredientsContainer}>
            <label className={styles.label} htmlFor="">
              Ingredientes
            </label>
            <input className={styles.ingredients} type="text" />
          </div>
          <div className={styles.fieldPriceContainer}>
            <label className={styles.label} htmlFor="">
              Preço
            </label>
            <input
              placeholder="R$ 00,00"
              className={styles.price}
              type="text"
            />
          </div>
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldDescriptionContainer}>
            <label className={styles.label} htmlFor="">
              Descrição
            </label>
            <textarea
              className={styles.description}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </div>
        </div>
      </div>
      <button className={`${styles.saveButton} poppins-100-medium`}>
        Salvar alterações
      </button>
    </main>
  );
}
