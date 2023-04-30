import DetailPage from './pages/DetailPage/DetailPage.jsx';
import RandomPage from './pages/RandomPage/RandomPage.jsx';
import HomePage from './pages/homepage/HomePage.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter basename='/foodrecipe'>
        <Routes>
          <Route path='/foodrecipe' element={<HomePage />} />
          <Route path='/:MealID' element={<DetailPage />} />
          <Route path='/Random' element={<RandomPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
