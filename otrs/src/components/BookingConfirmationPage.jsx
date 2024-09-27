import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const { bookingDetails } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmed</h1>
      <div className="border p-4 rounded">
        <p><strong>Booking ID:</strong> {bookingDetails.id}</p>
        <p><strong>Seats Booked:</strong> {bookingDetails.seatsBooked.join(', ')}</p>
        <p><strong>Total Price:</strong> ₹{bookingDetails.totalPrice}</p>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
