import React from "react";
import "./AboutUs.css";
import AboutUsImg from "../img/AboutUs.png";
function AboutUs() {
  return (
    <div className="aboutUsPage">
      <h1 className="aboutUsMainTitle">About Us</h1>
      <p className="aboutPara">
        
        HackVisor has providing varities of Web Application according to the
        user requirments. outsourced development services since 2k19. We employ
        a skilled team of developers in India, who are totally focused on
        delivering high quality software solutions which enable our customers to
        achieve their critical IT objectives. We are uniquely positioned to
        provide what our customers need – complex software solutions to answer
        their requirements, delivered reliably on time, with excellent value for
        money. As well as our own staff, we also have access to a pool of
        software developers from our approved partners here in India
      </p>
      <img src={AboutUsImg} className="aboutUsImg" />

      <hr />
    </div>
  );
}

export default AboutUs;
