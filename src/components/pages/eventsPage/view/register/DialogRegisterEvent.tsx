import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { UserContext } from '../../../../contexts/UserContext';
import { useCallback, useState } from 'react';
import {
  AccompanyingGridStyled,
  ButtonRegisterEventStyled,
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
import { Snackbar } from '@mui/material';
import useTextFieldErrors from '../../../../../hooks/UseTextFieldErrors';
import { validateEmailRegister } from '../../../../../validators/RegisterValidators';

export interface SimpleDialogProps {
  readonly isDialogOpen: boolean;
  onClose: () => void;
}

function SimpleDialog({ onClose, isDialogOpen }: SimpleDialogProps) {
  const [hasAcompanyingPerson, setHasAcompanyingPerson] = useState('');
  const accompanyingPersonEmail = useTextFieldErrors('', validateEmailRegister);
  const { user } = React.useContext(UserContext);
  const { id } = useParams();
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleClick = async () => {
    const reservationInfo: ReservationInfo = {
      eventId: Number(id),
      userEmail: user.email,
      accompanyingPerson: accompanyingPersonEmail.value
    };
    await EventService.registerToEvent(reservationInfo);
    setOpenSnackBar(true);
  };

  const handleClose = () => {
    onClose();
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
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
  }, [accompanyingPersonEmail]);

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={isDialogOpen}
        PaperProps={{ sx: { minWidth: '900px', height: '600px', marginTop: '40px' } }}
      >
        <DialogTitleStyled>
          <b>Register to event</b>
        </DialogTitleStyled>
        <MainGridStyled container direction='row'>
          <PersonalInfoGridStyled item>
            <h1> Personal info </h1>
            <PersonalInfoRegisterEventStyled disabled label='Last name' value={`${user.lastName}`} />
            <PersonalInfoRegisterEventStyled disabled label='First name' defaultValue={`${user.firstName}`} />
            <PersonalInfoRegisterEventStyled disabled label='Company' defaultValue={`${user.company}`} />
            <PersonalInfoRegisterEventStyled disabled label='email' defaultValue={`${user.email}`} />
          </PersonalInfoGridStyled>

          <AccompanyingGridStyled item>
            <h1> Accompanying person </h1>
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
            />
          </AccompanyingGridStyled>
        </MainGridStyled>

        <GridStyled>
          <ButtonRegisterEventStyled
            variant='contained'
            disabled={accompanyingPersonEmail.hasErrors}
            onClick={handleClick}
          >
            Save
          </ButtonRegisterEventStyled>
        </GridStyled>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <AlertStyled onClose={handleClose} severity='success'>
            Registration was successful!
          </AlertStyled>
        </Snackbar>
      </Dialog>
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
      <Button variant='outlined' onClick={handleClickOpen}>
        Register
      </Button>
      <SimpleDialog isDialogOpen={isDialogOpen} onClose={handleClose} />
    </div>
  );
}
