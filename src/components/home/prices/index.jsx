import { Box, Card, Container, Typography } from '@mui/material';

function numberWithCommas(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join('.');
}

const PRICES = [
  {
    title: 'Free Test',
    description: 'Organize across all apps by hand',
    price: 0,
  },
  {
    title: 'Low Price',
    description: 'Monthly Fixed Amount',
    price: 200000,
  },
  {
    title: 'Easy Using Methods',
    description: 'Various Manuals',
    price: 200000,
  },
  {
    title: 'Verified IT Service',
    description: 'On sale in 4 countries',
    price: 300000,
  },
];

function Prices() {
  return (
    <Box bgcolor="#F3F9FF" pt={15} pb={15}>
      <Container maxWidth="lg">
        <Box display="flex" gap={4} flexWrap="wrap">
          {PRICES.map(price => (
            <Card
              sx={{
                borderRadius: '8px',
                maxWidth: 264,
                padding: 5,
                paddingRight: 0,
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  {price.title}
                </Typography>
                <Typography variant="subtitle2" mt={0.5}>
                  {price.description}
                </Typography>
                <Box display="flex" mt={3} gap={1} alignItems="center">
                  <Typography variant="h4" fontWeight={600}>
                    {numberWithCommas(price.price)}
                  </Typography>
                  <Box>
                    <Typography variant="h5">$</Typography>
                    <Typography variant="subtitle1">Per Month</Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Prices;
