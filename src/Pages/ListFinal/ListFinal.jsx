import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Table from '../../Components/DashboardTable/Table';
import ListTable from '../../Components/DashboardTable/ListTable';
import Modal from '../../Components/Modal/Modal'
// import './ListFinal.css'



function ListFinal() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
        <NavBar title='Product List' />
        <Table colGap='25rem' perform={() => (setOpenModal(true))} />
        <ListTable 
          firstColumn='ID' 
          secondColumn='Picture' 
          thirdColumn='Name' 
          fourthColumn='Quantity' 
          fivithColumn='Sale Price'
          sixthColumn='Barcode'
          seventhColumn='Action'
        />

        {openModal && <Modal onClose={() => setOpenModal(false)} />}

    </>
  )
}

export default ListFinal