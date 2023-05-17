import { createContext } from 'react';
import React from 'react'
import DetailPage from './pages/DetailPage/DetailPage.jsx';
import RandomPage from './pages/RandomPage/RandomPage.jsx';
import SavedMenuPage from './pages/SavedMenuPage/SavedMenuPage.jsx';
import HomePage from './pages/homepage/HomePage.jsx'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


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
        <Route path='/' element={<HomePage />} />
        <Route path='/:MealID' element={<DetailPage />} />
        <Route path='/Random' element={<RandomPage />} />
        <Route path='/SavedMenu' element={<SavedMenuPage />} />

      </Routes>


    </SaveToLocalContext.Provider>



  );
}

export default App;
export { SaveToLocalContext }