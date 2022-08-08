import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { AuthTabs } from './AuthTabs';
import { RegisterUser } from './RegisterUser';
import { Login } from './Login';
import { ContainerStyled, TabBoxStyled } from './StyleComponent';

export function Homepage() {
  const [selectedTab, setSelectedTab] = useState('register');

  return (
    <div>
      <ContainerStyled>
        <TabContext value={selectedTab}>
          <TabBoxStyled>
            <AuthTabs currentTab={selectedTab} setSelectedTab={setSelectedTab} />
          </TabBoxStyled>
          <TabPanel value='register'>
            <RegisterUser />
          </TabPanel>
          <TabPanel value='login'>
            <Login />
          </TabPanel>
        </TabContext>
      </ContainerStyled>
    </div>
  );
}
