// material-ui
import { Container, Grid, Typography, Box } from '@mui/material';
import pointicon from 'assets/images/iconooeb.svg';
// third party
import { motion } from 'framer-motion';

// project import
import MainCard from 'components/MainCard';
// assets
import imgfeature1 from 'assets/images/landing/img-feature1.svg';
import imgfeature2 from 'assets/images/landing/img-feature2.svg';
import imgfeature3 from 'assets/images/landing/img-feature3.svg';

import imgServices from 'assets/images/services.png';

// ==============================|| LANDING - FEATURE PAGE ||============================== //

const FeatureBlock = ({ children }) => (
  <Box
    sx={{
      content: '""',
      position: 'relative',
      width: '100%',
      bottom: 0,
      left: 0,
      background: 'linear-gradient(180deg, rgba(255,255,255,1) 35%, rgba(255,191,48,1) 35%)',
      paddingBottom: '100px'
    }}
  >
    <Container
      sx={{
        position: 'relative'
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{
          mt: { md: 15, xs: 2.5 },
          mb: { md: 10, xs: 2.5 }
        }}
      >
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
            <Grid item sm={10} md={6}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ mb: 2 }} display="inline" fontWeight="200">
                    Nuestras
                  </Typography>
                  <Typography variant="h2" display="inline" sx={{ pl: '10px' }} fontWeight="900">
                    Metas
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.2
            }}
          >
            <MainCard
              contentSX={{
                p: 3,
                background: 'linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(255,242,200,1) 100%)',
                height: '300px'
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} alignItems="center" direction="column" container>
                  <img src={imgfeature1} alt="feature" />
                </Grid>
                <Grid item xs={12} alignItems="center" direction="column" container>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    CREAR
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary" align="center">
                    Una red de información meteorológica de libre acceso que sea utilizada por pequeños productores para incrementar la
                    producción sostenible de banano en Ecuador.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.4
            }}
          >
            <MainCard
              contentSX={{
                p: 3,
                background: 'linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(255,242,200,1) 100%)',
                height: '300px'
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} alignItems="center" direction="column" container>
                  <img src={imgfeature2} alt="feature" />
                </Grid>
                <Grid item xs={12} alignItems="center" direction="column" container>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    BRINDAR
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary" align="center">
                    Información actualizada y de libre acceso en producción, comercialización y de indicadores productivos y de microclima
                    para los productores de banano de Ecuador.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.6
            }}
          >
            <MainCard
              contentSX={{
                p: 3,
                background: 'linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(255,242,200,1) 100%)',
                height: '300px'
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} alignItems="center" direction="column" container>
                  <img src={imgfeature3} alt="feature" />
                </Grid>
                <Grid item xs={12} alignItems="center" direction="column" container>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    DETERMINAR
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary" align="center">
                    La relación entre los indicadores de productividad y los indicadores de microclima.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
          </motion.div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1" color="white" align="center" fontWeight="900">
          Todo disponible
        </Typography>
        <Typography variant="h1" color="black" align="center" fontWeight="900">
          en un solo lugar
        </Typography>
      </Grid>
      <Box sx={{ flexGrow: 1, pt: '30px' }}>
        <Grid container spacing={2}>
          <Grid container xs={12} md={6} justifyContent="center" align="center" sx={{ width: '100px' }}>
            <Box component="img" src={imgServices} sx={{ width: '800px', height: '350px', mt: 7 }} />
          </Grid>
          <Grid
            container
            xs={12}
            md={6}
            justifyContent="center"
            align="center"
            flexDirection="column"
            sx={{
              padding: {
                xs: '10px',
                md: '30px'
              },
              textAlign: {
                xs: 'center',
                sm: 'left'
              },
              pt: 8
            }}
          >
            {' '}
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img src={pointicon} alt="clima" display="inline" />
              <Typography
                variant="h4"
                color="black"
                fontWeight="900"
                sx={{
                  pl: '5px'
                }}
              >
                Clima
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="black"
              align="left"
              fontWeight="200"
              sx={{
                pb: '20px',
                textAlign: {
                  xs: 'center',
                  sm: 'justify'
                }
              }}
            >
              Indicadores y pronósticos meteorológicos del 35% de la zona productiva de banano en el país.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img src={pointicon} alt="clima" display="inline" />
              <Typography
                variant="h4"
                color="black"
                align="left"
                fontWeight="900"
                sx={{
                  textAlign: {
                    xs: 'center',
                    sm: 'justify'
                  },
                  pl: '5px'
                }}
              >
                Comercio
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="black"
              align="left"
              fontWeight="200"
              sx={{
                pb: '20px',
                textAlign: {
                  xs: 'center',
                  sm: 'justify'
                }
              }}
            >
              Estadísticas de importación y exportación de banano en Ecuador y el mundo.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img src={pointicon} alt="clima" display="inline" />
              <Typography
                variant="h4"
                color="black"
                align="left"
                fontWeight="900"
                sx={{
                  textAlign: {
                    xs: 'center',
                    sm: 'justify'
                  },
                  pl: '5px'
                }}
              >
                Producción
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="black"
              align="left"
              fontWeight="200"
              sx={{
                pb: '20px',
                textAlign: {
                  xs: 'center',
                  sm: 'justify'
                }
              }}
            >
              Único portal con información semanal de indicadores de rendimiento productivo para la planificación estratégica, tales como:
              enfunde, cajas, ratio, merma, racimos, entre otros.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img src={pointicon} alt="clima" display="inline" />
              <Typography
                variant="h4"
                color="black"
                align="left"
                fontWeight="900"
                sx={{
                  textAlign: {
                    xs: 'center',
                    sm: 'justify'
                  },
                  pl: '5px'
                }}
              >
                Repositorio
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="black"
              align="left"
              fontWeight="200"
              sx={{
                pb: '70px',
                textAlign: {
                  xs: 'center',
                  sm: 'justify'
                }
              }}
            >
              Encontrarás reportes orientados a la aplicación de estrategias en planificación productiva y buenas.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
    {children}
  </Box>
);

export default FeatureBlock;
