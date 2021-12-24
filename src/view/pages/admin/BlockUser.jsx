import {
  Button, Container, Paper, Snackbar, Stack, TextField, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { forwardRef, useState } from 'react';
import Header from '../../components/common/Header';
import { blockUser } from '../../../api/admin';
import { useAlert } from '../../../contexts/AlertContext';

function BlockUser() {
  const [id, setId] = useState('1');
  const handleChangeId = (e) => setId(e.target.value);

  const { showError, showSuccess } = useAlert();

  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;

  const handleBlock = async () => {
    const result = await blockUser(+id);
    if (result.error) {
      showError(result.error);
    } else if (result.message) {
      showSuccess(result.message);
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
