import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Table from '../../Components/DashboardTable/Table.jsx'
import ListTable from '../../Components/DashboardTable/ListTable.jsx'


function Purchase() {
  return (
    <>
        <NavBar title='Dashboard' />
        <Table head='Purchases' colGap='20rem' />
        <ListTable firstColumn='ID' secondColumn='Vendor' thirdColumn='Phone' fourthColumn='Date' fivithColumn='Action'/>
    </>
  )
}

export default Purchase