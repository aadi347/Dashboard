import React, { useState, useEffect } from 'react';

import { FaMapMarkerAlt, FaRupeeSign, FaParking, FaHome, FaBolt, FaEdit, FaTrash} from 'react-icons/fa'; // Importing icons
import { MdOutlineBedroomParent } from 'react-icons/md';


const PropertyManagement = () => {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col gap-4 flex items-center justify-center">
          <div
            className="w-20 h-20 border-4 border-transparent text-custom-green animate-spin flex items-center justify-center border-t-custom-green rounded-full"
          >
            <div
              className="w-16 h-16 border-4 border-transparent text-custom-purple animate-spin flex items-center justify-center border-t-custom-purple rounded-full"
            ></div>
          </div>
          <p className="text-gray-700 mt-4 text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }



  return (
    <div className="p-6">
  <h1 className="text-3xl font-bold mb-6 text-center">Property Management</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {flats.map((flat) => (
      <div key={flat._id} className="bg-white shadow-xl rounded-3xl overflow-hidden">
        <img 
          src={flat.imageURL || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fDB8fHww'} // Replace with dynamic image URL or default
          alt={flat.houseName} 
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaHome className="text-custom-purple mr-2" /> {flat.houseName}
          </h2>
          <p className="text-gray-700 flex items-center">
            <FaMapMarkerAlt className="text-custom-green mr-2" /> Location: {flat.location}
          </p>
          <p className="text-gray-700 flex items-center">
            <FaRupeeSign className="text-custom-green mr-2" /> Rent: ₹{flat.rent}
          </p>
          <p className="text-gray-700 flex items-center">
            <FaParking className="text-custom-green mr-2" /> Parking: {flat.parking}
          </p>
          <p className="text-gray-700 flex items-center">
            <FaBolt className="text-custom-green mr-2" /> Utilities: {flat.utilities}
          </p>
          <p className="text-gray-700 flex items-center">
            <MdOutlineBedroomParent className="text-custom-green mr-2" /> Flat Type: {flat.flatType}
          </p>
          <div className="mt-4 flex justify-between">
          <button className="flex items-center bg-custom-purple text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              <FaEdit className="" />
            </button>
            <button className="flex items-center bg-custom-green text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
              <FaTrash className="" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

 
</div>
  );
};

export default PropertyManagement;
