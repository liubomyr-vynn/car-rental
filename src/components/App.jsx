import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const SharedLayout = lazy(() => import('./Layout/Layout'));

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/catalog"> Catalog </NavLink>
        <NavLink to="/favorites"> Favorites </NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
