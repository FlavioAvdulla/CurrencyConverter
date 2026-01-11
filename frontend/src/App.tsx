import ConvertSection from './components/ConvertSection/ConvertSection'
import Navbar from './components/Navbar/Navbar'
import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen bg-white transition-colors duration-200 -z-10'>
      <Navbar/>
      <ConvertSection />
    </div>
  )
}

export default App
