import React, { useEffect, useMemo, useState } from 'react';
import { createTheme, CssBaseline, GlobalStyles, PaletteMode, ThemeProvider } from '@mui/material';
import { MediatorEventsIdentifiers } from '../events/EventsIdentifiers';
import Mediator from '../events/Mediator';
import { AuthContextProvider } from './contexts/AuthContext';
import RegisterUser from './pages/register/RegisterUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  const [colorMode, setColorMode] = useState<PaletteMode>('light');

  const theme = useMemo(() => createTheme({ palette: { mode: colorMode } }), [colorMode]);

  useEffect(() => {
    const themeChangeSubscription = Mediator.subscribe(
      MediatorEventsIdentifiers.changeColorTheme,
      ({ newColorMode }) => {
        setColorMode(newColorMode);
      }
    );

    return () => themeChangeSubscription.unsubscribe();
  }, []);

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
      <AuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='register' element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  );
};
