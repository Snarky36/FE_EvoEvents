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
    <TabList onChange={handleChange}>
      <TabStyled label='Register' value='register' />
      <TabStyled label='Login' value='login' />
    </TabList>
  );
}
