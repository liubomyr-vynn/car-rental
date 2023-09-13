import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/catalog"> Catalog </NavLink>
        <NavLink to="/favorites"> Favorites </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
