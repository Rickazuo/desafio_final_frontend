import { createDish } from "../../api/dishes";
import AddAndEditDish from "../../components/AddAndEditDish/addAndEditDish";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
    <div>
      <AddAndEditDish title="Criar prato" onSubmit={onSubmit} />
    </div>
  );
}
