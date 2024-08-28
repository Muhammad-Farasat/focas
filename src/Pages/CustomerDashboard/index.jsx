import React from "react";
import "./index.css";
import Button from "../../Components/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import signature from "../../Assets/Images/signature.png"



function CustomerDashboard() {
  return (
    <div className="customer_main">





      <div className="left_1">
        <div className="welcome">
          <div className="heading">
            <h1>Welcome!</h1>
            <p>Discover what you</p>
          </div>
          <div className="btn">
            <Button
              color="#FDDA5C"
              backcolor="#111"
              hovercolor="#222"
              name="Redeem Now"
              width="320px"
              fontsize="34px"
              radius='22px'
              padding='12px 0'
            />
          </div>
        </div>
        <div className="activity_cards">
          <div className="card_1">
            <h2>Accounts Summary</h2>
            <p>256k</p>
          </div>
          <div className="card_1">
            <h2>Loyalty Points</h2>
            <p>256k</p>
          </div>
        </div>
        <div className="activities">
          <h2>Activity / Recent Transactions</h2>
        </div>
      </div>







      <div className="right_one">
        
        
        <div className="top">
          <h2>My Card</h2>
          <FontAwesomeIcon icon={faEllipsis} />

        </div>

        <div className='customer_dashboard_middle'>
          <div className="customer_card">
            <div className="customer_card_img">
              <img src={signature} alt="" />
            </div>
            <div className="customer_card_text">
              <p>Murtaza Abbas</p>
              <p>XXXX-XXXX-XXXX-1234 </p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <p>xxx-xxxx-xxxx-1234</p>
        </div>



      </div>





    </div>
  );
}

export default CustomerDashboard;
