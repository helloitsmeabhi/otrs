import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BusListPage from './components/BusListPage';
import SeatSelectionPage from './components/SeatSelectionPage';
import BookingConfirmationPage from './components/BookingConfirmationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buses" element={<BusListPage />} />
          <Route path="/select-seats/:busId" element={<SeatSelectionPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;