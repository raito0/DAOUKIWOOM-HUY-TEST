import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  styled,
  Toolbar,
} from '@mui/material';
import Image from 'next/image';
import HomeIcon from 'public/images/home-icon.svg';
import LogoIcon from 'public/logo.svg';
import React, { useState } from 'react';
import { DARK_BLUE } from 'src/theme';
import { CustomSelect, StyledOption } from '../common/select';

const NAV_BAR = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Auto Homepage',
    link: '/auto-homepage',
  },
  {
    title: 'Sales',
    link: '/sales',
  },
  {
    title: 'CRM',
    link: '/crm',
  },
  {
    title: 'Electronic office',
    link: '/electronic-office',
  },
  {
    title: 'Cloud ERP',
    link: '/cloud-erp',
  },
  {
    title: 'SSL',
    link: '/ssl',
  },
];

const LIST_LANGUAGES = ['EN', 'VI', 'KR'];
const LIST_COMPANY = ['Company'];
const PARTNER_PLACE = ['Partner Market Place'];

const CustomLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const TranslateGrid = styled(Grid)({
  backgroundColor: DARK_BLUE,
});

function Header() {
  const [language, setLanguage] = useState(LIST_LANGUAGES[0]);
  const [company, setCompany] = useState(LIST_COMPANY[0]);
  const [partner, setPartner] = useState(PARTNER_PLACE[0]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container position="relative" height={36}>
        <Grid item lg={4} />
        <TranslateGrid item lg={8}></TranslateGrid>
        <Box position="absolute" width="100%" height={36} color="#fff">
          <Container maxWidth="xl">
            <Box display="flex" justifyContent="flex-end" width="100%" gap={10}>
              <CustomSelect
                value={language}
                onChange={value => setLanguage(value)}
              >
                {LIST_LANGUAGES.map(l => (
                  <StyledOption key={l} value={l}>
                    {l}
                  </StyledOption>
                ))}
              </CustomSelect>
              <CustomSelect
                value={company}
                onChange={value => setCompany(value)}
              >
                {LIST_COMPANY.map(l => (
                  <StyledOption key={l} value={l}>
                    {l}
                  </StyledOption>
                ))}
              </CustomSelect>
              <CustomSelect
                value={partner}
                onChange={value => setPartner(value)}
              >
                {PARTNER_PLACE.map(l => (
                  <StyledOption key={l} value={l}>
                    {l}
                  </StyledOption>
                ))}
              </CustomSelect>
            </Box>
          </Container>
        </Box>
      </Grid>
      <Toolbar>
        <Container maxWidth="xl">
          <Grid container wrap="nowrap" justifyContent="space-between">
            <Grid item lg={3}>
              <Image src={LogoIcon} alt="logo" width={170} />
            </Grid>
            <Grid item lg={9}>
              <Box display="flex" justifyContent="space-between">
                {NAV_BAR.map(nav => (
                  <CustomLink
                    underline="none"
                    color={nav.title.toLowerCase() === 'home' ? '#000' : '#fff'}
                    href={nav.link}
                  >
                    {nav.title.toLowerCase() === 'home' ? (
                      <Image src={HomeIcon} alt="home-icon" width={16} />
                    ) : (
                      ''
                    )}
                    <span>{nav.title}</span>
                  </CustomLink>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
