import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { editDish } from "../../api/dishes"; // Importando a função editDish
import AddAndEditDish from "../../components/AddAndEditDish/addAndEditDish";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import styles from "./editDish.module.css";

export default function EditDish() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData, id) => {
    try {
      const response = await editDish(user.token, id, formData); // Usando a função editDish do módulo api/dishes.js
      if (response.status === 200 || response.status === 201) {
        console.log("Prato atualizado com sucesso:", response.data);
        navigate("/home");
      } else {
        console.error("Erro ao atualizar o prato:", response.data);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className={styles.main}>
      <Header />
      <AddAndEditDish
        title="Editar prato"
        canDelete={true}
        onSubmit={onSubmit}
      />
      <Footer />
    </div>
  );
}
