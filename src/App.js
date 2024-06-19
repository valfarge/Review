import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import { MoonPayProvider } from '@moonpay/moonpay-react';
import IndexPage from './pages/Index.js';
import RessourcesPage from './pages/Ressources.js';
import CaracteristiquesPage from './pages/Caracteristiques.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/ressources" element={<RessourcesPage />} />
         
      <Route path="/caracteristiques" element={<CaracteristiquesPage />} />
    </Routes>
  );
}

export default App;
