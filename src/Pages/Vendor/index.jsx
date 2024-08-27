import React from 'react'
import NavBar from '../../Components/NavBar/index.jsx'
import './index.css'
import Table from '../../Components/TableHead/index.jsx'
import ListTable from '../../Components/Table/index.jsx'
import { FaPen, FaTrash } from 'react-icons/fa'
import Button from '../../Components/Button/index.jsx'

function Vendor() {

  const headers = ['S.no', 'Name', 'Phone', 'Created On', 'Action']
  const data = [
    ['01', 'Khan', '111 555 000', '12 / 01 / 21', 
      <div key='1' style={{display: 'flex', gap: '8px'}}>
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
      </div>
    ],
    ['02', 'Khan', '111 555 000', '12 / 01 / 21', 
      <div key='2' style={{display: 'flex', gap: '8px'}}>
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
      </div>
    ],
    ['03', 'Khan', '111 555 000', '12 / 01 / 21', 
      <div key='3' style={{display: 'flex', gap: '8px'}}>
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
      </div>
    ],
  ]

  return (
    <>
        <NavBar  title='Dashboard' />
        <Table head='Vendor List' colGap='20rem' />
        <ListTable headers={headers} data={data} />
    </>
  )
}

export default Vendor