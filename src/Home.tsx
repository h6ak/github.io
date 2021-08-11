import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Profile from './Profile';


const Home: React.FunctionComponent = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h1' align='center' gutterBottom>
        Hotta, Hiro-Aki
      </Typography>
      <Card>
        <CardContent>
          <Typography variant='h5' component='h3' gutterBottom>
            簡易プロフィール
          </Typography>
          <Profile />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
