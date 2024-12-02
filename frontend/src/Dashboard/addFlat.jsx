import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [loading, setLoading] = useState(false);
  const [flatType, setFlatType] = useState("");
  const [rent, setRent] = useState("");
  const [location, setLocation] = useState("");
  const [parking, setParking] = useState("");
  const [utilities, setUtilities] = useState("");
  const [houseName, setHouseName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [carpetArea, setCarpetArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      flatType,
      rent,
      location,
      parking,
      utilities,
      houseName,
      deposit,
      carpetArea,
    };

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/flatregistration", // Corrected the typo in endpoint name
        data
      );
      setLoading(false);
      alert("Property registration completed successfully!");
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      console.error(error.response?.data || error.message);
      alert("An error occurred while registering your property.");
    }
  };

  return (
    <div className="flex-1 bg-white rounded-3xl m-6 p-8 relative bottom-7">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <h2 className="col-span-2 text-3xl font-bold text-center mb-6 text-indigo-600">
          Flat Registration Form
        </h2>

        {/* Flat Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flat Type <span className="text-red-500">*</span>
          </label>
          <select
            value={flatType}
            onChange={(e) => setFlatType(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="" disabled>Select Flat Type</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
          </select>
        </div>

        {/* Flat Rent */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flat Rent (₹) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Rent"
            required
          />
        </div>

        {/* Flat Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flat Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Location"
            required
          />
        </div>

        {/* Parking */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parking <span className="text-red-500">*</span>
          </label>
          <select
            value={parking}
            onChange={(e) => setParking(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="" disabled>Select Parking Type</option>
            <option value="2-wheeler Shaded">2-wheeler Shaded</option>
            <option value="2-wheeler Not Shaded">2-wheeler Not Shaded</option>
            <option value="4-wheeler Shaded">4-wheeler Shaded</option>
            <option value="4-wheeler Not Shaded">4-wheeler Not Shaded</option>
          </select>
        </div>

        {/* Utilities */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Electricity & Water Supply <span className="text-red-500">*</span>
          </label>
          <select
            value={utilities}
            onChange={(e) => setUtilities(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="" disabled>Select Status</option>
            <option value="24/7">24/7</option>
            <option value="Limited Hours">Limited Hours</option>
          </select>
        </div>

        {/* House Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            House Name
          </label>
          <input
            type="text"
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter House Name"
          />
        </div>

        {/* Deposit */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Deposit (₹)
          </label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Deposit Amount"
          />
        </div>

        {/* Carpet Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Carpet Area (sq ft)
          </label>
          <input
            type="number"
            value={carpetArea}
            onChange={(e) => setCarpetArea(e.target.value)}
            className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Carpet Area"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 mt-6 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-500 transition duration-200"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
