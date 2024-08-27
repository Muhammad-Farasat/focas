import React, { useRef } from 'react'
import styles from './index.module.css'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/index'

function Modal({onClose}) {

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }


  return (
    <>
        <div ref={modalRef} onClick={closeModal} className={styles.modal}>
            <div className={styles.sub_modal}>
                <div className={styles.addcustomer}>
                    <p><b>Add Customer Details</b></p>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.thing}>
                        <p>Customer Name</p>
                        <Input 
                            bgColor='#eaeaea' 
                            width='180px' 
                            padding='6px 8px'
                            height='30px'
                            borderRadius='8px'
                        />
                    </div>
                    <div className={styles.thing}>
                        <p>Phone No</p>
                        <Input 
                            bgColor='#eaeaea' 
                            width='180px' 
                            padding='6px 8px'
                            height='30px'
                            borderRadius='8px'
                        />
                    </div>
                    <div className={styles.thing}>
                        <p>Address</p>
                        <Input 
                            bgColor='#eaeaea' 
                            width='180px' 
                            padding='6px 8px'
                            height='40px'
                            borderRadius='8px'
                        />
                    </div>
                    <div className={styles.thing}>
                        <p>Notes</p>
                        <Input 
                            bgColor='#eaeaea' 
                            width='180px' 
                            padding='6px 8px'
                            height='60px'
                            borderRadius='8px'
                        />
                    </div>




                </div>
                <div className={styles.buttons}>
                    <Button name='Save' padding='10px 6px' backcolor='#50C9C3' width='70px' radius='8px' ></Button>
                    <Button name='Cancel' padding='10px 6px' width='70px' radius='8px'  onClick={onClose}  ></Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal