import * as React from 'react';
import Box from '@mui/material/Box';
import EvozonLogo from '../../../assets/img/EvozonLogo.png';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { AppBarStyled, FullNameStyled, ProfilePicture, IconButtonStyled, CreateEventButtonStyled, LogoFieldsStyled, UserBoxStyled } from './StyledComponents';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const { user } = useContext(UserContext);

  return (
      <AppBarStyled>
        <LogoFieldsStyled >
          <Link to='/events' >
            <Box component='img' src={EvozonLogo} sx={{ maxHeight:'50px', marginLeft: '40px', marginRight: '10px' }}/>
          </Link>

          <Link  style={{ textDecoration: 'none' }} to='/addEvent'>
            <CreateEventButtonStyled> Create event</CreateEventButtonStyled>
          </Link>
        </LogoFieldsStyled>

        <UserBoxStyled>
          <FullNameStyled variant='h6' noWrap>
            {`${user.firstName} ${user.lastName}`}
          </FullNameStyled>
          <IconButtonStyled disabled sx={{ p: 0 }}>
            <ProfilePicture alt='Remy Sharp' />
          </IconButtonStyled>
        </UserBoxStyled>
      </AppBarStyled>
  );
};
export default ResponsiveAppBar;
