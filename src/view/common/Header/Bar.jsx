import React, { useContext } from 'react';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../../../contexts/ThemeContext';

function Bar({
  toggleDrawer,
  title,
}) {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleToggleTheme = () => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

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
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
