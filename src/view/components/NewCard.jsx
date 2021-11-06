import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useHistory } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';

function NewCard() {
  const history = useHistory();
  const handleCardClick = () => history.push('/test-edit/new');

  return (
    <Card
      elevation={12}
      onClick={handleCardClick}
      sx={{
        mb: 2,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 218,
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: '5rem' }} />
      </CardContent>

    </Card>
  );
}

export default NewCard;
