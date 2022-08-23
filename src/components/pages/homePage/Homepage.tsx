import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { AuthTabs } from './AuthTabs';
import { RegisterUser } from './RegisterUser';
import { Login } from './Login';
import { ContainerStyled, TabBoxStyled } from './StyledComponents';
import Background from '../../../assets/img/Background2.jpg';

export function Homepage() {
  const [selectedTab, setSelectedTab] = useState('login');

  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <ContainerStyled id='registerAndLoginContainer'>
        <TabContext value={selectedTab}>
          <TabBoxStyled id='currentTabSelector'>
            <AuthTabs id='currentTab' currentTab={selectedTab} setSelectedTab={setSelectedTab} />
          </TabBoxStyled>
          <TabPanel value='register' id='registerTab'>
            <RegisterUser />
          </TabPanel>
          <TabPanel value='login' id='loginTab'>
            <Login />
          </TabPanel>
        </TabContext>
      </ContainerStyled>
    </div>
  );
}
