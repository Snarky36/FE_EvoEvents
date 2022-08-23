import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import { RadioGroupStyled } from './StyledComponents';

export interface AccompanyingPersonProps {
  setHasAcompanyingPerson: (boolean) => void;
}

export function AccompanyingPerson({ setHasAcompanyingPerson }: AccompanyingPersonProps) {
  const handleChange = (event) => {
    if (event.target.value === 'Yes') {
      setHasAcompanyingPerson(true);
      return;
    }
    setHasAcompanyingPerson(false);
  };

  return (
    <FormControl>
      <FormLabel> Will you bring an accompanying person to this event?</FormLabel>
      <RadioGroupStyled defaultValue='No' id='radioGroupAcompanyingPerson'>
        <FormControlLabel
          control={<Radio />}
          label='Yes'
          value='Yes'
          id='yesValueForAcompanyingPerson'
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Radio />}
          label='No'
          value='No'
          id='noValueAcompanyingPerson'
          onChange={handleChange}
        />
      </RadioGroupStyled>
    </FormControl>
  );
}
