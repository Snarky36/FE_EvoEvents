import React, { useCallback } from 'react';
import { TabList } from '@mui/lab';
import { TabStyled } from './StyledComponents';

export interface AuthTabsProps {
  readonly id: string;
  readonly currentTab: string;
  setSelectedTab: (string) => void;
}

export function AuthTabs({ id, currentTab, setSelectedTab }: AuthTabsProps) {
  const handleChange = useCallback(
    (event: React.SyntheticEvent, currentTab) => {
      setSelectedTab(currentTab);
    },
    [currentTab]
  );

  return (
    <TabList onChange={handleChange} id={id}>
      <TabStyled label='Register' value='register' />
      <TabStyled label='Login' value='login' />
    </TabList>
  );
}
