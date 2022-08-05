import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stations from './pages/stations/Stations';
import View from './pages/journey/View';
import Station from './pages/station/Station';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/stations' element={<Stations />} />
        <Route path='/journeys' element={<View />} />
        <Route path='/stations/:id' element={<Station />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
