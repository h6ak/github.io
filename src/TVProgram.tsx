import React from 'react';
import ReactPlayer from 'react-player'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TVProgram: React.FunctionComponent = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' gutterBottom>
        TV番組出演
      </Typography>
      <Box>
        <ReactPlayer url='https://www.youtube.com/watch?v=CMTJLbE0QQA' />
      </Box>
    </Container>
  );
};

export default TVProgram;
