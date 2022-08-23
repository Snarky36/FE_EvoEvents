import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { UserContext } from '../../../../contexts/UserContext';
import { useCallback, useState } from 'react';
import {
  AccompanyingGridStyled,
  ButtonRegisterEventStyled,
  DialogLittleTitlesStyled,
  DialogTitleStyled,
  MainGridStyled,
  PersonalInfoGridStyled,
  PersonalInfoRegisterEventStyled
} from './StyledComponents';
import { AccompanyingPerson } from './AccompanyingPerson';
import { AlertStyled, GridStyled } from '../../../common/StyledComponents';
import EventService from '../../../../../api/EventService';
import ReservationInfo from '../../../../../interfaces/ReservationInfo';
import { useParams } from 'react-router-dom';
import { Alert, Box, DialogActions, Portal, Snackbar } from '@mui/material';
import useTextFieldErrors from '../../../../../hooks/UseTextFieldErrors';
import { validateEmailRegister } from '../../../../../validators/RegisterValidators';
import ErrorSnackbar from '../../../common/snackbars/ErrorSnackbar';
import SuccessSnackbar from '../../../common/snackbars/SuccessSnackbar';

export interface SimpleDialogProps {
  readonly isDialogOpen: boolean;
  onClose: () => void;
}

function SimpleDialog({ onClose, isDialogOpen }: SimpleDialogProps) {
  const [hasAcompanyingPerson, setHasAcompanyingPerson] = useState('');
  const accompanyingPersonEmail = useTextFieldErrors('', validateEmailRegister);
  const { user } = React.useContext(UserContext);
  const { id } = useParams();
  const [shouldSuccessSnackBarOpen, setShouldSuccessSnackBarOpen] = React.useState(false);
  const [shouldErrorSnackBarOpen, setShouldErrorSnackBarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [severityType, setSeverityType] = React.useState('');
  const handleClick = async () => {
    const reservationInfo: ReservationInfo = {
      eventId: Number(id),
      userEmail: user.email,
      accompanyingPerson: accompanyingPersonEmail.value
    };
    try {
      await EventService.registerToEvent(reservationInfo);
      setSnackbarMessage('Registration was successful');
      setShouldSuccessSnackBarOpen(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (e) {
      if (e.errorCode === 409) {
        setSnackbarMessage('User is already registered to that event');
      } else setSnackbarMessage(e.data);

      setShouldErrorSnackBarOpen(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
    }
  };

  const handleClose = () => {
    accompanyingPersonEmail.setValue('');
    onClose();
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason: string,
    setMessageSnackBarOpen: (value: boolean) => void
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageSnackBarOpen(false);
  };

  const onInputChange = useCallback(
    (ev) => {
      accompanyingPersonEmail.setValue(ev.target.value);
    },
    [accompanyingPersonEmail]
  );

  React.useEffect(() => {
    if (hasAcompanyingPerson) return;

    accompanyingPersonEmail.setValue('');
    accompanyingPersonEmail.setErrors('');
  }, [accompanyingPersonEmail]);

  return (
    <>
      <Box>
        <Dialog
          onClose={handleClose}
          open={isDialogOpen}
          PaperProps={{
            sx: { minWidth: '1000px', height: '600px', marginTop: '40px' }
          }}
        >
          <DialogTitleStyled>
            <b>Register to event</b>
          </DialogTitleStyled>
          <Box
            id='fadingLine'
            sx={{
              width: '65%',
              height: '3px',
              background: 'radial-gradient(circle, rgba(249,183,0,1) 2%, rgba(255,255,255,1) 100%)',
              alignSelf: 'center'
            }}
          ></Box>
          <MainGridStyled container direction='row' sx={{ display: 'flex', textAlign: 'rigth' }}>
            <PersonalInfoGridStyled item sx={{ marginLeft: '70px' }} id='gridForPersonalInfo'>
              <DialogLittleTitlesStyled> Personal info </DialogLittleTitlesStyled>
              <PersonalInfoRegisterEventStyled
                sx={{ marginBottom: '25px' }}
                variant='outlined'
                inputProps={{ readOnly: true }}
                label='Last name'
                value={`${user.lastName}`}
                id='lastNameForRegistrationToEvent'
              />
              <PersonalInfoRegisterEventStyled
                sx={{ marginBottom: '25px' }}
                inputProps={{ readOnly: true }}
                label='First name'
                defaultValue={`${user.firstName}`}
                id='firstNameForRegistrationToEvent'
              />
              <PersonalInfoRegisterEventStyled
                sx={{ marginBottom: '25px' }}
                inputProps={{ readOnly: true }}
                label='Company'
                defaultValue={`${user.company}`}
                id='companyForRegistrationToEvent'
              />
              <PersonalInfoRegisterEventStyled
                inputProps={{ readOnly: true }}
                label='Email'
                defaultValue={`${user.email}`}
                id='emailForRegistrationToEvent'
              />
            </PersonalInfoGridStyled>

            <AccompanyingGridStyled item sx={{ marginLeft: '45px' }} id='gridForAccompanyingPersonRegisterToEvent'>
              <DialogLittleTitlesStyled id='titleForAccompanyingPersonRegisterToEvent'>
                Accompanying person
              </DialogLittleTitlesStyled>
              <AccompanyingPerson setHasAcompanyingPerson={setHasAcompanyingPerson} />
              <PersonalInfoRegisterEventStyled
                label='Insert their email here...'
                disabled={!hasAcompanyingPerson}
                value={accompanyingPersonEmail.value}
                onChange={onInputChange}
                name='accompanyingPersonEmail'
                helperText={accompanyingPersonEmail.errors}
                error={accompanyingPersonEmail.hasErrors}
                onBlur={accompanyingPersonEmail.validate}
                id='fieldForAccompanyingPersonEmail'
              />
            </AccompanyingGridStyled>
          </MainGridStyled>
          <DialogActions sx={{ marginRight: '70px' }} id='buttonsForSaveAndClose'>
            <ButtonRegisterEventStyled
              sx={{ width: '100px', fontFamily: 'Work Sans', backgroundColor: 'rgba(249,183,0,1)', color: 'white' }}
              variant='outlined'
              disabled={accompanyingPersonEmail.hasErrors}
              onClick={handleClick}
              id='saveButtonRegisterToEvent'
            >
              Save
            </ButtonRegisterEventStyled>

            <ButtonRegisterEventStyled
              sx={{ width: '100px', fontFamily: 'Work Sans' }}
              variant='outlined'
              onClick={handleClose}
              id='closeButtonRegisterToEvent'
            >
              Close
            </ButtonRegisterEventStyled>
          </DialogActions>

          <ErrorSnackbar
            open={shouldErrorSnackBarOpen}
            autoHideDuration={2000}
            onClose={(event, reason) => handleCloseSnackbar(event, reason, setShouldErrorSnackBarOpen)}
            alertOnClose={handleClose}
            message={snackbarMessage}
          />

          <SuccessSnackbar
            open={shouldSuccessSnackBarOpen}
            autoHideDuration={2000}
            onClose={(event, reason) => handleCloseSnackbar(event, reason, setShouldSuccessSnackBarOpen)}
            alertOnClose={handleClose}
            message={snackbarMessage}
          />
        </Dialog>
      </Box>
    </>
  );
}

export default function RegisterToEventForm() {
  const [isDialogOpen, setisDialogOpen] = React.useState(false);
  const handleClickOpen = () => {
    setisDialogOpen(true);
  };
  const handleClose = () => {
    setisDialogOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen} id='registerToEventButton'>
        Register
      </Button>
      <SimpleDialog isDialogOpen={isDialogOpen} onClose={handleClose} />
    </div>
  );
}
