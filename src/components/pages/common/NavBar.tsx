import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import EvozonLogo from '../../../assets/img/EvozonLogo.png';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ResponsiveAppBar = () => {
  const { palette } = useTheme();
  const { user } = useContext(UserContext);

  return (
    <AppBar position='static' sx={{ height: '8%', width: '100%', float: 'left', paddingTop: '10px' }}>
      <div>
        <Typography
          component='a'
          href='/home'
          sx={{ textAlign: 'left', marginLeft: '35px', paddingTop: '0.5%', width: '30%', float: 'left' }}>
          <Box
            component='img'
            src={EvozonLogo}
            sx={{ width: '25%' }}
          />
        </Typography>

        <Typography
          sx={{
            textAlign: 'right', paddingTop: '0.4%', float: 'right', paddingRight: '3%'

          }}>

          <IconButton disabled sx={{ p: 0 }}>
            <Avatar alt='Remy Sharp'
              sx={{ backgroundColor: palette.primary.light, color: palette.primary.main }}
            />
          </IconButton>
        </Typography>

        <Typography
          variant='h6'
          noWrap
          sx={{
            textAlign: 'right', paddingTop: '0.4%', float: 'right', paddingRight: '1%', color: palette.primary.light, fontFamily: 'Maven Pro'
          }}>
          {`${user.firstName} ${user.lastName}`}

        </Typography>
      </div>
    </AppBar>
  );
};
export default ResponsiveAppBar;
