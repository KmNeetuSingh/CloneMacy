// AllRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Women from '../pages/Women';
import Men from '../pages/Men';
import Baby from '../pages/Baby';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<Women />} />
      <Route path="/login" element={<Login />} />
      <Route path="/men" element={<Men />} />
      <Route path="/baby" element={<Baby />} />
    </Routes>
  );
}
