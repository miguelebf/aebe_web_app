import { useEffect, useState, useRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
// project import

import Hero from 'sections/landing/Header';
import FeatureBlock from 'sections/landing/FeatureBlock';
import MainAppBar from 'sections/landing/MainAppBar';
import DemoBlock from 'sections/landing/DemoBlock';
import ElementBlock from 'sections/landing/ElementBlock';
import PartnerBlock from 'sections/landing/PartnerBlock';
import Back from 'assets/images/BackgoundFooterTeam1.png';
//import Typography from 'themes/overrides/Typography';
const dashImage = require.context('assets/images/landing', true);

// ==============================|| LANDING PAGE ||============================== //

const Landing = () => {
  const theme = useTheme();
  const refMetas = useRef(null);
  const refPlanes = useRef(null);
  const refCaracteristicas = useRef(null);
  const [visible, setVisible] = useState(false);
  const scrollDown = () => {
    window.scrollTo({
      top: refMetas.current.offsetTop,
      behavior: 'smooth'
    });
  };
  const scrollPlanes = () => {
    window.scrollTo({
      top: refPlanes.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const scrollCaract = () => {
    window.scrollTo({
      top: refCaracteristicas.current.offsetTop,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 250;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        setVisible(true);
      } else {
        visible && setVisible(false);
      }
    };

    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [visible]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          bgcolor: theme.palette.mode === 'dark' ? 'white' : 'white',
          overflow: 'hidden',
          minHeight: '100vh',
          '&>*': {
            position: 'relative',
            zIndex: 2
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '60%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 0,
            background: 'linear-gradient(180deg, rgba(255,188,59,1) 0%, rgba(255,255,255,1) 35%);'
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '40%',
            height: '100%',
            top: 0,
            right: 0,
            zIndex: 0,
            background: 'rgb(14,102,52);'
          }
        }}
      >
        <CardMedia
          component="img"
          image={dashImage(`./bg-mockup-aebe.png`).default}
          sx={{
            pt: '7%',
            position: 'absolute',
            width: { md: '78%', lg: '70%', xl: '65%' },
            right: { md: '-14%', lg: '-4%', xl: '-2%' },
            top: { md: '16%', lg: '12%', xl: '8%' },
            zIndex: 3,
            display: { xs: 'none', md: 'block' }
          }}
        />
        <MainAppBar>
          <Button onClick={scrollDown} sx={{ my: 2, color: 'black', display: 'block', mr: 5, fontWeight: 900 }}>
            {'Metas'}
          </Button>
          <Box sx={{ my: 4, color: 'black', display: 'block' }}>/</Box>
          <Button onClick={scrollCaract} sx={{ my: 2, color: 'black', display: 'block', mr: 5, ml: 5, fontWeight: 900 }}>
            {'Caracteristicas'}
          </Button>
          <Box sx={{ my: 4, color: 'black', display: 'block' }}>/</Box>
          <Button onClick={scrollPlanes} sx={{ my: 2, color: 'black', display: 'block', ml: 5, fontWeight: 900 }}>
            {'Planes'}
          </Button>
          <Box sx={{ my: 4, color: 'black', display: 'block' }}>/</Box>
          <Button
            onClick={() => {
              window.location.href = '/clima/public';
            }}
            sx={{ my: 2, color: 'black', display: 'block', ml: 5, fontWeight: 900 }}
          >
            {'Clima'}
          </Button>
        </MainAppBar>
        <Hero />
      </Box>
      <div ref={refMetas} />
      <FeatureBlock>
        <div ref={refCaracteristicas} />
      </FeatureBlock>
      <div ref={refPlanes} />
      <DemoBlock />
      <Box sx={{ background: '#FFBF30', backgroundImage: `url(${Back})`, backgroundSize: '1920px 100%', backgroundRepeat: 'no-repeat' }}>
        <PartnerBlock />
      </Box>
      <ElementBlock />
    </Box>
  );
};

export default Landing;
