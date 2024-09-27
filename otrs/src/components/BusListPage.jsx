import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BusListPage = () => {
  const [buses, setBuses] = useState([]);
  const [filters, setFilters] = useState({
    seatType: [],
    isAC: null,
    departureSlot: []
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch buses based on search params and filters
    const searchParams = new URLSearchParams(location.search);
    const fetchBuses = async () => {
      const response = await fetch(`/api/buses?${searchParams.toString()}&${new URLSearchParams(filters).toString()}`);
      const data = await response.json();
      setBuses(data.buses);
    };
    fetchBuses();
  }, [location.search, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleBookNow = (busId) => {
    navigate(`/select-seats/${busId}`);
  };

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-1/4 pr-4">
        {/* Filters */}
        <h2 className="text-xl font-bold mb-2">Filters</h2>
        {/* Add filter inputs here */}
      </div>
      <div className="w-3/4">
        <h2 className="text-xl font-bold mb-4">Available Buses</h2>
        {buses.map(bus => (
          <div key={bus.id} className="border p-4 mb-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{bus.name}</h3>
              <p>Departure: {bus.stops[0].departureTime}</p>
              <p>Arrival: {bus.stops[bus.stops.length - 1].arrivalTime}</p>
              <p>Available Seats: {bus.availableSeats}</p>
              <p>Price: ₹{bus.price}</p>
              <p>{bus.isAC ? 'AC' : 'Non-AC'}</p>
              <p>Type: {bus.seatTypes.join(', ')}</p>
            </div>
            <button
              onClick={() => handleBookNow(bus.id)}
              className="bg-green-500 text-white p-2 rounded"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusListPage;
