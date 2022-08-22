import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export interface InfoButtonProps {
  readonly id: string;
  readonly title: string;
}

export function InfoButton({ id, title }: InfoButtonProps) {
  return (
    <Tooltip id={id} title={title}>
      <IconButton>
        <InfoOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
}
