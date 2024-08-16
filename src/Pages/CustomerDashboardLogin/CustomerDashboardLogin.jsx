import React from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import Pana from '../../Images/pana.png';
import style from './CustomerDashboardLogin.module.css'
import { FaEnvelope, FaKey, FaLock } from 'react-icons/fa';

function CustomerDashboardLogin() {
  return (
    <div className={style.main}>
      <section className={style.left}>
          <img src={Pana} alt="" />
          <div className={style.heading_login}>
            <h1>Welcome back!</h1>
            <p>Discover what you need</p>
          </div>
          
      </section>
      <section className={style.right}>
        <div className={style.right_1}>
          <div className={style.text2}>
            <h1>Welcome back!</h1>
            <p>Discover what you need</p>
          </div>
          <div className={style.form}>
            <div className={style.top_form}>
            <Input
                    height=''
                    padding='16px 6px'
                    padding1='0 12px'
                    bgColor='#e2e2e2'
                    width='420px' 
                    borderRadius='12px'
                    icon={<FaEnvelope />}
                    className={style.input}
                    iconPosition='before'
                    holder="you@gmail.com"
                    type="email"
                />
             <Input
                    height=''
                    padding='16px 4px'
                    padding1='0 12px'
                    bgColor='#e2e2e2'
                    width='420px'
                    borderRadius='12px'     
                    icon={<FaLock />}
                    className='input'
                    iconPosition='before'
                    holder="password"
                    type="password"
                />
              <div className={style.forgot_pass}>                
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <div className={style.btn}>
              <Button name="Login" width='260px' backcolor='#FDDA5C' className={style.login_btn} padding='16px 0' radius='12px' fontsize='18px'  />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerDashboardLogin