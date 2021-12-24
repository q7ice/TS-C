import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  Button, CircularProgress, Grid,
  Paper, Stack, TextField, useMediaQuery,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { changeName, getPersonalData } from '../../../api/auth';
import { useAlert } from '../../../contexts/AlertContext';

function SettingsPage() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const handleChangeName = (e) => setName(e.target.value);
  const { showError, showSuccess } = useAlert();

  useEffect(() => {
    const run = async () => {
      const data = await getPersonalData();
      setName(data.name);
      setIsLoading(false);
    };
    run().catch();
  }, []);

  const handleSubmitName = async () => {
    const answer = await changeName(name);
    if (answer.error) {
      showError(answer.error);
    } else {
      showSuccess(answer.message);
    }
  };

  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;
  return (
    <Box>
      <Header title="Настройки" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: minBarHeight,
        }}
      >
        <Container>
          {
            isLoading ? (
              <Grid container justifyContent="center" sx={{ mt: 2 }}><CircularProgress size={100} /></Grid>
            ) : (
              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 2 }}
              >
                <TextField
                  value={name}
                  onChange={handleChangeName}
                  label="ФИО"
                  fullWidth
                />
                <Button
                  variant="contained"
                  onClick={handleSubmitName}
                >
                  <SaveIcon />
                </Button>
              </Stack>
            )
          }
        </Container>
      </Paper>
    </Box>
  );
}

export default SettingsPage;
