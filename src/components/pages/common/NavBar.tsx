import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EvozonLogo from '../../../assets/img/EvozonLogo.png';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import MockupText from './MockupText';
import { AppBarStyled, FullNameStyled, LogoStyled, ProfilePicture, IconPositionStyled } from './StyledComponents';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <AppBarStyled>
        <div>
          <LogoStyled>
            <Link to='/events'>
              <Box component='img' src={EvozonLogo} sx={{ width: '25%' }} />
            </Link>
          </LogoStyled>
          <IconPositionStyled>
            <IconButton disabled sx={{ p: 0 }}>
              <ProfilePicture alt='Remy Sharp' />
            </IconButton>
          </IconPositionStyled>
          <FullNameStyled variant='h6' noWrap>
            {`${user.firstName} ${user.lastName}`}
          </FullNameStyled>
        </div>
      </AppBarStyled>
      <MockupText />
    </div>
  );
};
export default ResponsiveAppBar;
