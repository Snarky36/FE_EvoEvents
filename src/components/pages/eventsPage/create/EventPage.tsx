import React from 'react';
import AddEventForm from './EventForm';
import ResponsiveAppBar from '../../common/NavBar';
import { CreateEventStyled, FormBoxStyled, TitleStyled } from './StyledComponents';
import { GridColorStyled, GridGlobalStyled } from '../../common/StyledComponents';

export function EventPage() {
  return (
    <>
      <ResponsiveAppBar />
      <FormBoxStyled>
        <GridGlobalStyled>
          <CreateEventStyled>
            <GridColorStyled>
              <TitleStyled variant='h4'>Add event!</TitleStyled>
            </GridColorStyled>
            <AddEventForm />
          </CreateEventStyled>
        </GridGlobalStyled>
      </FormBoxStyled>
    </>
  );
}
