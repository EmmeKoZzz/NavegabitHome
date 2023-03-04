import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import React from "react";
import Home from "../pages/Home/Home.index";

// aqui van todos los tipos de provider

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;