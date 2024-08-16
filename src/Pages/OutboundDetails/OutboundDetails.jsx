import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Table from '../../Components/DashboardTable/Table'
import ListTable from '../../Components/DashboardTable/ListTable'
import './OutboundDetails.css'

function OutboundDetails() {


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



    <Table colGap='18rem' head='Purchase Order' />
    <ListTable firstColumn='PO Date' 
     secondColumn='Price' thirdColumn='Approve' fourthColumn='Created On' fivithColumn='Action' />







    </>
  )
}

export default OutboundDetails