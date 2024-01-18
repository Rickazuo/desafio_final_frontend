import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/home";
import CreateAccount from "./pages/CreateAccount/createAccount";
import LoginAccount from "./pages/LoginAccount/loginAccount";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <LoginAccount />
      <Footer />
    </main>
  );
}

export default App;
