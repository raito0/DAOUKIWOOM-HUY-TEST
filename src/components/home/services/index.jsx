import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  textTransform: 'initial',
}));

function Services({ data, swap = false, bgcolor = '#fff' }) {
  const { images, title, services } = data;

  return (
    <Box bgcolor={bgcolor} pt={12} pb={10}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={swap ? 'row-reverse' : 'row'}
          justifyContent="space-around"
          alignItems="center"
        >
          <Image src={images} alt="computer" width={280} />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Typography textTransform="uppercase" variant="h4">
              {title}
            </Typography>
            <Box
              display="flex"
              maxWidth={400}
              flexWrap="wrap"
              justifyContent="center"
              gap={4}
            >
              {services.map(s => (
                <Box
                  key={s.title}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                >
                  <Typography
                    variant="subtitle1"
                    maxWidth={170}
                    textAlign="center"
                  >
                    {s.title}
                  </Typography>
                  <CustomButton
                    size="small"
                    color="primary"
                    variant="contained"
                  >
                    {s.action}
                  </CustomButton>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
