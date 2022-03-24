import Header from '@/components/header';
import Advertisement from '@/components/home/advertisement';
import Banner from '@/components/home/banner';
import Footer from '@/components/home/footer';
import Prices from '@/components/home/prices';
import Services from '@/components/home/services';
import { Box, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import AccountIcon from 'public/images/account-1.svg';
import ComputerIcon from 'public/images/computer.svg';
import CustomerIcon from 'public/images/customer.svg';
import HrAdminIcon from 'public/images/hr-admin.svg';
import SalesIcon from 'public/images/sales.svg';
import SecurityIcon from 'public/images/security.svg';
import React, { useEffect } from 'react';
import { LIGHT_GRAY } from 'src/theme';

const SERVICES = [
  {
    images: ComputerIcon,
    title: 'Assets',
    services: [
      {
        title: 'Inventory Management',
        action: 'G-Book',
      },
    ],
  },
  {
    images: AccountIcon,
    title: 'Accounting',
    services: [
      {
        title: 'Accounting',
        action: 'G-Book',
      },
    ],
  },
  {
    images: HrAdminIcon,
    title: 'HR & Admin',
    services: [
      {
        title: 'Webmail',
        action: 'E-office',
      },
      {
        title: 'E- Apporval',
        action: 'E-office',
      },
      {
        title: 'E- Document',
        action: 'E-office',
      },
      {
        title: 'E- Check in.out',
        action: 'E-office',
      },
      {
        title: 'Co-work/Project',
        action: 'E-office',
      },
    ],
  },
  {
    images: SalesIcon,
    title: 'Sales',
    services: [
      {
        title: 'Create Homepage Youtube & Instagram',
        action: 'Fieldmake',
      },
    ],
  },
  {
    images: CustomerIcon,
    title: 'Customer',
    services: [
      {
        title: 'Customer Request Management',
        action: 'OQUFIE',
      },
    ],
  },
  {
    images: SecurityIcon,
    title: 'Security',
    services: [
      {
        title: 'SSL server',
        action: 'SECTIGO',
      },
    ],
  },
];

export default function HomePage() {
  const router = useRouter();

  // Cookie is underfined in the server side
  const isAuth = Cookies.get('isAuth');

  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, []);

  return (
    <>
      <Box component="header" position="absolute" width="100%">
        <Header />
      </Box>
      {/* Banner */}
      <section>
        <Banner />
      </section>
      {/* Advertisement */}
      <section>
        <Advertisement />
      </section>
      {/* Services */}
      <section>
        <Typography
          textTransform="uppercase"
          textAlign="center"
          fontWeight={600}
          variant="h3"
          mt={10}
        >
          It cloud sea's it service
        </Typography>
        {SERVICES.map((data, index) => {
          let property = { data };

          if (index % 2 !== 0) {
            property = {
              ...property,
              bgcolor: LIGHT_GRAY,
              swap: true,
            };
          }

          return React.createElement(Services, property);
        })}
      </section>
      {/* Price */}
      <section>
        <Prices />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </>
  );
}
