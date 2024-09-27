import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SeatSelectionPage = () => {
  const [busDetails, setBusDetails] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const { busId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusDetails = async () => {
      const response = await fetch(`/api/buses/${busId}`);
      const data = await response.json();
      setBusDetails(data);
    };
    fetchBusDetails();
  }, [busId]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats(prev => 
      prev.includes(seatNumber) 
        ? prev.filter(seat => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handlePassengerDetailsChange = (index, field, value) => {
    setPassengerDetails(prev => {
      const newDetails = [...prev];
      newDetails[index] = { ...newDetails[index], [field]: value };
      return newDetails;
    });
  };

  const handleBooking = async () => {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        busId,
        seats: selectedSeats,
        passengerDetails
      })
    });
    const data = await response.json();
    navigate('/booking-confirmation', { state: { bookingDetails: data } });
  };

  if (!busDetails) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select Seats</h1>
      <div className="flex">
        <div className="w-1/2 pr-4">
          {/* Render seat layout here */}
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-bold mb-2">Passenger Details</h2>
          {selectedSeats.map((seat, index) => (
            <div key={seat} className="mb-4">
              <h3>Seat {seat}</h3>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => handlePassengerDetailsChange(index, 'name', e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="number"
                placeholder="Age"
                onChange={(e) => handlePassengerDetailsChange(index, 'age', e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <select
                onChange={(e) => handlePassengerDetailsChange(index, 'gender', e.target.value)}
                className="w-full p-2 border rounded mb-2"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          ))}
          <button
            onClick={handleBooking}
            className="w-full p-2 bg-green-500 text-white rounded"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
