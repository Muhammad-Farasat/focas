import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Table from '../../Components/DashboardTable/Table';
import ListTable from '../../Components/DashboardTable/ListTable';
// import './ListFinal.css'



function ListFinal() {

  return (
    <>
        <NavBar title='Product List' />
        <Table colGap='25rem'/>
        <ListTable 
          firstColumn='ID' 
          secondColumn='Picture' 
          thirdColumn='Name' 
          fourthColumn='Quantity' 
          fivithColumn='Sale Price'
          sixthColumn='Barcode'
          seventhColumn='Action'
          />
    </>
  )
}

export default ListFinal