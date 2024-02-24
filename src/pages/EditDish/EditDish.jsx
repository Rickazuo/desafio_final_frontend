import { editDish } from "../../api/dishes";
import AddAndEditDish from "../../components/AddAndEditDish/addAndEditDish";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./editDish.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

export default function EditDish() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data, id) => {
    try {
      const response = await editDish(user.token, id, data);
      if (response) {
        navigate("/home");
      }
    } catch (error) {}
  };

  return (
    <div className={styles.main}>
      <Header />
      <AddAndEditDish
        title="Editar prato"
        canDelete="true"
        onSubmit={onSubmit}
      />
      <Footer />
    </div>
  );
}
