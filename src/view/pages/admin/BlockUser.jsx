import {
  Button, Container, Paper, Snackbar, Stack, TextField, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { forwardRef, useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Header from '../../common/Header';
import { blockUser } from '../../../api/admin';

const Alert = forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function BlockUser() {
  const [id, setId] = useState('1');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChangeId = (e) => setId(e.target.value);

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') return;
    setError(false);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') return;
    setSuccess(false);
  };

  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;

  const handleBlock = async () => {
    const result = await blockUser(+id);
    if (result.error) {
      setError(true);
      setErrorMessage(result.error);
    } else if (result.message) {
      setSuccess(true);
      setSuccessMessage(result.message);
    }
  };
  return (
    <Box>
      <Header title="Блокировка пользователей" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: minBarHeight,
        }}
      >
        <Snackbar open={success} autoHideDuration={2000} onClose={handleCloseSuccess}>
          <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
            {successMessage}
          </Alert>
        </Snackbar>
        <Snackbar open={error} autoHideDuration={2000} onClose={handleCloseError}>
          <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        </Snackbar>
        <Container>
          <Stack alignItems="center" spacing={2} sx={{ mt: 2 }}>
            <TextField
              onChange={handleChangeId}
              value={id}
              type="number"
              label="Идентификатор(ID)"
            />
            <Button
              variant="contained"
              color="error"
              onClick={handleBlock}
            >
              Заблокировать
            </Button>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default BlockUser;
