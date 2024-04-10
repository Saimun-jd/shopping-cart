import React, { useEffect } from 'react';

const ThankYouPopup = ({showPopup, setShowPopup}) => {

  useEffect(() => {
    const timeout = setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
    return () => clearTimeout(timeout);
  }, [setShowPopup]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 opacity-75 transition duration-1000 ease-in-out ${!showPopup && 'hidden'}`}>
      <div className="bg-white rounded-lg px-4 py-3 text-center">
        Thank you for your order!
      </div>
    </div>
  );
};

export default ThankYouPopup;
