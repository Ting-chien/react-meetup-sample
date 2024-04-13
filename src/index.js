import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import './index.css';
import AllMeetupPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

// Components
import Layout from './components/Layout';
import MainNavigation from './components/MainNavigation';
import { FavoritesContextProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
        <MainNavigation />
        <Layout>
          <Routes>
            <Route path='/' element={<AllMeetupPage />} />
            <Route path='/new' element={<NewMeetupPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  </FavoritesContextProvider>
);