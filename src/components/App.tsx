import React, { useMemo } from 'react';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './pages/common/NavBar';
import EventsPage from './pages/eventsPage/EventsPage';
import Homepage from './pages/homePage/Homepage';
import { UserContextProvider } from './contexts/UserContext';

export const App = () => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            light: 'white',
            main: '#42a5f5',
            dark: '#0d47a1',
            contrastText: '#e3f2fd'
          },
          secondary: {
            light: '#ff7961',
            main: '#42a5f5',
            dark: '#ba000d',
            contrastText: '#000'
          }
        }
      }),
    []
  );

  const globalStyles = useMemo(
    () => (
      <GlobalStyles
        styles={{
          html: { height: '100%' },
          body: { height: '100%' },
          '#root': { height: '100%' }
        }}
      />
    ),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='home' element={<ResponsiveAppBar />} />
            <Route path='events' element={<EventsPage />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
};
