import { createContext } from 'react';
import React from 'react'
import DetailPage from './pages/DetailPage/DetailPage.jsx';
import SavedMenuPage from './pages/SavedMenuPage/SavedMenuPage.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MenuPage from './pages/MenuPage/MenuPage.jsx';
import FirstPage from './pages/FirstPage/FirstPage.jsx'


const SaveToLocalContext = React.createContext()

function App() {
  const [localData, setLocalData] = useState(() => {
    const localDataCheck = localStorage.getItem("localData")
    if (localDataCheck) {
      return JSON.parse(localDataCheck)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(localData))
  }, [localData])



  return (

    <SaveToLocalContext.Provider value={{ localData, setLocalData }}>






      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/MenuPage' element={<MenuPage />} />
        <Route path='/:MealID' element={<DetailPage />} />
        <Route path='/SavedMenu' element={<SavedMenuPage />} />

      </Routes>


    </SaveToLocalContext.Provider>



  );
}

export default App;
export { SaveToLocalContext }