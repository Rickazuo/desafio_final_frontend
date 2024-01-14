import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/home";
import CreateAccount from "./pages/CreateAccount/createAccount";
import LoginAccount from "./pages/LoginAccount/loginAccount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <LoginAccount />
    </main>
  );
}

export default App;
