import React from 'react';
import {
  Card, CardContent,
} from '@mui/material';
import Typography from '@mui/material/Typography';

function TestCard({
  title, passedCount, isClosed, date,
}) {
  return (
    <Card>
      <CardContent sx={{ minHeight: 275, maxWidth: 275 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {isClosed ? 'Закрыт' : 'Открыт'}
        </Typography>
        <Typography variant="body2">
          {passedCount}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestCard;
