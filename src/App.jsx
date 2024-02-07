import React from 'react'
import Navbar from './Components/Navbar'
import Bookmark from './Components/Bookmark'
import Converter from './Components/Converter'
import Slider from './Components/Slider'
import Footer from './Components/Footer'
import './index.scss';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <S /> */}
      <Bookmark />
      <Slider />
      <Converter />
      <Footer />
    </>
  )
}

export default App
