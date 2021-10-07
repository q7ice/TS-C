import React from 'react';
import {
  AppBar, Button, IconButton, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';

function Bar({
  toggleDrawer,
  title,
  offer,
  to,
}) {
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
