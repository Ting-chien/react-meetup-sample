import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import AllMeetupPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <h1>Hello Meetup App</h1>
    <Routes>
      <Route path='/' element={<AllMeetupPage />} />
      <Route path='/new' element={<NewMeetupPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
  </BrowserRouter>
);