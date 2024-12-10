import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import PageHomePage from './app/routes/homepage/PageHome';
import TripDetailsPage from './app/routes/trip-details/DetailsTrip';
import UserManagePage from './app/routes/manage-user/UserManage';
import EarnMonthPage from './app/routes/monthly-earning/EarningMonth';
function App ()  {
  return (
    <Router>
      <div id="root">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<PageHomePage />} />
          <Route path="/manage-user" element={<UserManagePage />} />
          <Route path="/trips/" element={<TripDetailsPage />} />
          <Route path="/trips/:username" element={<TripDetailsPage />} />
          <Route path="/monthly-earning" element={<EarnMonthPage/>} />
        </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
