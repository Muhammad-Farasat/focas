import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { LineChart } from '@mui/x-charts/LineChart';
import './SaleReport.css'


function SaleReport() {

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 7777, 5555, 2222, 4651, 6798];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 3200, 6450, 4653, 3694, 5845];
const xLabels = [
  'Januray',
  'Febury',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augest',
  'September',
  'October',
  'November',
  'December',
];

  return (

    <>
        <NavBar title='Dashboard'/>
        <div className='sales_report_main'>
            <LineChart
            width={1200}
            height={500}
            series={[
                { data: pData },
                { data: uData },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
        </div>

    </>
  )
}

export default SaleReport