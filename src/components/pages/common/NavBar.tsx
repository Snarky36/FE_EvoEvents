import * as React from 'react';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import {
  AppBarStyled,
  FullNameStyled,
  ProfilePicture,
  IconButtonStyled,
  CreateEventButtonStyled,
  LogoFieldsStyled,
  UserBoxStyled,
  LinkStyled,
  PictureBoxStyled
} from './StyledComponents';
import { Link } from 'react-router-dom';
import EvozonLogo from '../../../assets/img/EvozonLogo.png';

const ResponsiveAppBar = () => {
  const { user } = useContext(UserContext);

  return (
    <AppBarStyled>
      <LogoFieldsStyled>
        <Link to='/events'>
          <PictureBoxStyled src={EvozonLogo} />
        </Link>

        <LinkStyled to='/addEvent'>
          <CreateEventButtonStyled> Create event</CreateEventButtonStyled>
        </LinkStyled>
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
