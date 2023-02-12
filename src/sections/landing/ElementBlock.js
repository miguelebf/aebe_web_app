// material-ui

import { Box, Container, Grid, Typography } from '@mui/material';

import imagep1 from 'assets/images/p1.png';
import imagep2 from 'assets/images/p2.png';
import imagep3 from 'assets/images/p3.png';
import imagep4 from 'assets/images/p4.png';
import fbicon from 'assets/images/facebookicon.svg';
import twicon from 'assets/images/twittericon.svg';
import igicon from 'assets/images/instagramicon.svg';
import wsicon from 'assets/images/whatsappicon.svg';

import imagFooterOEB from 'assets/images/LogoFooterOEB.png';
import BackgroudFooterteam from 'assets/images/BackgoundFooterTeam.png';
import imgFooterAEB from 'assets/images/LogoFooterAEB.png';

// project import
import MainCard from 'components/MainCard';
// ==============================|| LANDING - ELEMENT PAGE ||============================== //

const ElementBlock = () => {
  return (
    <Box
      sx={{
        content: '""',
        position: 'relative',
        width: '100%',
        height: '45%',
        bottom: 0,
        left: 0,
        background: 'rgb(14,102,52);',
        backgroundImage: `url(${BackgroudFooterteam})`,
        backgroundSize: '1920px 50%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
          <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mb: { md: 10, xs: 2.5 } }}>
            <Grid item xs={12} sm={6} md={3} container alignItems="center" justifyContent="center" flexDirection="column">
              <MainCard
                contentSX={{ background: 'white' }}
                sx={{ pb: '20px', boxShadow: 10, borderRadius: '50%', width: '300px', height: '300px' }}
              >
                <img src={imagep1} alt="Logo" />
              </MainCard>
              <Typography variant="h4" fontWeight="900" color="white">
                Director del OEB
              </Typography>
              <Typography variant="h5" fontWeight="600" color="white">
                Econ. Paúl Vera
              </Typography>
              <Typography variant="h4" fontWeight="900" color="white">
                ㅤ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} container alignItems="center" justifyContent="center" flexDirection="column">
              <MainCard
                contentSX={{ background: 'white' }}
                sx={{ pb: '20px', boxShadow: 10, borderRadius: '50%', width: '300px', height: '300px' }}
              >
                <img src={imagep3} alt="Logo" />
              </MainCard>
              <Typography variant="h4" fontWeight="900" color="white">
                Data Manager
              </Typography>
              <Typography variant="h5" fontWeight="600" color="white">
                Econ. Daniela Roldán.
              </Typography>
              <Typography variant="h4" fontWeight="900" color="white">
                ㅤ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} container alignItems="center" justifyContent="center" flexDirection="column">
              <MainCard
                contentSX={{ background: 'white' }}
                sx={{
                  pb: '20px',
                  boxShadow: 10,
                  borderRadius: '50%',
                  width: '300px',
                  height: '300px'
                }}
              >
                <img src={imagep2} alt="Logo" />
              </MainCard>
              <Typography variant="h4" fontWeight="900" color="white">
                Analista de Evaluación
              </Typography>
              <Typography variant="h4" fontWeight="900" color="white">
                e Impacto
              </Typography>
              <Typography variant="h5" fontWeight="600" color="white">
                Econ. Kevin Ovalle
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} container alignItems="center" justifyContent="center" flexDirection="column">
              <MainCard
                contentSX={{ background: 'white' }}
                sx={{ pb: '20px', boxShadow: 10, borderRadius: '50%', width: '300px', height: '300px' }}
              >
                <img src={imagep4} alt="Logo" />
              </MainCard>
              <Typography variant="h4" fontWeight="900" color="white">
                Especialista en Estudios
              </Typography>
              <Typography variant="h4" fontWeight="900" color="white">
                de Mercado
              </Typography>
              <Typography variant="h5" fontWeight="600" color="white">
                Econ. Marjorie Martinez.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container alignItems="center" justifyContent="center">
            <Typography variant="h1" sx={{ mb: 10 }} display="inline" fontWeight="100" color="white">
              Nuestro
            </Typography>
            <Typography variant="h1" sx={{ mb: 10, pl: 2 }} display="inline" fontWeight="900" color="white">
              Equipo
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center" justifyContent="center">
            <Typography variant="h4" fontWeight="900" color="#FFBF30">
              Contactanos
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center" justifyContent="center" flexDirection="column">
            <Typography variant="h4" fontWeight="200" color="white">
              estadísticas@aebe.com
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img src={wsicon} alt="icon4" />
              <Typography variant="h4" fontWeight="200" color="white" sx={{ pl: '2px' }}>
                +593 97 9340 988
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} container alignItems="center" justifyContent="center">
            <img src={imagFooterOEB} alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={6} container alignItems="center" justifyContent="center">
            <img src={imgFooterAEB} alt="Logo" />
          </Grid>
          <Grid item xs={12} container alignItems="center" justifyContent="center">
            <Box sx={{ pr: 2 }}>
              <img src={igicon} alt="icon1" />
            </Box>
            <Box>
              <img src={fbicon} alt="icon2" />
            </Box>
            <Box sx={{ pl: 2 }}>
              <img src={twicon} alt="icon3" />
            </Box>
          </Grid>

          <Grid item xs={12} container alignItems="center" justifyContent="center" flexDirection="column">
            <Typography variant="body1" fontWeight="200" color="white">
              Av. Luis Orrantia Cornejo Cdla. Kennedy
            </Typography>

            <Typography variant="body1" fontWeight="200" color="white">
              Norte Edif CLASSE Of 302
            </Typography>

            <Typography variant="body1" fontWeight="200" color="white">
              Guayaquil - Ecuador
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} container alignItems="center" justifyContent="center">
            <Typography variant="body1" fontWeight="200" color="white">
              PBX: 593-4 2683 200 2683 161
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ElementBlock;
