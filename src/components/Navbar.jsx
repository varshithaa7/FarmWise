
import React from 'react';
import agrilogo from '../images/agrilogo.png';

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-2 py-8 font-[Neue Montreal] flex justify-between items-center'>
      <div className='logo'>
        <img src={agrilogo} className='h-12 absolute top-3' />
      </div>
      <div className='links flex gap-10 -mt-4'>
        {['Crop suggestion', 'Disease detection', 'resources', 'Insights', 'About Us'].map((item, index) => (
          <a
            key={index}
            className={`text-lg capitalize font-light 
              transition-all duration-300 ease-in-out 
              ${index === 4 ? 'ml-32' : ''}
              neumorphism-link`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;





























// // import React from 'react'
// // import agrilogo from '../images/agrilogo.png'

// // function Navbar() {
// //   return (
// //     <div className='fixed z-[999]   w-full px-2 py-8 font-[Neue Montreal] flex justify-between items-center'>
// //         <div className='logo '>
// //          <img src={agrilogo} className='h-12 absolute top-3'/>
// //         </div>
// //         <div className='links flex gap-10 -mt-4'>
// //           {['Crop suggestion','Disease detection','resources','Insights','About Us'].map((item,index)=>(
// //             <a key={index} className={`text-lg  capitalize font-light ${index===4 && "ml-32"}`} >{item}</a>
// //           ))}
// //         </div> 
// //     </div>
// //   )
// // }

// // export default Navbar