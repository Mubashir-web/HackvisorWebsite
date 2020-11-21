import React from "react";
import "./Companies.css";
import Foodle from "../img/Client/Foodle.png";
import CAT from "../img/Client/CAT.png";
import Fedex from "../img/Client/Fedex.png";
import Turkish from "../img/Client/Turkish.png";
function Companies() {
  return (
    <div>
      <div className="ContainerDiv">
        <img src={Foodle} className="foodle" />
        <img src={CAT} className="cat" />
        <img src={Fedex} className="fedex" />
        <img src={Turkish} className="Turkish" />
      </div>
    </div>
  );
}

export default Companies;
