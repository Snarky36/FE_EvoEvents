import React, { useCallback, useMemo, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import { EventTypes } from '../../../../enums/EventTypes';
import EventService from '../../../../api/EventService';
import useTextFieldErrors from '../../../../hooks/UseTextFieldErrors';
import {
  validateEventName,
  validateEventCapacity,
  validateLocation,
  validateDescription
} from '../../../../validators/EventTextFieldValidators';
import { filterIndexedEnumsKeys } from '../../../../utils/ObjectUtils';
import { CityEnum } from '../../../../enums/CityEnum';
import { CountryEnum } from '../../../../enums/CountryEnum';
import { CHARACTER_DESCRIPTION_LIMIT } from '../../../../constants/CommonConstants';
import { EventDescriptionHelperText } from '../view/register/EventDescriptionHelperText';
import { AlertStyled, GridColorStyled, GridStyled } from '../../common/StyledComponents';
import {
  FormHelperTextStyled,
  ButtonStyled,
  TextFieldEventStyled,
  DescriptionTextFieldStyled
} from './StyledComponents';

enum AddEventFormFields {
  type = 'type',
  name = 'name',
  capacity = 'capacity',
  description = 'description',
  city = 'city',
  country = 'country',
  location = 'location'
}

export default function AddEventForm() {
  const [type, setType] = useState('');
  const name = useTextFieldErrors('', validateEventName);
  const capacity = useTextFieldErrors('', validateEventCapacity);
  const description = useTextFieldErrors('', validateDescription);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const location = useTextFieldErrors('', validateLocation);
  const [open, setOpen] = React.useState(false);
  const eventTypesOptions = useMemo(() => {
    return filterIndexedEnumsKeys(EventTypes).map((typeName) => {
      const typeId = EventTypes[typeName];
      return (
        <MenuItem key={`event-type-option-${typeId}`} value={typeId}>
          {typeName}
        </MenuItem>
      );
    });
  }, []);

  const cityTypesOptions = useMemo(() => {
    return filterIndexedEnumsKeys(CityEnum).map((typeName) => {
      const typeId = CityEnum[typeName];
      return (
        <MenuItem key={`city-type-option-${typeId}`} value={typeId}>
          {typeName}
        </MenuItem>
      );
    });
  }, []);

  const countryTypesOptions = useMemo(() => {
    return filterIndexedEnumsKeys(CountryEnum).map((typeName) => {
      const typeId = CountryEnum[typeName];
      return (
        <MenuItem key={`country-type-option-${typeId}`} value={typeId}>
          {typeName}
        </MenuItem>
      );
    });
  }, []);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const formFieldsManagers = useMemo(
    () => ({
      [AddEventFormFields.name]: name,
      [AddEventFormFields.description]: description,
      [AddEventFormFields.capacity]: capacity,
      [AddEventFormFields.country]: country,
      [AddEventFormFields.city]: city,
      [AddEventFormFields.location]: location
    }),
    [name, description, capacity, country, city, location]
  );

  const onInputChange = useCallback(
    (ev) => {
      formFieldsManagers[ev.target.name].setValue(ev.target.value);
    },
    [formFieldsManagers]
  );

  const trimDescriptionInput = useCallback((event) => {
    return event.trim();
  }, []);

  const handleClick = async () => {
    const descriptionToSend = trimDescriptionInput(description.value);
    await EventService.addEvent({
      eventType: parseInt(type),
      name: name.value,
      description: descriptionToSend.substring(0, 2000),
      maxNoAttendees: parseInt(capacity.value),
      city: parseInt(city),
      country: parseInt(country),
      location: location.value
    });
    setOpen(true);
  };

  return (
    <div>
      <Box sx={{ paddingLeft: '320px', paddingTop: '10px' }}>
        <FormControl fullWidth>
          <InputLabel>Event type</InputLabel>
          <Select
            required
            value={type}
            label='type'
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            {eventTypesOptions}
          </Select>
          <FormHelperTextStyled>*Required</FormHelperTextStyled>
        </FormControl>

        <GridColorStyled>
          <TextFieldEventStyled
            id='outlined-basic'
            label='Event name'
            name={AddEventFormFields.name}
            helperText={name.errors}
            error={name.hasErrors}
            onChange={onInputChange}
            onBlur={name.validate}
            value={name.value}
            variant='outlined'
            placeholder='Event name'
          />
        </GridColorStyled>

        <GridColorStyled>
          <DescriptionTextFieldStyled
            label='Description'
            name={AddEventFormFields.description}
            inputProps={{
              maxLength: CHARACTER_DESCRIPTION_LIMIT
            }}
            helperText={
              <EventDescriptionHelperText
                characterDescriptionLimit={CHARACTER_DESCRIPTION_LIMIT}
                description={description.value}
                errorText={description.errors as string}
              />
            }
            error={description.hasErrors}
            onBlur={description.validate}
            onChange={onInputChange}
            value={description.value}
            variant='outlined'
            placeholder='Description'
            multiline
            rows={7}
            InputLabelProps={{ shrink: false }}
          />
        </GridColorStyled>

        <GridColorStyled>
          <TextFieldEventStyled
            id='outlined-basic'
            label='Capacity'
            helperText={capacity.errors}
            error={capacity.hasErrors}
            name={AddEventFormFields.capacity}
            onChange={onInputChange}
            onBlur={capacity.validate}
            value={capacity.value}
            variant='outlined'
            type='number'
            InputProps={{ inputProps: { min: 1 } }}
            placeholder='Capacity'
          />
          <FormHelperTextStyled>*Required</FormHelperTextStyled>
        </GridColorStyled>

        <div>
          <InputLabel>City</InputLabel>
          <Select
            required
            label='City'
            value={city}
            sx={{ width: '100%' }}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            {cityTypesOptions}
          </Select>
          <FormHelperTextStyled>*Required</FormHelperTextStyled>
        </div>

        <div>
          <InputLabel>Country</InputLabel>
          <Select
            label='Country'
            required
            value={country}
            sx={{ width: '100%' }}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {countryTypesOptions}
          </Select>

          <FormHelperTextStyled>*Required</FormHelperTextStyled>
        </div>

        <GridColorStyled>
          <TextFieldEventStyled
            label='Location'
            name={AddEventFormFields.location}
            helperText={location.errors}
            error={location.hasErrors}
            onChange={onInputChange}
            onBlur={location.validate}
            value={location.value}
            variant='outlined'
            placeholder='Location'
          />
        </GridColorStyled>

        <GridStyled>
          <ButtonStyled
            variant='contained'
            disabled={
              name.hasErrors ||
              location.hasErrors ||
              city === '' ||
              country === '' ||
              capacity.hasErrors ||
              description.hasErrors ||
              type === '' ||
              name.value === '' ||
              capacity.value === '0' ||
              capacity.value === ''
            }
            onClick={handleClick}
          >
            Save
          </ButtonStyled>
        </GridStyled>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <AlertStyled onClose={handleClose} severity='success'>
          Event was added successfully!
        </AlertStyled>
      </Snackbar>
    </div>
  );
}
