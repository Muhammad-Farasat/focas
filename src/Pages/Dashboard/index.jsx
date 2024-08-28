import React from 'react';
import './index.css';
import NavBar from '../../Components/NavBar/index';
import Button from '../../Components/Button/index';
import { MdInsertChart } from "react-icons/md";
import { BiExport, BiSolidCoupon } from 'react-icons/bi';
import { FaFile, FaMinusCircle, FaPlusCircle, FaTag, FaUser } from 'react-icons/fa';
import { BarChart } from '@mui/x-charts/BarChart';  
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { LinePlot, MarkPlot, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Shoe from '../../Assets/Images/Rectangle 258.png'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { FaBagShopping } from 'react-icons/fa6';
// import Button from '../../Components/Button/Button';
// import ListTable from '../../Components/DashboardTable/ListTable'

const data = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
];

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const pData1 = [8, 7, 7.6, 5, 7.5, 6.5, 9];
const pData2 = [4, 5, 3, 3.4, 3.3, 3.8, 6];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const xData = [1, 2, 3, 2, 1, 3, 2];
const yData = [1, 2, 3, 2, 1, 3, 2]

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));



function Dashboard() {
  return (
    <>
      <NavBar title='Dashboard' />
      {/* <FaPlusCircle/>  */}

      <section className="upper-dashboard"> 
        <div className='sub_upper_dashboard'>

          <div className='first_upper'>

            <div className='container_1'>
              <div className='dashboard_upper_left'>
                <h3>Today's Sales</h3>
                <p>Sales Summary</p>
              </div>

              <Button 
                name='Export' 
                padding='8px !important' 
                radius='6px' 
                backcolor='#fff' 
                border='1px solid #e4e4e4'  
                iconPosition='before'
              >
                <BiExport />
              </Button>
            </div>

            <div className='main-square'>

              <div className='square red'>
                <div className='square_icon'>
                  <MdInsertChart />
                </div>
                <div className='square_text'>
                  <h3>$1k</h3>
                  <p className='ts'>Total Sales</p>
                  <p className='sm'>+8% from yesterday</p>
                </div>
              </div>
              <div className='square orange'>
                <div className='square_icon_orange'>
                  <FaFile />
                </div>
                <div className='square_text'>
                  <h3>300</h3>
                  <p className='ts'>Total Orders</p>
                  <p className='sm'>+5% from yesterday</p>
                </div>
              </div>
              <div className='square green'>
                <div className='square_icon_green'>
                  <FaTag />
                </div>
                <div className='square_text'>
                  <h3>5</h3>
                  <p className='ts'>Total Profit</p>
                  <p className='sm'>+1.2% from yesterday</p>
                </div>
              </div>
              <div className='square purple'>
                <div className='square_icon_purple'>
                  <FaUser />
                </div>
                <div className='square_text'>
                  <h3>8</h3>
                  <p className='ts'>Total Customers</p>
                  <p className='sm'>+0.5% from yesterday</p>
                </div>
              </div>

            </div>

          </div>

          <div className='second_upper'>
            <h3>Total Revenue</h3>
            <section>
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }]}
                series={[{ data: [12, 17, 5, 16, 12, 17, 21] }, { data: [15, 13, 22, 8, 11, 16, 12] }]}
                width={680}
                height={250}
                grid={{ horizontal: true }}
              />
            </section>
          </div>

        </div>
      </section>

      <section className='middle-dashboard'>
        <div className='sub-middle-dashboard'>
          <div className='sub_middle_dashboard_main'>
            <div className='middle_dashboard_left boxes'>

              <div className='boxes_main responsive-middle' style={{margin: '0 2px',}}>

                <div className=''>
                  <div className='middle_volume'>
                    <h3>Volume vs Service level</h3>

                    <section>
                      <PieChart series={[{ data, innerRadius: 60 }]} {...size}>
                        <PieCenterLabel>Gender</PieCenterLabel>
                      </PieChart>
                    </section>


                    <div className='divider' style={{ marginTop: '8px', opacity: '0.4', width: '100%' }}></div>
                    <div className='sub_middle_volume' style={{marginBottom: '8px'}}>

                      <div style={{lineHeight: '6px'}}>
                        <div className='middle_volume_lower'>
                          <div style={{height: '12px', width: '12px', backgroundColor: '#0095FF', borderRadius: '999px'}}></div>
                            <p style={{color: '#96A5B8'}}>Volume</p>                          
                        </div>
                        <p className='num'>1,135</p>
                      </div>


                      <div className='vertical_divider'></div>

                      <div style={{lineHeight: '6px'}}>
                        <div className='middle_volume_lower'>
                          <div style={{height: '12px', width: '12px', backgroundColor: '#00E096', borderRadius: '999px'}}></div>
                            <p style={{color: '#96A5B8'}}>Service</p>                          
                        </div>
                        <p className='num'>635</p>
                      </div>


                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='middle_satisfaction'>
                    <h3 style={{padding: '0 12px'}}>Customer Satisfaction</h3>

                    <section>
                      <ChartContainer
                        width={320}
                        height={190}
                        series={[
                          { type: 'line', data: pData1, name: 'Series 1' },
                          { type: 'line', data: pData2, name: 'Series 2' },
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                        sx={{
                          [`& .${lineElementClasses.root}`]: {
                            strokeWidth: 2,
                          },
                          [`& .${markElementClasses.root}`]: {
                            scale: '0.7',
                            fill: '#fff',
                            strokeWidth: 2,
                          },
                        }}
                        disableAxisListener
                      >
                        <LinePlot />
                        <MarkPlot />
                      </ChartContainer>
                    </section>
                      
                        <div className='divider' style={{ marginTop: '8px', opacity: '0.4', width: '100%' }}></div>
                        <div className='sub_middle_volume' style={{marginBottom: '8px'}}>

                          <div style={{lineHeight: '6px'}}>
                            <div className='middle_volume_lower'>
                            <div style={{height: '2.2px', width: '32px', backgroundColor: '#0095ff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '99px'}}>
                              <div style={{height: '10px', width: '10px', backgroundColor: '#0095ff', borderRadius: '999px', zIndex: '999'}}></div>
                              </div>
                                <p style={{color: '#96A5B8'}}>Last Month</p>                          
                            </div>
                            <p className='num'>$3,004</p>
                          </div>


                          <div className='vertical_divider'></div>

                          <div style={{lineHeight: '6px'}}>
                            <div className='middle_volume_lower'>
                              <div style={{height: '2.2px', width: '32px', backgroundColor: '#00E096', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '99px'}}>
                              <div style={{height: '10px', width: '10px', backgroundColor: '#00E096', borderRadius: '999px', zIndex: '999'}}></div>
                              </div>
                              
                                <p style={{color: '#96A5B8'}}>This Month</p>                          
                            </div>
                            <p className='num'>$4,504</p>
                          </div>


                        </div>
                      

                  </div>
                </div>
                <div className='' >
                  <div className='middle_target'>
                    <h3 style={{padding: '0 12px', marginBottom: '0'}}>Target vs Reality</h3>
                    
                    <section>
                      <BarChart
                        series={[
                          { data: xData },
                          { data: yData }
                          
                        ]}
                        xAxis={[{ scaleType: 'band', 
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'] }]}
                        height={180}
                        width={320}
                        leftAxis={null}
                      />
                    </section>

                    <div>

                      <div className='sub_middle_target_1'>
                        <div className='shopping_icon'>
                          <FaBagShopping style={{color: '#02B2AF'}} />
                        </div>
                        <div style={{lineHeight: '0'}}>
                          <h4>Reality Sales</h4>
                          <p style={{fontSize: '12px'}}>Global</p>
                        </div>
                        <div style={{color: '#02B2AF'}}>
                          <p>8.823</p>
                        </div>
                      </div>

                      <div className='sub_middle_target_1'>
                        <div className='shopping_icon_2'>
                          <BiSolidCoupon style={{color: '#2E96FF'}} />
                        </div>
                        <div style={{lineHeight: '0'}}>
                          <h4>Target Sales</h4>
                          <p style={{fontSize: '12px'}}>Commercial</p>
                        </div>
                        <div style={{color: '#2E96FF'}}>
                          <p>12.122</p>
                        </div>
                      </div>


                    </div>




                  </div>
                </div>

              </div>

              <div className='boxes_main_1 responsive-middle' style={{margin: '14px 2px'}}>
                <div className=''>
                  <div className='middle_top_products'>
                    <h3>Top Products</h3>
                      <table className='middle_table'>
                        <tbody>

                          <tr className='middle_table_head'>
                            <td>#</td>
                            <td>Name</td>
                            <td>Popularity</td>
                            <td>Sales</td>
                          </tr>

                          <tr>
                            <td>01</td>
                            <td>Home Decor Range</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={80} />
                            </td>
                            <td>
                              <Button 
                                name='45%' width='52px' padding='4px' 
                                border='1px solid #0095FF' backcolor='#F0F9FF' radius='8px' >
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>02</td>
                            <td>Disney Princess Pink Bag 18</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={46} />
                            </td>
                            <td>
                              <Button 
                                name='29%' width='52px' padding='4px' 
                                border='1px solid #00E58F' backcolor='#F0FDF4' radius='8px' >
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>03</td>
                            <td>Bathroom Essentials</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={18} />
                            </td>
                            <td>
                              <Button 
                                name='18%' width='52px' padding='4px' 
                                border='1px solid #884DFF' backcolor='#F0FDF4' radius='8px' >
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>04</td>
                            <td>Apple Smartwatches</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={25} />
                            </td>
                            <td>
                              <Button 
                                name='25%' width='52px' padding='4px' 
                                border='1px solid #FF8900' backcolor='#F0FDF4' radius='8px' >
                              </Button>
                            </td>
                          </tr>


                        </tbody>
                      </table>
                  </div>
                </div>
                <div className=''>
                  <div className='middle_low_stock'>
                    <h3>Low Stock Items</h3>
                    <table className='middle_table'>
                        <tbody>

                          <tr className='middle_table_head'>
                            <td>#</td>
                            <td>Name</td>
                            <td>Popularity</td>
                            <td>Sales</td>
                          </tr>

                          <tr>
                            <td>01</td>
                            <td>Home Decor Range</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={80} />
                            </td>
                            <td>
                              <Button 
                                name='45%' width='52px' padding='4px' 
                                border='1px solid #0095FF' backcolor='#F0F9FF' radius='8px' >
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>02</td>
                            <td>Disney Princess Pink Bag 18</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={46} />
                            </td>
                            <td>
                              <Button 
                                name='29%' width='52px' padding='4px' 
                                border='1px solid #00E58F' backcolor='#F0FDF4' radius='8px' >
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>03</td>
                            <td>Bathroom Essentials</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={18} />
                            </td>
                            <td>
                              <Button 
                                name='18%' width='52px' padding='4px' 
                                border='1px solid #884DFF' backcolor='#F0FDF4' radius='8px' >
                              </Button>
                            </td>
                          </tr>

                          <tr>
                            <td>04</td>
                            <td>Apple Smartwatches</td>
                            <td>
                              <BorderLinearProgress variant="determinate" value={25} />
                            </td>
                            <td>
                              <Button 
                                name='25%' width='52px' padding='4px' 
                                border='1px solid #FF8900' backcolor='#F0FDF4' radius='8px' >
                              </Button>
                            </td>
                          </tr>


                        </tbody>
                    </table>
                  </div>
                </div>
              </div>






            </div>
            <div className='middle_dashboard_right'>
              <div className="recent_purchase">
                <h3 className='recent'>Recent Purchases</h3>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>Just Now</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>Just Now</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>6 hour ago</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>8 mint ago</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>1 hour ago</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>3 mint ago</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>5 mints ago</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

                <div className='items_1'>

                  <div className='img-name'>
                    <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                    <div style={{lineHeight: '0px'}}>
                      <h3>Nike Shoe</h3>
                      <p style={{fontSize: '12px'}}>Just now</p>
                    </div>
                  </div>

                  
                  <div className='flex'>
                    <p className='num'>Rs 320</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
