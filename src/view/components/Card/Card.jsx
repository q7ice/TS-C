import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Menu, MenuItem } from '@mui/material';
import styles from '../../pages/TestsPage.module.scss';

function Card({
  title, passedCount, isClosed, date,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <span>{title}</span>
        <MoreVertIcon onClick={handleClick} sx={{ fontSize: '1rem', cursor: 'pointer' }} />
      </div>
      <div className={styles.cardProperty}>
        <GroupIcon sx={{ fontSize: '0.8rem' }} />
        <span>{passedCount}</span>
      </div>
      <div className={styles.cardProperty}>
        <LockIcon sx={{ fontSize: '0.8rem' }} />
        <span>{isClosed ? 'Доступ закрыт' : 'Доступ открыт'}</span>
      </div>
      <div className={styles.cardProperty}>
        <AccessTimeIcon sx={{ fontSize: '0.8rem' }} />
        <span>{date}</span>
      </div>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ fontSize: '0.6rem' }} onClick={handleClose}>Изменить</MenuItem>
        <MenuItem sx={{ fontSize: '0.6rem' }} onClick={handleClose}>Удалить</MenuItem>
        <MenuItem sx={{ fontSize: '0.6rem' }} onClick={handleClose}>Статистика</MenuItem>
        <MenuItem sx={{ fontSize: '0.6rem' }} onClick={handleClose}>
          {isClosed ? 'Открыть доступ' : 'Закрыть доступ'}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Card;
