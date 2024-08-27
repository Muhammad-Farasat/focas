import './App.css'
import Vendor from './Pages/Vendor/index.jsx'
import Purchase from './Pages/Purchase/index.jsx'
import Sale from './Pages/Sale/index.jsx'
import SaleReport from './Pages/SaleReport/index.jsx'
import CustomerDashboard from './Pages/CustomerDashboard/index.jsx'
import CustomerDashboardLogin from './Pages/CustomerDashboardLogin/index.jsx'
import ListFinal from './Pages/ListFinal/index.jsx'
import OutboundDetails from './Pages/OutboundDetails/index.jsx'
import PointOfSale from './Pages/PointOfSale/index.jsx'
import Dashboard from './Pages/Dashboard/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/salereport" element={<SaleReport />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/customer-dashboard-login" element={<CustomerDashboardLogin />} />
        <Route path="/list-final" element={<ListFinal />} />
        <Route path="/outbound-details" element={<OutboundDetails />} />
        <Route path="/point-of-sale" element={<PointOfSale />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>

    


  )
}

export default App
