import React from 'react'
import NavBar from '../../Components/NavBar/index'
import Table from '../../Components/TableHead/index'
import ListTable from '../../Components/Table/index'
import Button from '../../Components/Button/index'
import './index.css'
import { FaEdit, FaPen, FaTrash } from 'react-icons/fa'

function OutboundDetails() {

  const headers = ['PO Date', 'Price', 'Approve', 'Created On', 'Action']
  const data = [
    ['22/01/24', '0.99', 'no', '01/05/21', 
    <div key='1' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ],
    ['22/01/24', '0.99', 'no', '01/05/21', 
    <div key='2' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ],
    ['22/01/24', '0.99', 'no', '01/05/21', 
    <div key='3' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ],
  ]

  return (
    <>

    <NavBar  title='Outbound Details' />


    <div className='outbound_details_css' >
        <p>Invoice No:&nbsp;&nbsp; ODR-5</p>
        <p>Status:&nbsp;&nbsp; paid</p>
        <p>Payment Mode:&nbsp;&nbsp; Cash</p>
        <p>Sub Total Amount:&nbsp;&nbsp; 6503</p>
        <p>Discount:&nbsp;&nbsp; 0</p>
    </div>



    <Table colGap='space-between' head='Purchase Order' />
    <ListTable headers={headers} data={data} />







    </>
  )
}

export default OutboundDetails