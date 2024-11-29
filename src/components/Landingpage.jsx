import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import logo from '../images/logo.png';

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20 '>
        {["Smart Tools", "Raising Growth", "Shaping The Future"].map((item, index) => {
          return (
            <div key={index} className='masker'>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className='flex items-center justify-center mr-5 w-[7vw] h-[3.5vw] rounded-md relative -top-[0.75vw]'
                  >
                    <img className="bg-cover" src={logo} alt="" />
                  </motion.div>
                )}
                <h1 className='uppercase text-[5vw] leading-[4.8vw] pr-6 font-[FoundersGroteskX-Condensed] font-bold '>{item}</h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Section with Description */}
      <div className='border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20'>
        {["Revolutionize Agricultural Management", "Reduce risks with our AI-driven solutions"].map((item, index) => (
          <p key={index} className='text-md font-light tracking-tight leading-[3vw]'>
            {item}
          </p>
        ))}
        <div className='Start flex items-center gap-3'>
          {/* Innovate Your Farming Button with Hover Effect */}
          <motion.div
            className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'
            whileHover={{
              scale: 1.1,                      // Slightly scale up the button
              backgroundColor: '#4CAF50',      // Change background color to green on hover
              color: '#fff',                   // Change text color to white
              textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)' // Add text shadow effect
            }}
            whileTap={{ scale: 0.95 }} // Add slight shrinking effect on click
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Innovate Your Farming
          </motion.div>

          {/* Arrow Icon with the same hover effect */}
          <motion.div
            className='h-8 w-8 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'
            whileHover={{
              scale: 1.1,                      // Slightly scale up the icon
              backgroundColor: '#4CAF50',      // Change background color to green on hover
              color: '#fff',                   // Change icon color to white
              textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)' // Add text shadow effect
            }}
            whileTap={{ scale: 0.95 }} // Add slight shrinking effect on click
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;








































// import { motion } from 'framer-motion';
// import React from 'react';
// import { FaArrowUpLong } from "react-icons/fa6";
// import logo from '../images/logo.png';

// function Landingpage() {
//   return (
//     <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
//       <div className='textstructure mt-40 px-20 '>
//         {["Smart Tools", "Raising Growth", "Shaping The Future"].map((item, index) => {
//           return (
//             <div key={index} className='masker'>
//               <div className='w-fit flex items-end overflow-hidden'>
//                 {index === 1 && (
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: "7vw" }}
//                     transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
//                     className='flex items-center justify-center mr-5 w-[7vw] h-[3.5vw] rounded-md relative -top-[0.75vw]'
//                   >
//                     <img className="bg-cover" src={logo} alt="" />
//                   </motion.div>
//                 )}
//                 <h1 className='uppercase text-[5vw] leading-[4.8vw] pr-6 font-[FoundersGroteskX-Condensed] font-bold '>{item}</h1>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Footer Section with Description */}
//       <div className='border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20'>
//         {["Revolutionize Agricultural Management", "Reduce risks with our AI-driven solutions"].map((item, index) => (
//           <p key={index} className='text-md font-light tracking-tight leading-[3vw]'>
//             {item}
//           </p>
//         ))}
//         <div className='Start flex items-center gap-3'>
//           {/* Innovate Your Farming Button with Hover Effect */}
//           <motion.div
//             className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'
//             whileHover={{
//               scale: 1.1,                      // Slightly scale up the button
//               backgroundColor: '#4CAF50',      // Change background color to green on hover
//               color: '#fff',                   // Change text color to white
//               textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)' // Add text shadow effect
//             }}
//             whileTap={{ scale: 0.95 }} // Add slight shrinking effect on click
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             Innovate Your Farming
//           </motion.div>

//           {/* Arrow Icon (no hover effect on the arrow) */}
//           <div className='h-8 w-8 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
//             <span className='rotate-[45deg]'>
//               <FaArrowUpLong />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landingpage;


























// import { motion } from 'framer-motion';
// import React from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";
// import logo from '../images/logo.png'

// function Landingpage() {
//   motion
//   return (
//     <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
//         <div className='textstructure mt-40 px-20 '>

//          {["Smart Tools","raising growth","Shaping The Future"].map((item,index)=>{
//                   return  (<div className='masker'>
//                     <div className='w-fit flex items-end  overflow-hidden'>
//                       {index==1 && (
//                         <motion.div initial={{width:0}} animate={{width:"7vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className=' flex items-center justify-center mr-5 w-[7vw] h-[3.5vw] rounded-md  relative -top-[0.75vw] '>
//                           <img className="bg-cover  "src={logo} alt="" />
//                         </motion.div>
//                         )}
//                   <h1 className='uppercase text-[5vw] leading-[4.8vw] pr-6 font-[FoundersGroteskX-Condensed] font-bold '>{item}</h1>
//              </div>
//              </div>
//                   );
//          })}
//            </div>
//         <div className='border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20'>
//           {["Revolutionize Agricultural Management","Reduce risks with our AI-driven solutions"].map((item,index) =>(
//           <p  className='text-md font-light tracking-tight leading-[3vw]'>{item}</p>))}
//           <div className='Start flex items-center gap-3'>
//               <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>Innovate Your Farming</div>
//               <div className='h-8 w-8 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
//                 <span className='rotate-[45deg]'>  <FaArrowUpLong/> </span>
              
//                 </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Landingpage