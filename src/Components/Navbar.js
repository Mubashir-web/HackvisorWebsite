import React from 'react'
import './Navbar.css';
import logo from '../img/hackvisor png logo 2.png'
import bg from '../img/Vector 7.png'
import laptopimg from '../img/Group-1.png'
import lapscreen from '../img/Group-2.png'
import balls1 from '../img/Group.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Navbar() {
    
    const compName='HackVisor'
    
    return (
      <>
        <div className="landingPage"  style={{
            backgroundColor: ' linear-gradient(293.89deg, #CA5F20 -3%, #E7A54D 65.26%, #FAE6A9 102.69%);',
            width: '100px',
            height: '100px',position: 'absolute;',
            width: '1440px;',
            height: '807px;',
            left:'0px;',
            top: '0px;',
            
            
          }}>
            <h1 className="logoHeader">{compName}</h1>
            <img src={logo} className='logo1' alt="img " width='100' />
            <img src={bg} className='bgVector' alt="img"  />
            <img src={laptopimg} className='laptopimg bluelap' alt="img "  />
            <img src={lapscreen} className='lapscreen bluescreen' alt="img "  />
            


            <Router>
            
            <Link to ='/' className='navLinks homeLI'>Home</Link>
            <Link to ='/' className='navLinks aboutLI'>About Us</Link>
            <Link to ='/' className='navLinks servicesLI'>Services</Link>
            <Link to ='/' className='navLinks testimonialsLI'>Testimonials</Link>
            <Link to ='/' className='navLinks protfolioLI'>Portfolio</Link>
            <Link to ='/' className='navLinks ourTeamLI'>Our Team</Link>
            <Link to ='/' className='navLinks contactLI'>Contact Us</Link>
            
            </Router>
            
            
        <h1 className="mainTitle">{compName}</h1>
        <h4 className="compWorks">On-Line & Off-Line Softwares</h4>
          
            
        </div>
        </>
    )
}

export default Navbar
