import React from "react";

function ButtonItems({ imp, text, link }) {
  return (
    <div className={`button ${imp == "secondary" ? "button__white" : ""}`}>
      <a href={link}>{text}</a>
    </div>
  );
}

export default ButtonItems;
