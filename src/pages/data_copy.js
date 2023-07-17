// material-ui
//import { Typography } from '@mui/material';

//import { Box } from '@mui/system';

// project import
import React from 'react';
import { Grid, Autocomplete, TextField, Paper, Button, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { Box } from '@mui/system';
import us from 'assets/images/flags/us.png';
import ec from 'assets/images/flags/ec.png';
import box from 'assets/images/box-banana.png';
import barras from 'assets/images/barras_verde.png';
import posicion from 'assets/images/posicion.png';

//Recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
  LabelList,
  Label
} from 'recharts';

// Maps
import WorldMap from 'components/worldMap';

//import MainCard from 'components/MainCard';

const colors = ['#00A854', '#e7ca00', '#B1AB99'];

// Steps

//Sample Data
const data = [
  {
    name: '2013',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: '2014',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: '2015',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: '2016',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: '2017',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: '2018',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: '2020',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
// ==============================|| SAMPLE PAGE ||============================== //

const paises = ['Estados Unidos', 'México', 'Colombia', 'Perú', 'Chile', 'Argentina', 'Ecuador', 'Guatemala', 'Cuba'];

const DataPage = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Paper elevation={2}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            Height: '100vh',
            p: 2,
            textAlign: 'center'
          }}
        >
          <Typography align="center" variant="h3" component="div" gutterBottom>
            Consulta de Datos
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Aliqua aliqua ex fugiat eu enim ea. Et anim excepteur nostrud consequat. Fugiat ipsum mollit anim cillum sint Lorem labore ipsum
            do minim qui id id. Incididunt eu amet qui amet mollit incididunt culpa aute ipsum enim duis tempor id.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            Height: '100vh',
            p: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="combo-box-pais-origen"
                options={paises}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Pais de Origen"
                    InputLabelProps={{ style: { fontSize: 18, paddingBottom: 2 } }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="combo-box-pais-destino"
                options={paises}
                renderInput={(params) => (
                  <TextField {...params} label="Pais de Destino" InputLabelProps={{ style: { fontSize: 18, paddingBottom: 2 } }} />
                )}
              />
            </Grid>
            <Grid item xs={12} justify="center">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="contained" color="primary" sx={{ width: '200px', fontSize: 16 }} onClick={() => setShow(true)}>
                  Consultar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: 5,
          width: '100%'
        }}
      >
        {show && (
          <Paper elevation={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, width: '100%', mt: 5 }}>
              <Stepper>
                <Step key={1}>
                  <StepLabel>Evolución</StepLabel>
                </Step>
                <Step key={2}>
                  <StepLabel>Competencia</StepLabel>
                </Step>
                <Step key={3}>
                  <StepLabel>Productive Facts</StepLabel>
                </Step>
                <Step key={4}>
                  <StepLabel>Rendimiento</StepLabel>
                </Step>
              </Stepper>
              <Grid container spacing={2} direction="row" justify="flex-end" alignItems="center">
                <Grid item xs={6}>
                  <Typography align="center" variant="h3" component="div" gutterBottom>
                    Pais de Origen
                  </Typography>
                  <Typography align="center" variant="h4" component="div" gutterBottom>
                    Ecuador
                  </Typography>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img src={ec} alt="ec" width="100px" height="50px" />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="center" variant="h3" component="div" gutterBottom>
                    Pais de Destino
                  </Typography>
                  <Typography align="center" variant="h4" component="div" gutterBottom>
                    Estados Unidos
                  </Typography>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img src={us} alt="ec" width="100px" height="50px" />
                  </Box>
                </Grid>
                <Box sx={{ display: 'flex', pt: 40 }}>
                  <></>
                </Box>
                {/* Pais de Origen */}
                <Grid container xs={6} direction={{ xs: 'column-reverse', md: 'row-reverse' }} alignItems="center" justifyContent="center">
                  <Grid item xs={4}>
                    <Box alignItems="center" justifyContent="center">
                      <Typography display="inline" align="center" variant="h3" component="div">
                        Ecuador exporto en
                      </Typography>{' '}
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        2023
                      </Typography>{' '}
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[0]}>
                        325mil
                      </Typography>{' '}
                      <Typography display="inline" align="center" variant="h3" component="div">
                        cajas de banano de 18.14kg.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={box} alt="ec" width="100px" height="100px" />
                    </Box>
                  </Grid>
                </Grid>
                {/* Pais de Destino */}
                <Grid container xs={6} direction={{ xs: 'column-reverse', md: 'row-reverse' }} alignItems="center" justifyContent="center">
                  <Grid item xs={4}>
                    <Box alignItems="center" justifyContent="center">
                      <Typography display="inline" align="center" variant="h3" component="div">
                        Estados Unidos en
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        2023
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        se ubico
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[0]}>
                        2do
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        destino de exportación de banano de Ecuador.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={barras} alt="ec" width="100px" height="100px" />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  {' '}
                </Grid>
                {/* Texto Central Tarjeta */}
                <Grid container xs={12}>
                  <Box sx={{ display: 'flex', p: 5 }}>
                    <div></div>
                  </Box>
                  <Grid container xs={12} justifyContent={'center'} alignItems={'center'}>
                    <Paper elevation={3}>
                      <Box alignItems="center" justifyContent="center" sx={{ m: 10 }}>
                        <Typography align="center" variant="h2" component="div" color={colors[0]}>
                          Estados Unidos
                        </Typography>
                        &nbsp;
                        <Typography align="center" variant="h2" component="div">
                          es el importador numero
                        </Typography>
                        &nbsp;
                        {/* Imagen Posicion */}
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" sx={{ mt: -8 }}>
                          <img src={posicion} alt="" />
                          <Box position="absolute" display="flex" alignItems="center" justifyContent="center" sx={{ mr: 1 }}>
                            {/* Change Font Size */}
                            <Typography variant="h1" component="div" color={colors[0]} sx={{ fontSize: 90 }}>
                              1
                            </Typography>
                          </Box>
                        </Box>
                        &nbsp;
                        <Box display="inline" alignItems="center" justifyContent="center" flexDirection="row">
                          <Typography align="center" variant="h2" component="div">
                            de oferta de banano en el mundo. En
                          </Typography>
                          &nbsp;
                          <Typography display={'inline'} align="center" variant="h2" component="div" color={colors[1]}>
                            2022
                          </Typography>
                          &nbsp;
                          <Typography display={'inline'} align="center" variant="h2" component="div">
                            compro
                          </Typography>
                          &nbsp;
                          <Typography display={'inline'} align="center" variant="h2" component="div" color={colors[1]}>
                            325M
                          </Typography>
                          &nbsp;
                          <Typography display={'inline'} align="center" variant="h2" component="div">
                            de cajas de banano.
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
                {/* Grafico Evolucion */}
                <Box display="flex" alignItems="flex-end" justifyContent="center" sx={{ width: '100%' }}>
                  <Grid item xs={8}>
                    <div style={{ marginTop: 100 }} />
                    <Typography align="center" variant="h2" component="div">
                      Evolución
                    </Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 10 }}>
                      <> </>
                    </Box>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 40,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis>
                          <Label value="Millones de Cajas 18.14kg" position="left" angle={-90} dx={-10} fontSize={16} offset={0} />
                        </YAxis>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" fill={colors[1]}>
                          <LabelList dataKey="name" position="top" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={3}>
                      <Box justifyContent="center" alignItems="center" sx={{ p: 4, mb: 5 }}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                          <Typography display="inline" align="center" variant="h2" component="div" color={colors[0]}>
                            2021
                          </Typography>
                          &nbsp;
                          <Typography display="inline" align="center" variant="h2" component="div">
                            -
                          </Typography>
                          &nbsp;
                          <Typography display="inline" align="center" variant="h2" component="div" color={colors[1]}>
                            2022
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                          <img src={box} alt="ec" width="100px" height="100px" />
                        </Box>
                        <Typography align="center" variant="h2" component="div" color="red">
                          Disminuyo
                        </Typography>
                        &nbsp;
                        <Typography align="center" variant="h2" component="div" color={colors[0]}>
                          10%
                        </Typography>
                        &nbsp;
                        <Typography align="center" variant="h2" component="div" color={colors[1]}>
                          en las exportaciónes.
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Box>
                {/* Mapa Competencia */}
                <Grid item xs={12}>
                  <div style={{ marginTop: 100 }} />
                  <Typography align="center" variant="h2" component="div" gutterBottom>
                    Competencia
                  </Typography>
                  <Grid container xs={12} justifyContent={'center'} alignItems={'center'}>
                    <Box alignItems="center" justifyContent="center" flexDirection="row">
                      <Typography display="inline" align="center" variant="h3" component="div">
                        ¿ A quien mas le compra banano
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[0]}>
                        Estados Unidos
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        ?
                      </Typography>
                    </Box>
                  </Grid>
                  {/* Maps */}
                  <WorldMap />
                </Grid>
                <Grid container xs={12} justifyContent={'center'} alignItems={'center'}>
                  <Box alignItems="center" justifyContent="center" flexDirection="row" ml={5} mr={5}>
                    <Typography display="inline" align="center" variant="h3" component="div">
                      En
                    </Typography>
                    &nbsp;
                    <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                      2023
                    </Typography>
                    &nbsp;
                    <Typography display="inline" align="center" variant="h3" component="div">
                      , el Top 10 de proeveedores de banano de
                    </Typography>
                    &nbsp;
                    <Typography display="inline" align="center" variant="h3" component="div" color={colors[0]}>
                      Estados Unidos
                    </Typography>
                    &nbsp;
                    <Typography display="inline" align="center" variant="h3" component="div">
                      coloco el
                    </Typography>
                    &nbsp;
                    <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                      90%
                    </Typography>
                    &nbsp;
                    <Typography display="inline" align="center" variant="h3" component="div">
                      de la oferta de banano en este destino.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ marginTop: 100 }} />
                  <Typography align="center" variant="h2" component="div" gutterBottom>
                    Productive Facts
                  </Typography>
                  <Grid container xs={12} justifyContent={'center'} alignItems={'center'}>
                    <Box alignItems="center" justifyContent="center" flexDirection="row" margin={5}>
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[0]}>
                        Ecuador
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        dedica
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        1m
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        hectareas al cultivo de banano, en promedio en
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        2022
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        se dedicaran
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        1.2m
                      </Typography>
                    </Box>
                  </Grid>

                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 40,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis>
                        <Label value="Hectáreas" position="left" angle={-90} dx={-20} fontSize={16} />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill={colors[0]}>
                        <LabelList dataKey="name" position="top" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                {/* Rendimiento */}
                <Grid item xs={12}>
                  <div style={{ marginTop: 100 }} />
                  <Typography align="center" variant="h2" component="div" gutterBottom>
                    Rendimiento
                  </Typography>
                  <Grid container xs={12} justifyContent={'center'} alignItems={'center'}>
                    <Box alignItems="center" justifyContent="center" flexDirection="row" margin={5}>
                      <Typography display="inline" align="center" variant="h3" component="div">
                        En los ultimos 5 años
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[0]}>
                        Ecuador
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        produjo
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        1M
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        cajas por hectarea. El año de mayor productividad fue
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        2022
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        con
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div" color={colors[1]}>
                        1.2M
                      </Typography>
                      &nbsp;
                      <Typography display="inline" align="center" variant="h3" component="div">
                        de cajas por hectarea.
                      </Typography>
                    </Box>
                  </Grid>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 40,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis>
                        <Label value="Hectáreas" position="left" angle={-90} dx={-20} fontSize={16} />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="pv" stroke={colors[0]} activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 10 }}>
                    <Button variant="contained" color="primary" sx={{ width: '200px', fontSize: 16, m: 2 }} onClick={() => setShow(false)}>
                      Descargar Graficos
                    </Button>
                    <Button variant="contained" color="primary" sx={{ width: '200px', fontSize: 16, m: 2 }} onClick={() => setShow(false)}>
                      Descargar Datos
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default DataPage;
