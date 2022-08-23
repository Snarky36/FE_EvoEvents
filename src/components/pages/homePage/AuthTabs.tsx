import React, { useCallback } from 'react';
import { TabList } from '@mui/lab';
import { TabStyled } from './StyledComponents';

export interface AuthTabsProps {
  readonly currentTab: string;
  setSelectedTab: (string) => void;
}

export function AuthTabs({ currentTab, setSelectedTab }: AuthTabsProps) {
  const handleChange = useCallback(
    (event: React.SyntheticEvent, currentTab) => {
      setSelectedTab(currentTab);
    },
    [currentTab]
  );

  return (
    <TabList onChange={handleChange} id='tabListChanger'>
      <TabStyled label='Register' value='register' id='registerTab' aria-labelledby='register' />
      <TabStyled label='Login' value='login' id='loginTab' aria-labelledby='login' />
    </TabList>
  );
}
