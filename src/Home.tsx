import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Profile from './Profile';
import Motto from './Motto';
import Activity from './Activity';

const Home: React.FunctionComponent = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h1' align='center' gutterBottom>
        Hotta, Hiro-Aki
      </Typography>
      <Box boxShadow={1} m={2} p={2}>
        <Typography variant='h5' component='h3' gutterBottom>
          私は何者？
        </Typography>
        <Profile />
      </Box>
      <Box boxShadow={1} m={2} p={2}>
        <Typography variant='h5' component='h3' gutterBottom>
          座右の銘
        </Typography>
        <Motto />
      </Box>
      <Box boxShadow={1} m={2} p={2}>
        <Typography variant='h5' component='h3' gutterBottom>
          活動（SNS等）
        </Typography>
        <Activity />
      </Box>
    </Container>
  );
};

export default Home;
