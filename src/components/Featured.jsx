import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all"
function Featured() {
  const cards= [useAnimation(),useAnimation()];
  const handleHover = (index)=>{
     cards[index].start({y: "0"})
   }
  const handleHoverEnd = (index)=>{
     cards[index].start({y: "100%"})
   }


  return (
    <div data-scroll data-scroll-section className='w-full py-20'>
         <div className='w-full px-20 border-b-[1px]  border-zinc-700 pb-20 '>
            <h1 className='text-7xl  font-[Neue Montreal] tracking-tight'>AgriAdvisor</h1>
            </div> 
          <div className='px-20'>
            <div className='Cards w-full flex gap-10 mt-10'>
                <motion.div  
                onHoverStart={()=>handleHover(0)}
                onHoverEnd={()=>handleHoverEnd(0)}
                className='cardscontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute flex overflow-hidden text-[#F5D300] right-0 translate-x-1/2 top-1/2 -translate-y-1/2   z-[9] leading-none tracking-tighter text-6xl font-[FoundersGroteskX-Condensed]'>
          {"PROMOTE".split('').map((item,index)=>(
            <motion.span
            initial={{y: "100%"}}
             animate={cards[0]}
             transition={{ease : [0.22,1,0.36,1], delay: index*.05}}
            className='inline-block'
            >
              {item}
              </motion.span>
            ))}
                </h1>
                
                  <div className=' card w-full h-full rounded-xl  overflow-hidden'>
                    <img className='w-full h-full bg-cover' src='https://i.shgcdn.com/ffb93c48-71f3-4127-9197-61895d1e5714/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt="" />
                  </div>
                </motion.div>
                <motion.div 
                  onHoverStart={()=>handleHover(1)}
                  onHoverEnd={()=>handleHoverEnd(1)}
                className='cardscontainer relative w-1/2 h-[75vh] '>
                  <div className=' card w-full h-full  rounded-xl overflow-hidden'>
                  <h1 className='absolute flex overflow-hidden text-[#F5D300] right-full translate-x-1/2 top-1/2 -translate-y-1/2   z-[9] leading-none tracking-tighter text-6xl font-[FoundersGroteskX-Condensed]'>
                     {"ORGANIC FARMING".split('').map((item,index)=><motion.span
            initial={{y: "100%"}}
             animate={cards[1]}
             transition={{ease : [0.22,1,0.36,1], delay: index*.05}}
            className='inline-block'
            >
              {item}
              </motion.span>)}
                </h1>
                  <img className='w-full h-full bg-cover' src='https://www.collidu.com/media/catalog/product/img/4/7/47348916930f7ef17aa6606bc4b8a72517a0f13f756af42868891f8dae85e641/organic-farming-slide3.png' alt="" />
                  </div>
                </motion.div>
               </div>
          </div>
        </div>
  )
}

export default Featured