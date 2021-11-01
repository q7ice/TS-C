import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useHistory } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';

function NewCard() {
  const history = useHistory();
  const handleCardClick = () => history.push('/test-edit/new');

  return (
    <Card onClick={handleCardClick}>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 275,
          cursor: 'pointer',
        }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: '3rem' }} />
      </CardContent>

    </Card>
  );
}

export default NewCard;
