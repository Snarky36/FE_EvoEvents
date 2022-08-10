import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { UserContext } from '../../../../contexts/UserContext';
import { useState } from 'react';
import {
  AccompanyingGridStyled,
  ButtonRegisterEventStyled,
  DialogTitleStyled,
  MainGridStyled,
  PersonalInfoGridStyled,
  TextFieldRegisterEventStyled
} from './StyledComponents';
import { AccompanyingPerson } from './AccompanyingPerson';
import { GridStyled } from '../../../common/StyledComponents';
import EventService from '../../../../../api/EventService';
import ReservationInfo from '../../../../../interfaces/ReservationInfo';
import EmailsForReservation from '../../../../../interfaces/EmailsForReservation';

export interface SimpleDialogProps {
  readonly isDialogOpen: boolean;
  onClose: () => void;
}

function SimpleDialog({ onClose, isDialogOpen }: SimpleDialogProps) {
  const [hasAcompanyingPerson, setHasAcompanyingPerson] = useState('');
  const [accompanyingPersonEmail, setAccompanyingPersonEmail] = useState('');
  const { user } = React.useContext(UserContext);

  const handleClick = async () => {
    const reservationInfo: ReservationInfo = {
      eventId: 1,
      userEmail: user.email,
      accompanyingPersonEmail: accompanyingPersonEmail
    };
    await EventService.registerToEvent(reservationInfo);
  };

  const handleClose = () => {
    onClose();
  };

  const onInputChange = React.useCallback(
    (event) => {
      setAccompanyingPersonEmail(event.target.value);
    },
    [accompanyingPersonEmail]
  );
  React.useEffect(() => {
    if (hasAcompanyingPerson) return;

    setAccompanyingPersonEmail('');
  }, [hasAcompanyingPerson]);

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
            <TextFieldRegisterEventStyled disabled label='Last name' value={`${user.lastName}`} />
            <TextFieldRegisterEventStyled disabled label='First name' defaultValue={`${user.firstName}`} />
            <TextFieldRegisterEventStyled disabled label='Company' defaultValue={`${user.company}`} />
            <TextFieldRegisterEventStyled disabled label='email' defaultValue={`${user.email}`} />
          </PersonalInfoGridStyled>

          <AccompanyingGridStyled item>
            <h1> Accompanying person </h1>
            <AccompanyingPerson setHasAcompanyingPerson={setHasAcompanyingPerson} />
            <TextFieldRegisterEventStyled
              label='Insert their email here...'
              disabled={!hasAcompanyingPerson}
              value={accompanyingPersonEmail}
              onChange={onInputChange}
            />
          </AccompanyingGridStyled>
        </MainGridStyled>

        <GridStyled>
          <ButtonRegisterEventStyled
            variant='contained'
            // disabled={

            // }
            onClick={handleClick}
          >
            Save
          </ButtonRegisterEventStyled>
        </GridStyled>
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
        Open simple dialog
      </Button>
      <SimpleDialog isDialogOpen={isDialogOpen} onClose={handleClose} />
    </div>
  );
}
