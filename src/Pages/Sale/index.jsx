import React from 'react'
import NavBar from '../../Components/NavBar/index'
import Table from '../../Components/TableHead/index'
import ListTable from '../../Components/Table/index'
import { FaPen, FaTrash } from 'react-icons/fa'
import Button from '../../Components/Button/index'



function Sale() {

  const headers = ['ID','Customer Name', 'Total Sale', 'Date', 'Action']
  const data = [
    ['001', 'farasat', '85,600', '01 / 11 / 09', 
      <div key='1' style={{display: 'flex', gap: '8px'}}>
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
      </div>
    ],
    ['001', 'farasat', '85,600', '01 / 11 / 09', 
      <div key='2' style={{display: 'flex', gap: '8px'}}>
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
      </div>
    ],
    ['001', 'farasat', '85,600', '01 / 11 / 09', 
      <div key='3' style={{display: 'flex', gap: '8px'}}>
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaPen /></Button> 
        <Button iconPosition='before' radius='4px' padding='8px 6px' fontsize='16px' ><FaTrash /></Button> 
      </div>
    ],
  ]

  return (
    <>

       <NavBar  title='Dashboard'/>
       <Table head='Sales' colGap='space-between' />
       <ListTable headers={headers} data={data}  />

    </>
  )
}

export default Sale