import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Table from '../../Components/DashboardTable/Table'
import ListTable from '../../Components/DashboardTable/ListTable'



function Sale() {
  return (
    <>

       <NavBar  title='Dashboard'/>
       <Table head='Sales' colGap='22rem' />
       <ListTable firstColumn='ID' secondColumn='Customer Name' thirdColumn='Total Sale' fourthColumn='Date' fivithColumn='Action' />

    </>
  )
}

export default Sale