import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import classNames from 'classnames';
import styles from '../../pages/TestsPage.module.scss';

function NewCard() {
  return (
    <div className={classNames(styles.card, styles.newCard)}>
      <AddCircleOutlineIcon sx={{ fontSize: '3rem' }} />
    </div>
  );
}

export default NewCard;
