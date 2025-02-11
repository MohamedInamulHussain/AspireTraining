import { AboutUs } from './AboutUs/AboutUs'
import './App.css'
import { DonatorPage } from './DonatorPage/DonatorPage'
import { FoodRequest } from './FoodRequestPage/FoodRequest'
import { Home } from './Home/Home'
import { Nav } from './Nav/Nav'
import { Volunteer } from './Volunteer/Volunteer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Testing } from './Testing'
import { Login } from './LoginPage/Login'
import { VolunteerLogin } from './VolunteerLogin/VolunteerLogin'
function App() {
 
  return (
    <>
    
    {/* <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DonatorPage" element={<DonatorPage/>}/>
        <Route path="/Volunteer" element={<Volunteer/>}/>
        <Route path="/Food Request" element={<FoodRequest/>}/>
        <Route path="/About Us" element={<AboutUs/>}/>
      </Routes>
    </Router> */}
      
      {/* <Testing/> */}
      <Login/>
    </>
  )
}

export default App
