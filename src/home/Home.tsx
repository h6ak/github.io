import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Profile from './Profile';
import Motto from './Motto';
import Activity from './Activity';

const Home: React.FunctionComponent = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h1' align='center' gutterBottom>
        Hotta, Hiro-Aki
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Box boxShadow={1} m={2} p={2}>
            <Typography variant='h5' component='h3' gutterBottom>
              私は何者？
            </Typography>
            <Profile />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box boxShadow={1} m={2} p={2}>
            <Typography variant='h5' component='h3' gutterBottom>
              座右の銘
            </Typography>
            <Motto />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box boxShadow={1} m={2} p={2}>
            <Typography variant='h5' component='h3' gutterBottom>
              活動（SNS等）
            </Typography>
            <Activity />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
