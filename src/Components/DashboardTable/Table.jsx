import React from 'react'
import styles from './Table.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { FaPlus, FaSearch } from "react-icons/fa";



function Table(props) {
    const {head, colGap, perform} = props
  return (
    <>
        <div className={styles.main_1}>
            <div className={styles.sub_main_1} style={{columnGap: colGap}}>
                <div className={styles.heading}>
                    <h2>{head}</h2>
                </div>
                <div className={styles.search}>
                    <Input
                        height=''
                        padding='16px 4px'
                        padding1='0 16px'
                        width='280px'
                        icon={<FaSearch />}
                        className={styles.input}
                        iconPosition='before'
                        holder="Search..."
                        type="text"
                        borderRadius='16px'
                    />
                </div>
                <div className={styles.btn}>
                    <Button name='Add New' onClick={perform} className={styles.table_btn} radius='14px' padding='16px 20px' fontsize='16px' backcolor='white' iconPosition='before'>
                        <FaPlus />
                    </Button>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Table