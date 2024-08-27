import React, { useRef } from 'react'
import styles from './index.module.css'
import { TbSum } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import Input from '../Input/index'
import Button from '../Button/index'

function CheckoutModal({onClose}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }



  return (
    <>
        <div ref={modalRef} onClick={closeModal} className={styles.modaltwo}>
            <div className={styles.sub_modaltwo}>
                <div className={styles.addcustomer}>
                    <p><b>Invoice</b></p>
                </div>
                <div className={styles.detailsofcustomer}>
                    <div className={styles.subtotal}>
                        <div className={styles.flex}>     
                            <TbSum />                       
                            <p>Sub Total</p>
                        </div>
                        <p className={styles.uppertext}>6500</p>
                    </div>
                    <div className={styles.payment}>
                        <div className={styles.flex}>     
                            <GiReceiveMoney />                      
                            <p>Sub Total</p>
                        </div>
                        <p className={styles.uppertext}>7000</p>
                    </div>
                    <div className={styles.change}>
                        <div className={styles.flex}>     
                            <MdCurrencyExchange />                   
                            <p>Sub Total</p>
                        </div>
                        <p className={styles.uppertext}>500</p>
                    </div>
                </div>
                <div className={styles.shortcustomer}>
                    <div className={styles.logo_1}>
                        <FaMoneyBillAlt />
                    </div>                    
                    <div className={styles.logo_1}>
                        <CiCreditCard1 />
                    </div>                    
                    <div className={styles.logo_1}>
                        <CiCreditCard1 />
                    </div>                    
                </div>
                <div className={styles.buttons}>
                    <Button name='Print Bill' width='180px' fontsize='18px' hovercolor='#45A8A8' padding='8px 12px' backcolor='#96DEDA' radius='6px'   >                        
                    </Button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default CheckoutModal