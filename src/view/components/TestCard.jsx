import React, { useState } from 'react';
import {
  Card, CardContent, CardHeader, IconButton, Menu, MenuItem,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { destroyTest } from '../../api/test';

function TestCard({
  id, title, isClosed, date, rerenderTests,
}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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
          sx={{ position: 'absolute', right: 10 }}
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
          <LockIcon sx={{
            mr: 1,
          }}
          />
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
        onClose={handleTestEdit}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleTestEdit}>
          {isClosed ? 'Открыть доступ' : 'Закрыть доступ'}
        </MenuItem>
        <MenuItem onClick={handleTestEdit}>Редактировать</MenuItem>
        <MenuItem onClick={handleTestDelete}>Удалить</MenuItem>
        <MenuItem onClick={handleTestEdit}>Статистика</MenuItem>
      </Menu>
    </Card>
  );
}

export default TestCard;
