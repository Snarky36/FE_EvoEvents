import React, { useState } from 'react';
import { Box, Typography, Button, Tooltip } from '@mui/material';
import { InfoButton } from './InfoButton';
import { ButtonUploadImageEventStyled } from './StyledComponents';

export const FileUploader = ({ successMessage, toolTipMessage, validator, onFileChange }) => {
  const [helperText, setHelperText] = useState('');
  const [hasError, setHasError] = useState(false);

  const isEmptyString = (str: string) => {
    return str.length === 0;
  };
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const errorMessage = validator(file);
    const isCurrentFileValid = isEmptyString(errorMessage);
    setHelperText(isCurrentFileValid ? successMessage : errorMessage);
    setHasError(!isCurrentFileValid);

    if (isCurrentFileValid) {
      onFileChange(file);
    } else {
      onFileChange(null);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          marginLeft: '332px',
          marginTop: '30px',
          height: '50px',
          width: '200px',
          fontFamily: 'Work Sans',
          borderWidth: 'thick'
        }}
        display='flex'
        justifyContent='center'
        alignContent='center'
      >
        <Button id='buttonForUploadImg' variant='outlined' component='label'>
          Upload Image
          <input type='file' hidden onChange={handleFileInput} />
        </Button>

        <InfoButton id='infoButtonUploadPic' title={toolTipMessage} />
      </Box>

      {helperText && (
        <Typography id='messageForUploadImg' variant='subtitle1'>
          {helperText}
        </Typography>
      )}
    </Box>
  );
};
