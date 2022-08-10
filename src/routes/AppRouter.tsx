import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../components/pages/common/ErrorPage';
import ResponsiveAppBar from '../components/pages/common/NavBar';
import { ProtectedPage } from '../components/pages/common/ProtectedPage';
import { EventPage as CreateEventPage } from '../components/pages/eventsPage/create/EventPage';
import { EventPage as ViewEventPage } from '../components/pages/eventsPage/view/EventPage';
import RegisterToEventForm from '../components/pages/eventsPage/view/register/DialogRegisterEvent';
import { ViewAllEventsPage } from '../components/pages/eventsPage/viewAll/ViewAllEventsPage';
import { Homepage } from '../components/pages/homePage/Homepage';

export function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route
        path='home'
        element={
          <ProtectedPage>
            <ResponsiveAppBar />
          </ProtectedPage>
        }
      />
      <Route
        path='addEvent'
        element={
          <ProtectedPage>
            <CreateEventPage />
          </ProtectedPage>
        }
      />
      <Route path='event/:id' element={<ViewEventPage />} />
      <Route path='error' element={<ErrorPage />} />
      <Route path='events/:currentPage' element={<ViewAllEventsPage />} />
      <Route path='events' element={<Navigate to='1' />} />
      <Route path='registerToEvent' element={<RegisterToEventForm />} />
    </Routes>
  );
}
