import React from "react";
import "./Services.css";
import code from "../img/Services/code 1.png";
import network from "../img/Services/network 1.png";
import smartphone from "../img/Services/smartphone 1.png";
import image1 from "../img/Services/image 1.png";

class Services extends React.Component {
  render() {
    return (
      <div className="servicesPage">
        <h1 className="mainTitleServices">Our Services</h1>
        <div className="servicesComponent">
          <div className="serviceElement webDesigning">
            <img src={code} className="codee" />
            <h3>Web Designing</h3>
            <p className="webDesigningPara">
              We have a Creative Web and Graphics Designer who can design a
              Website userfriendly with mobile Responsive.
            </p>
          </div>
          <div className="serviceElement ">
            <img src={network} className="network" />
            <h3>Online & Offline Services</h3>
            <p className="onoffservicesPara">
              HackVisor Provide On-Line Software we Platform to improve Our
              Client Business. always say that we stand on our toes to serve.
            </p>
          </div>
          <div className="serviceElement ">
            <img src={smartphone} className="smartphone" />
            <h3 className="appDevelopment">Mobile App Developing</h3>
            <p className="developmentPara">
              Our team of mobile app developers is creative and knowledgeable to
              accomplish your individual demands as well as your business needs.
            </p>
          </div>
          <div className="serviceElement digMarketing">
            <img src={image1} className="img1" />
            <h3>Digital Marketing</h3>
            <p className="marketingPara">
              HackVisor is doing Off-Line software for a Business.We believe
              technology is a means to solve human problems.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
