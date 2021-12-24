import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NewCard() {
  const navigate = useNavigate();
  return (
    <Card
      elevation={12}
      onClick={() => { navigate('/test-edit/new'); }}
      sx={{
        height: '100%',
        minHeight: 180,
      }}
    >
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
      >
        <AddCircleOutlineIcon sx={{ fontSize: '3rem' }} />
      </CardContent>
    </Card>
  );
}

export default NewCard;
