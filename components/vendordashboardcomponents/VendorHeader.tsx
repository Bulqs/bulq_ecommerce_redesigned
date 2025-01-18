import React from 'react';

interface HeaderProps {
    toggleSidebar: () => void;
}

const VendorHeader = ( { toggleSidebar }: HeaderProps ) => {
  return (
      <header className="flex items-center justify-between bg-gray-900 text-white h-16 px-4 md:pl-72">
          <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </button>
          <h1 className="text-xl font-semibold">Admin Panel</h1>
      </header>
  );
}

export default VendorHeader;