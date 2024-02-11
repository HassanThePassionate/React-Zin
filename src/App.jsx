import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Bookmark from './Components/Bookmark'
import Converter from './Components/Converter'
import Footer from './Components/Footer'
import './index.scss';
import CPDF from './Components/CPDF'

const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);

  }
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Bookmark searchValue={searchValue} />
      <Converter searchValue={searchValue} />
      <Converter searchValue={searchValue} />
      <CPDF searchValue={searchValue} />
      <Footer />
    </>
  )
}

export default App
