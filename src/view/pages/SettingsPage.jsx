import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Paper, useMediaQuery } from '@mui/material';
import Header from '../common/Header';

function SettingsPage() {
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
          Настроечки
        </Container>
      </Paper>
    </Box>
  );
}

export default SettingsPage;
