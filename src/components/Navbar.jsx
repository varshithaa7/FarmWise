import React from 'react';
import agrilogo from '../images/agrilogo.png';

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-2 py-8 font-[Neue Montreal] flex justify-between items-center'>
      <div className='logo'>
        <img src={agrilogo} className='h-12 absolute top-3' />
      </div>
      <div className='links flex gap-10 -mt-4'>
        <a
          href="/crop-suggestion" // Link to Crop suggestion page
          className="text-lg capitalize font-light transition-all duration-300 ease-in-out neumorphism-link"
        >
          Crop suggestion
        </a>
        <a
          href="../genai hack/index.html" // Relative path to the index.html in genai hack
  className="text-lg capitalize font-light transition-all duration-300 ease-in-out neumorphism-link"
        >
          Disease detection
        </a>
        <a
          href="/resources" // Link to Resources page
          className="text-lg capitalize font-light transition-all duration-300 ease-in-out neumorphism-link"
        >
          Resources
        </a>
        <a
          href="/insights" // Link to Insights page
          className="text-lg capitalize font-light transition-all duration-300 ease-in-out neumorphism-link"
        >
          Insights
        </a>
        <a
          href="/about-us" // Link to About Us page
          className="text-lg capitalize font-light transition-all duration-300 ease-in-out neumorphism-link"
        >
          About Us
        </a>
      </div>
    </div>
  );
}

export default Navbar;
