import React, { useCallback, useMemo, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
import { EventTypes } from '../../../../enums/EventTypes';
import EventService from '../../../../api/EventService';
import useTextFieldErrors from '../../../../hooks/UseTextFieldErrors';
import {
  validateEventName,
  validateEventCapacity,
  validateLocation,
  validateDescription,
  validateDate
} from '../../../../validators/EventTextFieldValidators';
import { filterIndexedEnumsKeys } from '../../../../utils/ObjectUtils';
import { CityEnum } from '../../../../enums/CityEnum';
import { CountryEnum } from '../../../../enums/CountryEnum';
import { CHARACTER_DESCRIPTION_LIMIT } from '../../../../constants/CommonConstants';
import { EventDescriptionHelperText } from '../view/register/EventDescriptionHelperText';
import { AlertStyled, GridColorStyled, GridStyled } from '../../common/StyledComponents';
import {
  TextFieldEventStyled,
  DescriptionTextFieldStyled,
  CreateEventGridStyled,
  MainInfoEventGridStyled,
  LocationGridStyled,
  DescriptionGridStyled,
  DateGridStyled,
  StartingDateGridStyled,
  EndingDateGridStyled,
  SaveButtonStyled
} from './StyledComponents';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import useTimeframe from '../../../../hooks/UseTimeframe';
import { DateRangeModel } from '../../../../interfaces/DateRangeModel';
import EventObject from '../../../../interfaces/Event';
import { FileUploader } from '../../common/FileUploader';
import { validateImage } from '../../../../hooks/UseFileErrors';
enum AddEventFormFields {
  type = 'type',
  name = 'name',
  capacity = 'capacity',
  description = 'description',
  city = 'city',
  country = 'country',
  location = 'location',
  eventImage = 'eventImage'
}

const startingDate = new Date();
const endingDate = new Date();
startingDate.setHours(startingDate.getHours() + 1);
endingDate.setHours(endingDate.getHours() + 2);

export default function AddEventForm() {
  const [type, setType] = useState('');
  const name = useTextFieldErrors('', validateEventName);
  const capacity = useTextFieldErrors('', validateEventCapacity);
  const description = useTextFieldErrors('', validateDescription);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const location = useTextFieldErrors('', validateLocation);
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const timeframe = useTimeframe(startingDate, endingDate, validateDate);
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
      [AddEventFormFields.location]: location,
      [AddEventFormFields.eventImage]: selectedImage
    }),
    [name, description, capacity, country, city, location, selectedImage]
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
    timeframe.validateStartingDate();
    timeframe.validateEndingDate();
    const descriptionToSend = trimDescriptionInput(description.value);
    const dateRangeModel: DateRangeModel = { fromDate: timeframe.firstValue, toDate: timeframe.secondValue };
    const eventObject: EventObject = {
      name: name.value,
      eventType: Number(type),
      description: descriptionToSend,
      maxNoAttendees: Number(capacity.value),
      city: Number(city),
      country: Number(country),
      location: location.value,
      dateRangeModel: { fromDate: dateRangeModel.fromDate, toDate: dateRangeModel.toDate },
      eventImage: selectedImage
    };
    await EventService.addEvent(eventObject);
    setOpen(true);
  };

  const handleStartingDateTimeChange = useCallback((newValue: Date | null) => {
    timeframe.validateStartingDate();
    timeframe.setFirstValue(newValue);
  }, []);

  const handleEndingDateTimeChange = useCallback((newValue: Date | null) => {
    timeframe.validateEndingDate();
    timeframe.setSecondValue(newValue);
  }, []);

  return (
    <div>
      <CreateEventGridStyled container direction='row'>
        <MainInfoEventGridStyled>
          <FormControl fullWidth id='formForEventType'>
            <InputLabel id='inputLabelForEventType'>Type*</InputLabel>
            <Select
              required
              value={type}
              label='type'
              onChange={(e) => {
                setType(e.target.value);
              }}
              id='selectForEventType'
            >
              {eventTypesOptions}
            </Select>
          </FormControl>
          <br></br>
          <GridColorStyled id='gridForEventName'>
            <TextFieldEventStyled
              sx={{ marginBottom: '0px' }}
              id='inputForEventName'
              autoComplete='off'
              label='Event name*'
              name={AddEventFormFields.name}
              helperText={name.errors}
              error={name.hasErrors}
              onChange={onInputChange}
              onBlur={name.validate}
              value={name.value}
              variant='outlined'
              placeholder='Event name*'
            />
          </GridColorStyled>

          <GridColorStyled id='gridForEventCapacity' sx={{ marginTop: '10px' }}>
            <TextFieldEventStyled
              sx={{ marginBottom: '0px' }}
              id='inputForCapacity'
              label='Capacity*'
              helperText={capacity.errors}
              error={capacity.hasErrors}
              name={AddEventFormFields.capacity}
              onChange={onInputChange}
              onBlur={capacity.validate}
              value={capacity.value}
              variant='outlined'
              type='number'
              InputProps={{ inputProps: { min: 1 } }}
              placeholder='Capacity*'
            />
          </GridColorStyled>
        </MainInfoEventGridStyled>

        <LocationGridStyled id='addressContainerForEvent'>
          <FormControl fullWidth id='formForCity'>
            <InputLabel>City*</InputLabel>
            <Select
              id='dropdownForCity'
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
          </FormControl>
          <br></br>
          <FormControl sx={{ marginTop: '10px' }} fullWidth id='formForCountry'>
            <InputLabel>Country*</InputLabel>
            <Select
              id='dropdownForCountry'
              label='Country*'
              required
              value={country}
              sx={{ width: '100%' }}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {countryTypesOptions}
            </Select>
          </FormControl>
          <GridColorStyled id='gridForLocation' sx={{ marginBottom: '0px' }}>
            <TextFieldEventStyled
              id='inputForLocation'
              autoComplete='off'
              label='Location*'
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
        </LocationGridStyled>
      </CreateEventGridStyled>

      <DescriptionGridStyled id='descriptionContainerForEvent'>
        <DescriptionTextFieldStyled
          id='inputForDescription'
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
          placeholder='Description*'
          multiline
          rows={7}
          InputLabelProps={{ shrink: false }}
        />
      </DescriptionGridStyled>

      <DateGridStyled container direction='row' id='containerForDateEvent'>
        <StartingDateGridStyled>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            id='providerForStartingDateEvent'
            sx={{ backgroundColor: 'transparent' }}
          >
            <DateTimePicker
              label='Starting date'
              value={timeframe.firstValue}
              disablePast
              onChange={handleStartingDateTimeChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  helperText={timeframe.startingDateErrors}
                  onBlur={timeframe.validateStartingDate}
                  error={timeframe.hasStartingDateErrors}
                  FormHelperTextProps={{ id: 'startDateError' }}
                />
              )}
              InputProps={{ id: 'startDateField' }}
            />
          </LocalizationProvider>
        </StartingDateGridStyled>

        <EndingDateGridStyled>
          <LocalizationProvider dateAdapter={AdapterDateFns} id='providerForEndDateEvent'>
            <DateTimePicker
              label='Ending date'
              value={timeframe.secondValue}
              disablePast
              onChange={handleEndingDateTimeChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  helperText={timeframe.endingDateErrors}
                  onBlur={timeframe.validateEndingDate}
                  error={timeframe.hasEndingDateErrors}
                  FormHelperTextProps={{ id: 'endDateError' }}
                />
              )}
              InputProps={{ id: 'endDateField' }}
            />
          </LocalizationProvider>
        </EndingDateGridStyled>
      </DateGridStyled>

      <FileUploader
        successMessage='File uploaded successfully'
        toolTipMessage='File cannot exceed more than 5MB, must be .png/.jpg./jpeg'
        validator={validateImage}
        onFileChange={setSelectedImage}
      />

      <GridStyled>
        <SaveButtonStyled
          id='createEventButton'
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
            capacity.value === '' ||
            timeframe.firstValue === timeframe.secondValue ||
            timeframe.hasEndingDateErrors ||
            timeframe.hasStartingDateErrors
          }
          onClick={handleClick}
        >
          Save
        </SaveButtonStyled>
      </GridStyled>
      <Snackbar
        id='snackbarForCreateEvent'
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <AlertStyled onClose={handleClose} severity='success' id='alertForSuccessfulCreationOfEvent'>
          Event was added successfully!
        </AlertStyled>
      </Snackbar>
    </div>
  );
}
