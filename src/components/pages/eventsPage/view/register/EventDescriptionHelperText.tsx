import { Typography } from '@mui/material';
import React from 'react';

export interface CustomHelperTextProps {
  readonly characterDescriptionLimit: number;
  readonly description: string;
  readonly errorText: string;
}
export const EventDescriptionHelperText = ({
  characterDescriptionLimit,
  description,
  errorText
}: CustomHelperTextProps) => {
  if (errorText === '') return <span>{`${description.length}/${characterDescriptionLimit}`}</span>;
  return (
    <>
      <Typography paragraph sx={{ marginBottom: '0px' }}>
        {' '}
        {`${description.length}/${characterDescriptionLimit}`}{' '}
      </Typography>
      <Typography paragraph> {`${errorText}`} </Typography>
    </>
  );
};
