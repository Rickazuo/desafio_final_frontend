import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/home";
import CreateAccount from "./pages/CreateAccount/createAccount";
import LoginAccount from "./pages/LoginAccount/loginAccount";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
