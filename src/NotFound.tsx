import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const NotFound: React.FunctionComponent = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' align='center' gutterBottom>
        Page Not Found
      </Typography>
    </Container>
  );
};

export default NotFound;
