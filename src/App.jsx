import "./App.css";
import Home from "./pages/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount/createAccount";
import LoginAccount from "./pages/LoginAccount/loginAccount";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginAccount />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/register" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
