import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../../../constants/CommonConstants';
import { PaginatedRequest } from '../../../../interfaces/PaginatedRequest';
import { FilterContext } from '../../../contexts/FilterContext';

export interface FilterMenuProps {
  readonly email: string;
  fetchFilteredEvents: (PaginatedRequest) => void;
}

export function FilterMenu({ email, fetchFilteredEvents }: FilterMenuProps) {
  const { eventType, setEventTypeData, attending, setAttendingData, viewAll, setViewAllData } =
    useContext(FilterContext);
  const navigate = useNavigate();

  const handleClickEventType = async (event: React.ChangeEvent<unknown>, value: string) => {
    const paginationModel: PaginatedRequest = {
      paginationModel: { pageNumber: 1, itemsPerPage: ITEMS_PER_PAGE },
      filters: { eventType: Number(value), attending: attending }
    };
    if (viewAll === false) {
      paginationModel.filters.email = email;
    }
    setEventTypeData(Number(value));
    fetchFilteredEvents(paginationModel);
    navigate('/events/1');
  };

  const handleClickRegistration = async (event: React.ChangeEvent<unknown>, value: string) => {
    const paginationModel: PaginatedRequest = {
      paginationModel: { pageNumber: 1, itemsPerPage: ITEMS_PER_PAGE },
      filters: { eventType: eventType }
    };
    if (value === 'all') {
      setViewAllData(true);
    } else {
      paginationModel.filters.email = email;
      paginationModel.filters.attending = Boolean(value);
      setViewAllData(false);
      setAttendingData(Boolean(value));
    }
    fetchFilteredEvents(paginationModel);
    navigate('/events/1');
  };

  return (
    <FormControl>
      <FormLabel>Event type</FormLabel>
      <RadioGroup defaultValue='0' name='radio-buttons-group' onChange={handleClickEventType}>
        <FormControlLabel value='0' control={<Radio />} label='All events' />
        <FormControlLabel value='1' control={<Radio />} label='Movie' />
        <FormControlLabel value='2' control={<Radio />} label='Concert' />
        <FormControlLabel value='3' control={<Radio />} label='Talk' />
      </RadioGroup>
      <FormLabel>Registration status</FormLabel>
      <RadioGroup defaultValue='all' name='radio-buttons-group' onChange={handleClickRegistration}>
        <FormControlLabel value='all' control={<Radio />} label='All events' />
        <FormControlLabel value='true' control={<Radio />} label='Attending' />
        <FormControlLabel value='' control={<Radio />} label='Not attending' />
      </RadioGroup>
    </FormControl>
  );
}