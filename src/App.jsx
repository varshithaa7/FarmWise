import React from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/Landingpage'
import Marque from './components/marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-black'>

       <Navbar/>
       <Landingpage/>
       <Marque/>
       <About/>
       <Eyes/>
       <Featured/>
       <Footer/>
       </div>
  )
}

export default App