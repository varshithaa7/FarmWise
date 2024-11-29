import React from 'react'

function Footer() {
    
  return (

    <div className=' flex jw-full h-60vh bg-zinc-900 p-20 font-[FoundersGroteskX-Condensed]'>
          <div className='w-1/2 '>
                 <div className='heading'>
                 <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Agri-</h1>
                 <h1 className='text-[8vw]  font-semibold uppercase leading-none mt-1 -mb-10'>Learn</h1>
                 </div>
          </div>
         <div className='w-1/2 '>
         <h1 className='text-[5vw]  font-semibold uppercase leading-none -mb-10'>Overview</h1>
          <div className='detail mt-20 font-[Neue_Montreal]'>
            <a className='block text-xl font-light' href="">crop suggestion</a>
            <a className='block text-xl font-light' href="">crop Disease</a>
            <a className='block text-xl font-light' href="">Learn Farming</a>
          </div>
         </div>
         
        </div>
  )
}

export default Footer