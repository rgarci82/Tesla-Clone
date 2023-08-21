import React from "react";
import Header from "../Header";
import HeaderBlock from "../HeaderBlock";
import Menu from "../Menu";

function Home({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <HeaderBlock />
    </>
  );
}

export default Home;
