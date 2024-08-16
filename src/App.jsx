import './App.css'
import Vendor from './Pages/Vendor/Vendor.jsx'
import Purchase from './Pages/Purchase/Purchase.jsx'
import Sale from './Pages/Sale/Sale.jsx'
import SaleReport from './Pages/SaleReport/SaleReport.jsx'
import CustomerDashboard from './Pages/CustomerDashboard/CustomerDashboard.jsx'
import CustomerDashboardLogin from './Pages/CustomerDashboardLogin/CustomerDashboardLogin.jsx'
import ListFinal from './Pages/ListFinal/ListFinal.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OutboundDetails from './Pages/OutboundDetails/OutboundDetails.jsx'
import PointOfSale from './Pages/PointOfSale/PointOfSale.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'

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
