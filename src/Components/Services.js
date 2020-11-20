import React from 'react'
import './Services.css';
import code from '../img/Services/code 1.png'

import balls1 from '../img/Group.png'

class Services extends React.Component {
    render(){
    return (
        <div className='servicesComponent' style={{backgroundColor:"blue"}}>
            <h1 className="mainTitleServices">Oursac Services</h1>
            <img src={code} className='compCode' alt="Code 1"  />
            

            <h3 className="webDesigning">Web Designing</h3>
        </div>
    )
}
}

export default Services
