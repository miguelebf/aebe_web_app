// import { Link as RouterLink } from 'react-router-dom';

// material-ui

import { Box, Container, Grid, Typography, Divider, Paper } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import { PopupButton } from '@typeform/embed-react';
// project import
import MainCard from 'components/MainCard';

// assets

import AnimateButton from 'components/@extended/AnimateButton';

//css
import './button.css';
// ==============================|| LANDING - DEMO PAGE ||============================== //

const DemoBlock = () => {
  return (
    <Box
      sx={{ position: 'relative', width: '100%', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,243,206,1) 100%)' }}
    >
      <Container
        sx={{
          pb: '20px'
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            mt: { md: 5, xs: 5 },
            mb: { md: 10, xs: 5 }
          }}
        >
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
              <Grid item sm={10} md={6}>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography variant="h3" sx={{ mb: 2, pr: '5px' }} display="inline" fontWeight={900}>
                      Planes de
                    </Typography>
                    <Paper
                      sx={{
                        background: '#FFBF30',
                        borderRadius: '30px',

                        boxShadow: 5,
                        padding: 1,
                        display: 'inline',

                        justifyContent: 'space-around'
                      }}
                    >
                      <Typography variant="h3" sx={{ mb: 2 }} display="inline" fontWeight={200}>
                        Subcripción
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
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
              <MainCard contentSX={{ p: 3, background: 'white' }} sx={{ pb: '20px', boxShadow: 10 }}>
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ fontWeight: 900, mt: 2, textAlign: 'center' }}>
                      COMPLETO
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h3" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      $250/mes
                    </Typography>
                    <Divider
                      variant="middle"
                      sx={{
                        background: '#FFBF30'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="secondary" fontWeight={900}>
                      Clima
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Indicadores climaticos de la semana.
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Pronósticos de condiciones climáticas.
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Recomendación de BPA por condición climática.
                    </Typography>
                    <Typography variant="body1" color="secondary" fontWeight={900}>
                      Producción
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Indicadores de producción.
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Bechnmark interactivo de producción.
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Estadísticas de producción por zona y nacional.
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Recomendación del uso estratégico de datos en la producción.
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • cceso a la aplicación móvil para vinculación de datos.
                    </Typography>
                    <Typography variant="body1" color="secondary" fontWeight={900}>
                      Comercio
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Importaciones nacionales y mundiales de banano.
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      • Exportaciones nacionales y mundiales de banano.
                    </Typography>
                    <Typography variant="body1" color="secondary" fontWeight={900}>
                      Repositorio
                    </Typography>

                    <Typography variant="body1" color="secondary">
                      • Descarga la información histórica y semanal levantada por el OEB en 5 sencillos pasos.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ display: 'inline-block' }}>
                      <AnimateButton>
                        <PopupButton id="LXiVmpdx" style={{ my: 2 }} className="pure-material-button-contained">
                          + Solicitar Subcripción
                        </PopupButton>
                        {/* <Button variant="contained" sx={{ my: 2 }} component={RouterLink} to="/components-overview/buttons" target="_blank">
                          + Solciitar Subcripción
                        </Button> */}
                      </AnimateButton>
                    </Box>
                  </Grid>
                </Grid>
              </MainCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DemoBlock;
