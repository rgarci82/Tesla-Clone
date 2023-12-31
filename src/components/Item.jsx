import React from "react";
import ButtonItems from "./ButtonItems";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Item({
  title,
  desc,
  descU,
  backgroundImg,
  leftBtnTxt,
  rightBtnTxt,
  twoButtons,
  first,
}) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item__container">
        <div className="item__text">
          <h1>{title}</h1>
          <div className="item__textDesc">
            <h4>
              {desc} <span className="item__textDesc--span">{descU}</span>
            </h4>
          </div>
        </div>
        <div className="item__lowerThird">
          <div className="item__buttons">
            <ButtonItems imp="primary" text={leftBtnTxt} />
            {twoButtons && <ButtonItems imp="secondary" text={rightBtnTxt} />}
          </div>
          {first && (
            <div className="item__expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
