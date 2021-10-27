import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import styles from '../../pages/TestsPage.module.scss';

function NewCard() {
  const history = useHistory();
  const handleCardClick = () => history.push('/test-edit/new');
  return (
    <div
      onClick={handleCardClick}
      className={classNames(styles.card, styles.newCard)}
    >
      <AddCircleOutlineIcon
        sx={{ fontSize: '3rem' }}
      />
    </div>
  );
}

export default NewCard;
