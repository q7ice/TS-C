import React from 'react';
import { Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import {
  List, ListItem, Typography,
} from '@mui/material';
import { useAuth } from '../../../contexts/AuthContext';
import { logoutUser } from '../../../api/auth';

function ListLink({ children, to, disabled }) {
  const navigate = useNavigate();
  return (
    <ListItem disabled={disabled} button onClick={() => navigate(to)}>
      <Typography>
        {children}
      </Typography>
    </ListItem>
  );
}

function DrawerContent({ toggleDrawer }) {
  const {
    isAuth, role, setId, setRole,
  } = useAuth();
  const logout = async () => {
    await logoutUser();
    setId(null);
    setRole(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  };
  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListLink to="/settings" disabled={!isAuth || String(role) === 'block'}>
          Настройки
        </ListLink>
        <ListLink to="/tests" disabled={!isAuth || String(role) === 'block'}>
          Тесты
        </ListLink>
        {
          String(role) === 'admin'
            ? (
              <ListLink to="/admin-panel">
                Админ панель
              </ListLink>
            ) : null
        }
        {
          isAuth
            ? (
              <ListItem button onClick={logout}>
                <Typography>
                  Выйти
                </Typography>
              </ListItem>
            )
            : (
              <ListLink to="/sign-in">
                Войти
              </ListLink>
            )
        }

      </List>
    </Box>
  );
}

export default DrawerContent;
