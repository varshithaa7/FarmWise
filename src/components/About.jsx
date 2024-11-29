











































import React, { useState } from 'react';
import { motion } from 'framer-motion';
import agrilearn from '../images/agrilearn.jpg';
import videoUrl from '../images/videoUrl.mp4'; // Add the path to your video file

function About() {
  // State to toggle between image and video
  const [showVideo, setShowVideo] = useState(false);

  // Animation variants for transitioning between image and video
  const transitionVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };

  // Toggle function to switch between video and image
  const toggleMedia = () => {
    setShowVideo(prev => !prev); // Toggle the showVideo state
  };

  return (
    <div className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black">
      <h1 className="font-[Neue_Montreal] text-[4vw] leading-[4.5vw] tracking-tight">
        AgriLearn is an innovative platform for forward-thinking businesses looking to optimize crop health, boost yields, and leverage AI to transform agricultural operations
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Vision</h1>

          <motion.button
            className="px-10 py-6 flex gap-10 items-center bg-zinc-900 mt-10 rounded-full text-white"
            onClick={toggleMedia} // Call toggleMedia to switch between image/video
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Discover more:
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </motion.button>
        </div>

        <div className="w-1/2 h-[65vh] object-cover rounded-3xl bg-[#b0c859]">
          <motion.div
            key="image-or-video"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
            className="h-[65vh] rounded-3xl overflow-hidden"
          >
            {!showVideo ? (
              // Image placeholder
              <img
                src={agrilearn}
                alt="about"
                className="h-[65vh] rounded-3xl object-cover"
              />
            ) : (
              // Video Player
              <video autoPlay loop className="w-full h-full object-cover rounded-3xl">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;




























// import React from 'react'
// import agrilearn from '../images/agrilearn.jpg'
// function About() {
//   return (
//     <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black' >
//          <h1 className='font-[Neue_Montreal] text-[4vw] leading-[4.5vw] tracking-tight'>
//             AgriLearn is an innovative platform for forward-thinking businesses looking to optimize crop health, boost yields, and leverage AI to transform agricultural operations
//         </h1>
//         <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
//                 <div className='w-1/2'>
//                     <h1 className='text-7xl '>Our Vision</h1>
//                     <button className='px-10 py-6  flex gap-10  items-center   bg-zinc-900 mt-10 rounded-full text-white'>Discover more:
//                         <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
//                     </button>
//                 </div>
//                 <div className='w-1/2 h-[65vh] object-cover rounded-3xl bg-[#b0c859]'>
//                 <img src={agrilearn} alt="about"  className=' h-[65vh] rounded-3xl' />
//                 </div>
//         </div>
//     </div>
//   )
// }

// export default About