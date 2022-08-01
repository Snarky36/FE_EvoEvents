import React from 'react';
import { TabList } from '@mui/lab';
import { Tab } from '@mui/material';

export interface AuthTabsProps {
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export function AuthTabs({ onChange }: AuthTabsProps) {
  return (
    <TabList onChange={onChange}>
      <Tab label='Register' value='register' />
      <Tab label='Login' value='login' />
    </TabList>
  );
}
