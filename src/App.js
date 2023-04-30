import DetailPage from './pages/DetailPage/DetailPage.jsx';
import RandomPage from './pages/RandomPage/RandomPage.jsx';
import HomePage from './pages/homepage/HomePage.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:MealID' element={<DetailPage />} />
        <Route path='/Random' element={<RandomPage />} />

      </Routes>


    </>

  );
}

export default App;
