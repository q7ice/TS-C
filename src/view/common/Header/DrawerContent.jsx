import React from 'react';
import { Box } from '@material-ui/core';
import {
  List, ListItem, Typography,
} from '@mui/material';
import { useHistory } from 'react-router-dom';

function ListLink({ to, children }) {
  const history = useHistory();
  const handleClick = () => { history.push(to); };
  return (
    <ListItem button onClick={handleClick}>
      <Typography>
        {children}
      </Typography>
    </ListItem>
  );
}

function DrawerContent({ toggleDrawer }) {
  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListLink to="/settings">
          Настройки
        </ListLink>
        <ListLink to="/tests">
          Тесты
        </ListLink>
        <ListLink to="/sign-in">
          Войти
        </ListLink>
      </List>
    </Box>
  );
}

export default DrawerContent;
