import { Box } from '@material-ui/core';
import { Drawer, Snackbar } from '@mui/material';
import { forwardRef, useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Bar from './Bar';
import DrawerContent from './DrawerContent';
import { useAlert } from '../../../../contexts/AlertContext';

function Header({ title, offer, to }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = (value) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(value);
  };

  const {
    error,
    success,
    setError,
    setSuccess,
  } = useAlert();

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') return;
    setError('');
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') return;
    setSuccess('');
  };

  const Alert = forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Snackbar open={!!success} autoHideDuration={2000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          {success}
        </Alert>
      </Snackbar>
      <Snackbar open={!!error} autoHideDuration={2000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <Bar
        toggleDrawer={toggleDrawer}
        title={title}
        offer={offer}
        to={to}
      />
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={toggleDrawer(false)}
      >
        <DrawerContent toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}

export default Header;
