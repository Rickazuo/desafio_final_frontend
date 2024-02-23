import { editDish } from "../../api/dishes";
import AddAndEditDish from "../../components/AddAndEditDish/addAndEditDish";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
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
    <div>
      <AddAndEditDish title="Editar prato" onSubmit={onSubmit} />
    </div>
  );
}
