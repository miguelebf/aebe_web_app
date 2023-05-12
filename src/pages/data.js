// material-ui
//import { Typography } from '@mui/material';

//import { Box } from '@mui/system';

// project import
import React from 'react';
import { Grid, Autocomplete, TextField, Paper, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import us from 'assets/images/flags/us.png';
import ec from 'assets/images/flags/ec.png';

//Recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//import MainCard from 'components/MainCard';

const colors = ['#00A854', '#e7ca00'];

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
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography align="center" variant="h3" component="div" gutterBottom>
                    Pais de Origen
                  </Typography>
                  <Typography align="center" variant="h4" component="div" gutterBottom>
                    Estados Unidos
                  </Typography>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img src={us} alt="ec" width="100px" height="50px" />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="center" variant="h3" component="div" gutterBottom>
                    Pais de Destino
                  </Typography>
                  <Typography align="center" variant="h4" component="div" gutterBottom>
                    Ecuador
                  </Typography>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img src={ec} alt="ec" width="100px" height="50px" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ marginTop: 100 }} />
                  <Typography align="center" variant="h3" component="div" gutterBottom>
                    Evolución
                  </Typography>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill={colors[0]} />
                      <Bar dataKey="uv" fill={colors[1]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ marginTop: 100 }} />
                  <Typography align="center" variant="h3" component="div" gutterBottom>
                    Paticipación de Mercados
                  </Typography>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill={colors[0]} />
                      <Bar dataKey="uv" fill={colors[1]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ marginTop: 100 }} />
                  <Typography align="center" variant="h3" component="div" gutterBottom>
                    Top Exportadores
                  </Typography>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill={colors[0]} />
                      <Bar dataKey="uv" fill={colors[1]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" alignItems="center" sx={{ pt: 10 }}>
                    <Button variant="contained" color="primary" sx={{ width: '200px', fontSize: 16 }} onClick={() => setShow(false)}>
                      Descargar
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
