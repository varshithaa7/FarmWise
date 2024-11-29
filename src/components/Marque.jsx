import React from 'react'
import { motion }  from "framer-motion"
function Marque() {

  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1"className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'> 
    <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap '>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity,ease:"linear",duration: 8}} className='text-[15vw] leading-none font-[FoundersGroteskX-Condensed] -mb[7vw] pr-10 uppercase font-semibold '>Agri Learn</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity,ease:"linear",duration: 8}} className='text-[15vw] leading-none font-[FoundersGroteskX-Condensed] -mb[7vw] pr-10 uppercase font-semibold '>Agri Learn</motion.h1>
    </div>        
 </div>
  )
}

export default Marque