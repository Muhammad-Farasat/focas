import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/index';
import Table from '../../Components/TableHead/index';
import ListTable from '../../Components/Table/index';
import Modal from '../../Components/Modal/index'
import { FaEdit, FaTrash } from 'react-icons/fa';
import Button from '../../Components/Button/index'



function ListFinal() {

  const [openModal, setOpenModal] = useState(false)
  const headers = ['ID','Picture','Name','Quantity','Sale Price','Barcode','Action' ]
  const data = [
    [ '0000' , 'image', 'farasat', '6', '0088', '111555666',
      <div key='1' style={{display: 'flex', gap: '8px'}}>
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaEdit /></Button> 
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
      </div>
    ],
    [ '0000' , 'image', 'farasat', '6', '0088', '111555666',
    <div key='2' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaEdit /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ],
    [ '0000' , 'image', 'farasat', '6', '0088', '111555666',
    <div key='3' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaEdit /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ]
  ]

  return (
    <>
        <NavBar title='Product List' />
        <Table colGap='25rem' perform={() => (setOpenModal(true))} />
        <ListTable headers = {headers} data={data}       />

        {openModal && <Modal onClose={() => setOpenModal(false)} />}

    </>
  )
}

export default ListFinal