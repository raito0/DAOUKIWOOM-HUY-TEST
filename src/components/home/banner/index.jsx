import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const dataBanners = [
  {
    value: 6,
    title: 'different IT Software Networks',
  },
  {
    value: 32,
    title: 'partners',
  },

  {
    value: 4,
    title: 'countries',
  },
];

const CRM = styled('div')(({ theme }) => ({
  background: `url(/images/banner.png)`,
  backgroundSize: 'cover',
  paddingLeft: theme.spacing(22),
  paddingRight: theme.spacing(22),
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
}));

const TabCustom = styled(Tab)(({ theme }) => ({
  color: '#FFFFFF',
  opacity: 0.5,
  '&.Mui-selected': {
    color: '#FFFFFF',
    opacity: 1,
  },
}));

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#CFE5FF',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Banner() {
  const [tab, setTab] = useState('one');

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Grid container height={665}>
        <Grid
          item
          lg={4}
          justifyContent="center"
          alignItems="center"
          height="100%"
          p={10}
          display="flex"
        >
          <Typography variant="h3" fontWeight={700}>
            Asia IT Market Place
          </Typography>
        </Grid>
        <Grid item lg={8} height="100%">
          <CRM>
            <Box>
              <AntTabs value={tab} onChange={handleChange}>
                <TabCustom value="one" label="Now" />
                <TabCustom value="two" label="Future" />
              </AntTabs>
            </Box>
            <TabPanel value={tab} index="one">
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="flex-start"
                flexWrap="wrap"
                gap={12}
              >
                {dataBanners.map(data => (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    color="#fff"
                    key={data.title}
                  >
                    <Typography variant="h2" fontWeight={600}>
                      {data.value}
                    </Typography>
                    <Typography
                      maxWidth={138}
                      textAlign="center"
                      variant="body1"
                    >
                      {data.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </TabPanel>
          </CRM>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
