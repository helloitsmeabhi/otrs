import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/buses?from=${departureCity}&to=${arrivalCity}&date=${travelDate}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bus Booking System</h1>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Departure City"
          value={departureCity}
          onChange={(e) => setDepartureCity(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Arrival City"
          value={arrivalCity}
          onChange={(e) => setArrivalCity(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Search Buses
        </button>
      </form>
    </div>
  );
};

export default HomePage;