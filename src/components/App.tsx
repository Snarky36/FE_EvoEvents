import React, { useMemo } from 'react';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { UserContextProvider } from './contexts/UserContext';
import { EventContextProvider } from './contexts/EventContext';
import { AppRouter } from '../routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { FilterContextProvider } from './contexts/FilterContext';

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
            light: '#e3f2fd',
            main: '#42a5f5',
            dark: '#000000',
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
          html: { height: '100%', overflowX: 'hidden' },
          body: { height: '100%', overflowX: 'hidden' },
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
            <FilterContextProvider>
              <AppRouter />
            </FilterContextProvider>
          </EventContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
