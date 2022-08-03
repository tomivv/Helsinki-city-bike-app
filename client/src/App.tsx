import React from 'react';
import Stations from './pages/stations/Stations';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './pages/journey/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/stations' element={<Stations />} />
        <Route path='/journeys' element={<View />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
