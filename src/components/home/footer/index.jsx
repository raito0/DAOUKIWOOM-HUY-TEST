import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const OFFICES = [
  {
    place: 'Vietnam Office',
    description: [
      '14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city',
      'Business resigtration: 0315421202',
      'Tel: 028-3520-2367',
      'sales@dkinno.com',
      'Copyright 2021 DaouKiwoom Innocation C0., Ltd',
    ],
  },
  {
    place: 'Indonesia Office',
    description: [
      'Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia',
      'Tel: +62-21-5082-0038',
    ],
  },
  {
    place: 'Korea Office',
    description: [
      '5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea',
    ],
  },
];

const CustomGridItem = styled(Grid)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderRight: 0,
  },
}));

function Footer() {
  const theme = useTheme();

  return (
    <Box borderTop={`1px solid ${theme.palette.divider}`} bgcolor="#F3F9FF">
      <Container maxWidth="lg">
        <Grid container>
          {OFFICES.map(office => (
            <CustomGridItem item md={4} p={4}>
              <Typography variant="h5">{office.place}</Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                gap={2}
                mt={2.5}
              >
                {office.description.map(d => (
                  <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    component="p"
                  >
                    {d}
                  </Typography>
                ))}
              </Box>
            </CustomGridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
