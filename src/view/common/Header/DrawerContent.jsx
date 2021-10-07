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
      <Typography
        fontSize="0.8rem"
        color="rgba(0, 0, 0, 0.87)"
      >
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
        <ListLink to="sign-in">
          Войти
        </ListLink>
        <ListLink to="settings">
          Настройки
        </ListLink>
        <ListLink to="test-editor">
          Редактор тестов
        </ListLink>
      </List>
    </Box>
  );
}

export default DrawerContent;
