import React, { useContext } from 'react';
import {
  AppBar, Button, IconButton, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ThemeContext from '../../../ThemeContext';

function Bar({
  toggleDrawer,
  title,
  offer,
  to,
}) {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleToggleTheme = () => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  const history = useHistory();

  const handleClickOffer = () => history.push(to);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: '0.8rem' }}
        >
          {title}
        </Typography>
        <IconButton onClick={handleToggleTheme} color="inherit">
          {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {offer && (
        <Button
          className="white"
          color="inherit"
          onClick={handleClickOffer}
        >
          <Typography
            fontSize="0.8rem"
          >
            {offer}
          </Typography>
        </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
