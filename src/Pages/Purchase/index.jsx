import React from 'react'
import NavBar from '../../Components/NavBar/index.jsx'
import Table from '../../Components/TableHead/index.jsx'
import ListTable from '../../Components/Table/index.jsx'
import { FaPen, FaTrash } from 'react-icons/fa'
import Button from '../../Components/Button/index.jsx'


function Purchase() {

  const headers = ['ID', 'Vendor', 'Phone', 'Date', 'Action']
  const data = [
    ['001', 'Saleem', '222 555 666', '24 / 12 / 20', 
    <div key='1' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ],
    ['001', 'Saleem', '222 555 666', '24 / 12 / 20', 
    <div key='2' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ],
    ['001', 'Saleem', '222 555 666', '24 / 12 / 20', 
    <div key='3' style={{display: 'flex', gap: '8px'}}>
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
      <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
    </div>
    ],
  ]

  return (
    <>
        <NavBar title='Dashboard' />
        <Table head='Purchases' colGap='space-between' />
        <ListTable headers={headers} data={data} />
    </>
  )
}

export default Purchase