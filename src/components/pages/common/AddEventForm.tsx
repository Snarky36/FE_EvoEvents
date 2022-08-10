import React, { useCallback, useMemo, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import { EventTypes } from '../../../enums/EventTypes';
import {
  GridColorStyled,
  TextFieldEventStyled,
  DescriptionTextFieldStyled,
  GridStyled
} from '../homePage/StyleComponent';
import EventService from '../../../api/EventService';
import useTextFieldErrors from '../../../hooks/UseTextFieldErrors';
import { validateEventName, validateEventCapacity } from '../../../validators/EventTextFieldValidators';
import { filterIndexedEnumsKeys } from '../../../utils/ObjectUtils';
import { AlertStyled, ButtonStyled, FormHelperTextStyled } from './StyledComponents';

const CHARACTER_DESCRIPTION_LIMIT = 2000;
enum AddEventFormFields {
  type = 'type',
  name = 'name',
  capacity = 'capacity',
  description = 'description'
}

export function AddEventForm() {
  const [type, setType] = useState('');
  const name = useTextFieldErrors('', validateEventName);
  const capacity = useTextFieldErrors('0', validateEventCapacity);
  const description = useTextFieldErrors('', null);
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
      [AddEventFormFields.capacity]: capacity
    }),
    [name, description, capacity]
  );

  const onInputChange = useCallback(
    (ev) => {
      formFieldsManagers[ev.target.name].setValue(ev.target.value);
    },
    [formFieldsManagers]
  );

  const trimDescriptionInput = useCallback((event) => {
    return event.replace(/\s+/g, ' ').trim();
  }, []);

  const handleClick = async () => {
    const descriptionToSend = trimDescriptionInput(description.value);
    await EventService.addEvent({
      eventType: parseInt(type),
      name: name.value,
      description: descriptionToSend.substring(0, 2000),
      maxNoAttendees: parseInt(capacity.value),
      city: 0,
      country: 0,
      location: ''
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
            helperText={`${description.value.length}/${CHARACTER_DESCRIPTION_LIMIT}`}
            error={description.hasErrors}
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

        <GridStyled>
          <ButtonStyled
            variant='contained'
            disabled={
              name.hasErrors ||
              capacity.hasErrors ||
              description.hasErrors ||
              type === '' ||
              name.value === '' ||
              capacity.value === '0'
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
