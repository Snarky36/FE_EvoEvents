import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { AuthTabs } from './AuthTabs';
import { RegisterUser } from './RegisterUser';
import { Login } from './Login';
import { ContainerStyled, TabBoxStyled } from './StyledComponents';
import Background from '../../../assets/img/Background.jpg';

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
