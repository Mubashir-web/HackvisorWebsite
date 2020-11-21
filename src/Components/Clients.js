import React from "react";
import "./Clients.css";
import CardItem from "./CardItem";
import SampleImage from "../img/Client/Sample Images.png";

function Clients() {
  const Samplepic = SampleImage;
  return (
    <div className="clientPage">
      {/* <img src={ClientBg}/> */}

      <h1 className="clientMainTitle">Our Clients Says</h1>
      {/* Copy of cards from brian */}

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Samplepic}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Nusaif"
              path="/services"
            />
            <CardItem
              src={Samplepic}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Kadavil"
              path="/services"
            />
            <CardItem
              src={Samplepic}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Lorem"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Clients;
