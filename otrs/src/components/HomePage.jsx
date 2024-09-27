import React, { useState } from 'react';

const HomePage = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');

    if (!departureCity || !arrivalCity || !travelDate) {
      setError('Please fill in all fields.');
      return;
    }

    // Here you would typically make an API call to search for buses
    console.log('Searching for buses:', { departureCity, arrivalCity, travelDate });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px',  }}>Find Your Bus</h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="departureCity" style={{ display: 'block', marginBottom: '5px' }}>Departure City</label>
          <input
            id="departureCity"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            placeholder="Enter departure city"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label htmlFor="arrivalCity" style={{ display: 'block', marginBottom: '5px' }}>Arrival City</label>
          <input
            id="arrivalCity"
            value={arrivalCity}
            onChange={(e) => setArrivalCity(e.target.value)}
            placeholder="Enter arrival city"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label htmlFor="travelDate" style={{ display: 'block', marginBottom: '5px' }}>Date of Travel</label>
          <input
            id="travelDate"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Search
        </button>
      </form>
      {error && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          borderRadius: '4px', 
          border: '1px solid #f5c6cb' 
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default HomePage;
