import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useContext } from 'react';
import { FilterContext } from '../../../contexts/FilterContext';

export function FilterMenu() {
  const { setEventTypeData, setAttendingData, setViewAllData } = useContext(FilterContext);

  const handleClickEventType = async (event: React.ChangeEvent<unknown>, value: string) => {
    setEventTypeData(Number(value));
  };

  const handleClickRegistration = async (event: React.ChangeEvent<unknown>, value: string) => {
    if (value === 'all') {
      setViewAllData(true);
    } else {
      setViewAllData(false);
      setAttendingData(Boolean(value));
    }
  };

  return (
    <FormControl>
      <FormLabel id='eventTypeHeader'>Event type</FormLabel>
      <RadioGroup defaultValue='0' name='radio-buttons-group' onChange={handleClickEventType} id='eventTypeFilterMenu'>
        <FormControlLabel id='allEventsOptionEventType' value='0' control={<Radio />} label='All events' />
        <FormControlLabel id='movieOption' value='1' control={<Radio />} label='Movie' />
        <FormControlLabel id='concertOption' value='2' control={<Radio />} label='Concert' />
        <FormControlLabel id='talkOption' value='3' control={<Radio />} label='Talk' />
      </RadioGroup>
      <FormLabel id='registrationStatusHeader'>Registration status</FormLabel>
      <RadioGroup
        defaultValue='all'
        name='radio-buttons-group'
        onChange={handleClickRegistration}
        id='registrationStatusFilterMenu'
      >
        <FormControlLabel id='allEventsOptionRegistration' value='all' control={<Radio />} label='All events' />
        <FormControlLabel id='attendingOption' value='true' control={<Radio />} label='Attending' />
        <FormControlLabel id='notAttendingOption' value='' control={<Radio />} label='Not attending' />
      </RadioGroup>
    </FormControl>
  );
}
