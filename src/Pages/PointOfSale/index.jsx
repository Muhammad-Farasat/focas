import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/index'
import './index.css'
import Cards from '../../Components/Cards/index'
import Shoe from '../../Assets/Images/Rectangle 258.png'
import samsung from '../../Assets/Images/samsung.png'
import book from '../../Assets/Images/book.png'
import pen from '../../Assets/Images/pen.png'
import Button from '../../Components/Button/index'
import { FaMinus, FaMinusCircle, FaPlusCircle, FaUser } from 'react-icons/fa'
import Modal from '../../Components/CheckoutModal/index'


function PointOfSale() {


  const [activeTab, setActiveTab] = useState('tab_1')

  const showTab = (tabId) => {
    setActiveTab(tabId)
  }

  const [openModal, setOpenModal] = useState(false);


  return (
    <>
    <NavBar title='Point Of Sale'  />


    <section className='' style={{marginTop: '22px'}}>
        <div className='point_of_sale_main'>
            <div className='pos_1'>
              <div>
                <ul className='tabs'>

                  <li><a href='#' id='crm-tab' className={`tab-button ${activeTab === 'tab_2' ? 'active' : ''}`} onClick={
                    (e) => {e.preventDefault();  
                    showTab('tab_2')}} >CRM</a></li>

                  <li><a href='#' id='product-tab' className={`tab-button ${activeTab === 'tab_1' ? 'active' : ''}`} onClick={(e) => 
                  {e.preventDefault();  showTab('tab_1')}} >Product</a></li>
                
                
                </ul>
              </div>

              <div className={`tab-content ${activeTab === 'tab_1' ? 'show' : 'hide'}`}  id='tab-content' >
                <div className='product-bar'>
                    <ul>
                      <li><a>All</a></li>
                      <li><a>Pens</a></li>
                      <li><a>Pencil</a></li>
                      <li><a>Books</a></li>
                      <li><a>Register</a></li>
                      <li><a>Register</a></li>
                      <li><a>Register</a></li>
                      <li><a>Register</a></li>
                      <li><a>Register</a></li>
                      <li><a>Register</a></li>
                    </ul>
                </div>

                <div className='cards'>
                  <Cards name='Nike Shoe' price='599' img={Shoe} />
                  <Cards name='Samsung S23' price='165,000' img={samsung} />
                  <Cards name='Book' price='599' img={book} />
                  <Cards name='Pens' price='99' img={pen} />
                </div>
              </div>
              
              <div className={`tab-content centering ${activeTab === 'tab_2' ? 'show' : 'hide'}`} id='tab-content' >

                <div className='top-tab'>
                  <div className='sub_tab'>
                    <FaUser />
                    <select>
                      <option>Murtaza Abbas</option>
                    </select>
                  </div>

                  <div className='circle_icon'>
                    <FaPlusCircle/>
                  </div>
                </div>

                <div className='royalty_points'>
                  
                  <div className='top'>
                      <div className='top_text' style={{}}>
                        <p><b>Murtaza Abbas</b></p>
                        <p><b>0332434455</b></p>
                      </div>
                      <div className='top_text_right' >
                        <p><b>Loyalty Points</b></p>
                        <h1>6500</h1>
                      </div>
                  </div>

                  <div className='bottom' style={{opacity: '0.5', border: '1.6px solid #111'}}>
                  </div>

                  <div className='royalty_points_bottom'>
                    <div className='bottom_left'>
                      <h3>Recent Activity</h3>
                      <div className='divider' style={{marginTop: '26px', width: '380px'}}></div>
                      <div className='divider' style={{marginTop: '26px', width: '380px'}}></div>
                      <div className='divider' style={{marginTop: '26px', width: '380px'}}></div>
                    </div>
                    <div className='bottom_right'>
                      <div className='square'>
                        <p><b>Notes</b></p>
                      </div>
                    </div>
                  </div>

                </div>


              </div>

            </div>
            <div className='pos_2'>

            {/* ------------------BILLS-------------- */}

              <div className='bills'>

                {/* -------------HEADING------------- */}

                <div className='top' style={{padding: '0 12px'}}>
                  <h1>Bills</h1>
                  <p>Clear All</p>
                </div>

                {/* ---------BARCODE------------ */}

                <div className='barcode'>
                  <div className='sub-barcode'>
                    <h3>Barcode</h3>
                    <div style={{width: '180px', backgroundColor: '#eaeaea', height: '30px', borderRadius: '12px'}}></div>
                  </div>
                </div>


                {/* --------------PRODUCTS ITEMS----------------  */}


                <div className='items'>

                  <div className='items_1'>

                    <div className='img-name'>
                      <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                      <div style={{lineHeight: '0px'}}>
                        <h3>Nike Shoe</h3>
                        <p>Rs.599</p>
                      </div>
                    </div>

                    <div className='counter'>
                        <FaMinusCircle/>
                        <p>2</p>
                        <FaPlusCircle/>
                    </div>


                    <div className='addPrice'>
                      <p>320</p>
                    </div>

                  </div>
                  
                  <div className='items_1'>

                    <div className='img-name'>
                      <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                      <div style={{lineHeight: '0px'}}>
                        <h3>Nike Shoe</h3>
                        <p>Rs.599</p>
                      </div>
                    </div>

                    <div className='counter'>
                        <FaMinusCircle/>
                        <p>2</p>
                        <FaPlusCircle/>
                    </div>
    

                    <div className='addPrice'>
                      <p>320</p>
                    </div>

                  </div>
                  
                  <div className='items_1'>

                    <div className='img-name'>
                      <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                      <div style={{lineHeight: '0px'}}>
                        <h3>Nike Shoe</h3>
                        <p>Rs.599</p>
                      </div>
                    </div>

                    <div className='counter'>
                        <FaMinusCircle/>
                        <p>2</p>
                        <FaPlusCircle/>
                    </div>
    

                    <div className='addPrice'>
                      <p>320</p>
                    </div>

                  </div>
                  
                  <div className='items_1'>

                    <div className='img-name'>
                      <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                      <div style={{lineHeight: '0px'}}>
                        <h3>Nike Shoe</h3>
                        <p>Rs.599</p>
                      </div>
                    </div>

                    <div className='counter'>
                        <FaMinusCircle/>
                        <p>2</p>
                        <FaPlusCircle/>
                    </div>
    

                    <div className='addPrice'>
                      <p>320</p>
                    </div>

                  </div>
                  
                  <div className='items_1'>

                    <div className='img-name'>
                      <img src={Shoe} style={{width: '26%', marginRight: '6px'}} />
                      <div style={{lineHeight: '0px'}}>
                        <h3>Nike Shoe</h3>
                        <p>Rs.599</p>
                      </div>
                    </div>

                    <div className='counter'>
                        <FaMinusCircle/>
                        <p>2</p>
                        <FaPlusCircle/>
                    </div>
    

                    <div className='addPrice'>
                      <p>320</p>
                    </div>

                  </div>
                
                  <div className='main-amount'>
                    <div className='amount'>

                      <div className='upper'>
                        <p>Sub Total</p>
                        <p>67777</p>
                      </div>
                      
                      <div className='upper'>
                        <p>Discount PKR %</p>
                        <p>100</p>
                      </div>
                    
                      <div className='divider'></div>

                      <div className='upper'>
                        <p>Grand Total</p>
                        <p>67687</p>
                      </div>

                    </div>
                    <div style={{marginTop: '8px'}}>
                      <Button name='Proceed to Checkout' onClick={() => (setOpenModal(true))} width='280px' padding='12px 20px' radius='10px' fontsize='18px' backcolor='#e4e4e4' />
                    </div>
                  </div>
                    {openModal && <Modal onClose={() => setOpenModal(false)} />}

                </div>


              </div>
           
           
            </div>
        </div>
    </section>



    </>
  )
}

export default PointOfSale