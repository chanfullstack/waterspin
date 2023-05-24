import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
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

      </Routes>


    </SaveToLocalContext.Provider>



  );
}

export default App;
export { SaveToLocalContext }