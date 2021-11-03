import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Header from '../common/Header';

function SettingsPage() {
  return (
    <Box>
      <Header title="Настройки" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: '100vh',
        }}
      >
        <Container>
          Настроечки
        </Container>
      </Paper>
    </Box>
  );
}

export default SettingsPage;
