import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/home";
import CreateAccount from "./pages/CreateAccount/createAccount";
import LoginAccount from "./pages/LoginAccount/loginAccount";
import Header from "./components/Header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <LoginAccount />
    </main>
  );
}

export default App;
