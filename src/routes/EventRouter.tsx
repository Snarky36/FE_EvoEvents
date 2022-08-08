import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../components/pages/common/ErrorPage';
import ResponsiveAppBar from '../components/pages/common/NavBar';
import { EventsPage } from '../components/pages/eventsPage/CreateEventPage';
import { EventPage } from '../components/pages/eventsPage/EventPage';
import { Homepage } from '../components/pages/homePage/Homepage';

export function EventRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='home' element={<ResponsiveAppBar />} />
        <Route path='addEvent' element={<EventsPage />} />
        <Route path='event/:id' element={<EventPage />} />
        <Route path='error' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
