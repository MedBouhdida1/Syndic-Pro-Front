
import './App.css';
import Home from './Components/HomeComponent/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBarComponent/NavBar';
import SideBar from './Components/SideBarComponent/SideBar';
import Resident from './Components/ResidentComponent/Resident';
import Login from './Components/LoginComponent/Login';
import { useState } from 'react';



function App() {
  const [loggedin,setLoggedin] = useState(true)
  return (

    <Router>
      <div>
        <div className="page-wrapper" id="main-wrapper" data-layout={loggedin?"vertical":"none"} data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
          {loggedin?<SideBar />:<></>}  
          <div className="body-wrapper">
           {loggedin?<NavBar />:<></>} 
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Resident" element={<Resident />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
