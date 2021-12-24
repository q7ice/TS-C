import React, { useState } from 'react';
import {
  Card, CardContent, CardHeader, IconButton, Menu, MenuItem,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { changeOpenTest, destroyTest } from '../../../api/test';

function TestCard({
  id, title, isClosed, date,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleTestEdit = () => {
    setAnchorEl(null);
    navigate(`/test-edit/${id}`);
  };
  const handleTestDelete = async () => {
    setAnchorEl(null);
    await destroyTest(id);
    navigate('/settings');
    navigate('/tests');
  };
  const handleTestChangeOpen = async () => {
    setAnchorEl(null);
    const success = await changeOpenTest(id);
    navigate('/settings');
    navigate('/tests');
  };
  const handleTakeTest = () => {
    navigate(`/take-test/${id}`);
  };

  return (
    <Card
      elevation={12}
      sx={{
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          height: '100%',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={handleClick}
          aria-label="settings"
          sx={{
            position: 'absolute',
            right: 10,
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <Typography
          color="text.primary"
          sx={{
            mb: 2,
            pr: 3,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            mb: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {isClosed ? <LockIcon sx={{ mr: 1 }} /> : <LockOpenIcon sx={{ mr: 1 }} />}
          {isClosed ? 'Доступ закрыт' : 'Доступ открыт'}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            mb: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {new Date(date).toLocaleString()}
        </Typography>
      </CardContent>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        <MenuItem onClick={handleTestChangeOpen}>
          {isClosed ? 'Открыть доступ' : 'Закрыть доступ'}
        </MenuItem>
        <MenuItem onClick={handleTestEdit}>Редактировать</MenuItem>
        <MenuItem onClick={handleTestDelete}>Удалить</MenuItem>
        <MenuItem onClick={handleTakeTest}>Пройти тест</MenuItem>
        <MenuItem onClick={handleTestEdit}>Статистика</MenuItem>
      </Menu>
    </Card>
  );
}

export default TestCard;
