import React from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
import { AuthTabs } from '../common/AuthTabs';
import RegisterUser from './RegisterUser';

export default function Homepage() {
  const [value, setValue] = React.useState('register');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <TabContext value={value}>
          <Box sx={{ borderTop: 1, borderColor: 'divider', position: 'fixed', bottom: 0 }}>
            <AuthTabs onChange={handleChange}></AuthTabs>
          </Box>
          <TabPanel value='register'>
            <RegisterUser />
          </TabPanel>
          <TabPanel value='login'>Login</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
