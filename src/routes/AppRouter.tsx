import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../components/pages/common/ErrorPage';
import { ProtectedPage } from '../components/pages/common/ProtectedPage';
import { EventPage as CreateEventPage } from '../components/pages/eventsPage/create/EventPage';
import { EventPage as ViewEventPage } from '../components/pages/eventsPage/view/EventPage';
import RegisterToEventForm from '../components/pages/eventsPage/view/register/EventRegistrationDialog';
import { ViewAllEventsPage } from '../components/pages/eventsPage/viewAll/ViewAllEventsPage';
import { Homepage } from '../components/pages/homePage/Homepage';

export function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route
        path='events/:currentPage'
        element={
          <ProtectedPage>
            <ViewAllEventsPage />
          </ProtectedPage>
        }
      />
      <Route
        path='events'
        element={
          <ProtectedPage>
            <Navigate to='1' />
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
      <Route
        path='event/:id'
        element={
          <ProtectedPage>
            <ViewEventPage />
          </ProtectedPage>
        }
      />
      <Route
        path='error'
        element={
          <ProtectedPage>
            <ErrorPage />
          </ProtectedPage>
        }
      />
      <Route
        path='registerToEvent'
        element={
          <ProtectedPage>
            <RegisterToEventForm />
          </ProtectedPage>
        }
      />
    </Routes>
  );
}
