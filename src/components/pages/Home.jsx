import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import ModelS from "../../assets/Desktop-ModelS.jpeg";
import Model3 from "../../assets/Desktop-Model3.jpeg";
import ModelX from "../../assets/Desktop-ModelX.jpeg";
import ModelY from "../../assets/Desktop-ModelY.jpeg";
import SolarPanels from "../../assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "../../assets/Desktop-SolarRoof.jpeg";
import Accessories from "../../assets/Desktop-Accessories.jpg";
import Item from "../Item";

function Home({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <div className="items__container">
        <Item
          desc="Money Back "
          descU="Guaranteed"
          title="Lowest Cost Solar Panels in America"
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
          first
        />
        <Item
          desc="Order Online for "
          descU="Touchless Delivery"
          title="Model 3"
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <Item
          desc="Order Online for "
          descU="Touchless Delivery"
          title="Model S"
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <Item
          desc="Order Online for "
          descU="Touchless Delivery"
          title="Model X"
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <Item
          desc="Order Online for "
          descU="Touchless Delivery"
          title="Model Y"
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <Item
          desc="Money Back "
          descU="Guaranteed"
          title="Solar for New Roofs"
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
        <Item
          title="Accessories"
          backgroundImg={Accessories}
          leftBtnTxt="ORDER NOW"
          rightBtnTxt="LEARN MORE"
          twoButtons="true"
        />
      </div>
    </>
  );
}

export default Home;
