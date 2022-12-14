import * as React from 'react';
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
import { UserContext } from '../../contexts/UserContext';

const ResponsiveAppBar = () => {
  const { user } = React.useContext(UserContext);

  return (
    <AppBarStyled>
      <LogoFieldsStyled>
        <Link to='/events' id='linkToEvents'>
          <PictureBoxStyled src={EvozonLogo} id='pictureFromNavbar' />
        </Link>

        <LinkStyled to='/addEvent' id='addEventId'>
          <CreateEventButtonStyled id='createEventButton'> Create event</CreateEventButtonStyled>
        </LinkStyled>
      </LogoFieldsStyled>

      <UserBoxStyled>
        <FullNameStyled variant='h6' noWrap id='fullnameFromNavbar'>
          {`${user.firstName} ${user.lastName}`}
        </FullNameStyled>
        <IconButtonStyled disabled sx={{ p: 0 }} id='fullnameFromNavbar'>
          <ProfilePicture alt='Remy Sharp' id='profilePictureFromNavbar' />
        </IconButtonStyled>
      </UserBoxStyled>
    </AppBarStyled>
  );
};
export default ResponsiveAppBar;
