import "./App.css";
import Home from "./pages/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount/createAccount";
import LoginAccount from "./pages/LoginAccount/loginAccount";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import EditDish from "./pages/EditDish/EditDish";
import DishDetails from "./pages/DishDetails/DishDetails";
import CreateDish from "./pages/CreateDish/CreateDish";

function App() {
  return (
    <AuthProvider>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<LoginAccount />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route
              path="/dish/create"
              element={
                <PrivateRoute>
                  <CreateDish />
                </PrivateRoute>
              }
            />
            <Route
              path="/dish/edit/:id"
              element={
                <PrivateRoute>
                  <EditDish />
                </PrivateRoute>
              }
            />
            <Route
              path="/dish/:id"
              element={
                <PrivateRoute>
                  <DishDetails />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </AuthProvider>
  );
}

export default App;
