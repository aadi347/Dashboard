import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyManagement from './PropertyManagement.jsx';
import ProfileSettings from "./ProfileSettings.jsx";
import SupportAndResources from "./SupportAndResources.jsx";
import AddProperty from './addFlat.jsx';

const Dashboard = () => {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('PropertyManagement');

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'PropertyManagement':
        return <PropertyManagement />;
      case 'ProfileSettings':
        return <ProfileSettings />;
      case 'SupportAndResources':
        return <SupportAndResources />;
      case 'AddProperty':
      return <AddProperty />;
      default:
        return <PropertyManagement />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white rounded-3xl shadow-custom-heavy m-6 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button 
              className={`w-full text-left p-2 rounded-3xl ${activeSection === 'PropertyManagement' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
              onClick={() => setActiveSection('PropertyManagement')}
            >
              Property Management
            </button>
          </li>
          <li>
            <button 
              className={`w-full text-left p-2 rounded-3xl ${activeSection === 'ProfileSettings' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
              onClick={() => setActiveSection('ProfileSettings')}
            >
              Profile Settings
            </button>
          </li>
          <li>
            <button 
              className={`w-full text-left p-2 rounded-3xl ${activeSection === 'SupportAndResources' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
              onClick={() => setActiveSection('SupportAndResources')}
            >
              Support and Resources
            </button>
          </li>
          <li>
            <button 
              className={`w-full text-left p-2 rounded-3xl ${activeSection === 'AddProperty' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
              onClick={() => setActiveSection('AddProperty')}
            >
              AddProperty
            </button>
          </li>
        </ul>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 bg-white rounded-3xl shadow-custom-heavy m-6 p-8">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
