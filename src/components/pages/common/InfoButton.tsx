import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export interface InfoButtonProps {
  readonly title: string;
}

export function InfoButton({ title }: InfoButtonProps) {
  return (
    <Tooltip title={title}>
      <IconButton>
        <InfoOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
}
