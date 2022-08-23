import React from 'react';
import AddEventForm from './EventForm';
import ResponsiveAppBar from '../../common/NavBar';
import { CreateEventStyled, FormBoxStyled, GridCreateEventStyled } from './StyledComponents';
import { GridColorStyled, EventTitleStyled } from '../../common/StyledComponents';

export function EventPage() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ backgroundColor: '#e3f2fd' }}>
        <FormBoxStyled>
          <GridCreateEventStyled>
            <CreateEventStyled>
              <GridColorStyled>
                <EventTitleStyled variant='h4' id='addEventTitle' sx={{ color: 'black' }}>
                  Create a new event
                </EventTitleStyled>
              </GridColorStyled>

              <AddEventForm />
            </CreateEventStyled>
          </GridCreateEventStyled>
        </FormBoxStyled>
      </div>
    </>
  );
}
