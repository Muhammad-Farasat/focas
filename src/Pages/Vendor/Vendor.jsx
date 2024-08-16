import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import './Vendor.css'
import Table from '../../Components/DashboardTable/Table.jsx'
import ListTable from '../../Components/DashboardTable/ListTable.jsx'


function Vendor() {
  return (
    <>
        <NavBar  title='Dashboard' />
        <Table head='Vendor List' colGap='20rem' />
        <ListTable firstColumn='S.no' secondColumn='Name' thirdColumn='Phone' fourthColumn='Created On' fivithColumn='Action' />
    </>
  )
}

export default Vendor