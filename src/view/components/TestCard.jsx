import React, { useState } from 'react';
import {
  Card, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';

function TestCard({
  id, title, passedCount, isClosed, date,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card elevation={12}>
      <CardContent>
        <CardHeader
          action={(
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={handleClick} />
            </IconButton>
          )}
          title={title}
          subheader={date}
        />
        <Typography
          color="text.secondary"
          sx={{
            ml: 2,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LockIcon sx={{ mr: 2 }} />
          {isClosed ? 'Доступ закрыт' : 'Доступ закрыт'}
        </Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center', ml: 2 }} color="text.secondary">
          <GroupIcon sx={{ mr: 2 }} />
          {passedCount}
        </Typography>
      </CardContent>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          {isClosed ? 'Открыть ' : 'Закрыть '}
          доступ
        </MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        <MenuItem onClick={handleClose}>Статистика</MenuItem>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
      </Menu>
    </Card>
  );
}

export default TestCard;
