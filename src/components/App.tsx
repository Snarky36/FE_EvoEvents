import React, { useMemo } from 'react';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { UserContextProvider } from './contexts/UserContext';
import { EventContextProvider } from './contexts/EventContext';
import { AppRouter } from '../routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
        <UserContextProvider>
          <EventContextProvider>
            <AppRouter />
          </EventContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
