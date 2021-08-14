import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Work from './Work';
import Education from './Education';
import Paper from './Paper';

const CurriculumVitae: React.FunctionComponent = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' align='center' gutterBottom>
        経歴
      </Typography>
      <Box boxShadow={1} m={2} p={2}>
        <Typography variant='h5' component='h3' gutterBottom>
          職歴
        </Typography>
        <Work />
      </Box>
      <Box boxShadow={1} m={2} p={2}>
        <Typography variant='h5' component='h3' gutterBottom>
          学歴
        </Typography>
        <Education />
      </Box>
      <Box boxShadow={1} m={2} p={2}>
        <Typography variant='h5' component='h3' gutterBottom>
          発表論文
        </Typography>
        <Paper />
      </Box>
    </Container>
  );
};

export default CurriculumVitae;
