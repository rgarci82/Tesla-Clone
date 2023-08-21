import React from "react";
import ButtonItems from "./ButtonItems";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Item({
  title,
  desc,
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
          <p>{title}</p>
          <div className="item__textDesc">
            <p>{desc}</p>
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
