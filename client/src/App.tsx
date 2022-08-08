import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stations from './pages/stations/Stations';
import View from './pages/journey/View';
import Station from './pages/station/Station';
import Nav from './components/nav/Nav';
import StationSearch from './pages/station/StationSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/stations' element={<Stations />} />
        <Route path='/journeys' element={<View />} />
        <Route path='/station' element={<StationSearch />} />
        <Route path='/station/:id' element={<Station />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
