import React from 'react';
import AddEventForm from '../common/AddEventForm';
import ResponsiveAppBar from '../common/NavBar';
import { FormBoxStyled } from '../common/StyledComponents';
import { CreateEventStyled, GridColorStyled,GridGlobalStyled,TitleStyled } from '../homePage/StyleComponent';
export default function EventsPage() {
 
  return (
    <>
    <ResponsiveAppBar/>
    <div>
      <FormBoxStyled >
        <GridGlobalStyled>
          <CreateEventStyled>
            <GridColorStyled >
              <TitleStyled variant='h4'>
                Add event!
              </TitleStyled>
            </GridColorStyled>
            <AddEventForm />
          </CreateEventStyled>
        </GridGlobalStyled>
      </FormBoxStyled>
    </div></>
  )
  
}
