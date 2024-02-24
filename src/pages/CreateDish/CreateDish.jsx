import { createDish } from "../../api/dishes";
import AddAndEditDish from "../../components/AddAndEditDish/addAndEditDish";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./createDish.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

export default function CreateDish() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await createDish(user.token, data);
      if (response) {
        navigate("/home");
      }
    } catch (error) {}
  };

  return (
    <div className={styles.main}>
      <Header />
      <AddAndEditDish title="Criar prato" onSubmit={onSubmit} />
      <Footer />
    </div>
  );
}
