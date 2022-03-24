import { Box, Container, Typography } from '@mui/material';
import { LIGHT_PINK } from 'src/theme';

function Advertisment() {
  return (
    <Box bgcolor={LIGHT_PINK}>
      <Container maxWidth="lg">
        <Typography variant="body1" component="p" textAlign="center" p={5}>
          You are now viewing an <b>IT Software</b> that has been verified by{' '}
          <b>over 1 million users.</b>
        </Typography>
      </Container>
    </Box>
  );
}

export default Advertisment;
