import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Pana from '../Images/pana.png';
import './CustomerDashboardLogin.css'

function CustomerDashboardLogin() {
  return (
    <div className='main'>
      <section className='left'>
          <img src={Pana} alt="" />
          <div className="text">
            <h1>Welcome back!</h1>
            <p>Discover what you need</p>
          </div>
          
      </section>
      <section className="right">
          <div className="text2">
            <h1>Welcome back!</h1>
            <p>Discover what you need</p>
          </div>
          <div className="form">
            <div className="top_form">
              <Input holder="you@example.com" type="email"/> 
              <Input holder="Password" type="password"/> 
              <a href="#">Forgot Password?</a>
            </div>
            <div className="btn">
              <Button name="Login"/>
            </div>
          </div>
      </section>
    </div>
  )
}

export default CustomerDashboardLogin