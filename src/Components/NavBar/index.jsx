import React, { useState } from 'react'
import './index.css'
import Logo from '../../Assets/Images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Button from '../Button/index';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { FaHamburger } from 'react-icons/fa';
 

function NavBar(props) {
  const {title} = props

  const [sidebarVisible, setSidebarVisible] = useState(false);

  function Bars (){
    setSidebarVisible(!sidebarVisible)
  }


  return (
    <>
      <nav>
        <div className="">
            <div className='sub-main'>
              <div className="title">
                <h2>{title}</h2>
                <p>Transform with FOCAS</p>
              </div>
              <div className="logo">
                <img src={Logo} alt=""  />
              </div>
              <div className="notifi">
                <div className="notifi_icon" onClick={Bars}>
                  {sidebarVisible ? <RxCross2 /> : <GiHamburgerMenu />}
                </div>
                <div className={`sideBar ${sidebarVisible ? 'visible' : 'hidden'}`}>     
                    <ul className='sideBar_list'>
                      <li><Link to="/customer-dashboard">Customer Dashboard</Link></li>  
                      <li><Link to="/">Dashboard</Link></li>  
                      <li><Link to="/list-final">List Final</Link></li>  
                      <li><Link to="/outbound-details">Outbound Details</Link></li>  
                      <li><Link to="/point-of-sale">Point of Sale</Link></li>  
                      <li><Link to="/purchase">Purchase</Link></li>  
                      <li><Link to="/sale">Sale</Link></li>  
                      <li><Link to="/salereport">Sale Report</Link></li>  
                      <li><Link to="/vendor">Vendor</Link></li>
                      <div className='sideBar_btn'>
                        <Link to="/customer-dashboard-login">
                          <Button iconPosition='after' name='Log In' padding='8px 12px' radius='6px' hovcolor='#fff' hovercolor='#2E96FF' >
                              <FaArrowRight />
                          </Button>
                        </Link>
                      </div>       
                    </ul>      
                </div>
              </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar