import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyManagement = () => {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3000/propertyRegistration') // Replace with your backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFlats(data); // Set the fetched data to state
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching flats:', err);
        setError('Failed to load flats');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const handleButtonClick = () => {
    navigate('/addFlat');
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Property Management</h1>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flats.map((flat) => (
            <div key={flat._id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{flat.houseName}</h2>
              <p className="text-gray-700">Location: {flat.location}</p>
              <p className="text-gray-700">Rent: ₹{flat.rent}</p>
              <p className="text-gray-700">Parking: {flat.parking}</p>
              <p className="text-gray-700">Utilities: {flat.utilities}</p>
              <p className="text-gray-700">FlatType: {flat.flatType}</p>
            </div>
          ))}
        </div>
     
       
          
          <button 
            className="bg-gradient-to-r from-custom-green to-custom-purple text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={handleButtonClick}
          >
            Add Flat
          </button>
        
    
    </div>
  );
};

export default PropertyManagement;
