import { Link } from 'react-router-dom';

// project import
import config from 'config';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// assets
import construction from 'assets/images/maintenance/under-construction.svg';

// ==============================|| UNDER CONSTRUCTION - MAIN ||============================== //

function UnderConstruction() {
  return (
    <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100%' }}>
      <Grid item xs={12}>
        <Box sx={{ width: { xs: 300, sm: 480 } }}>
          <img src={construction} alt="mantis" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography align="center" variant="h1">
            En Construcción
          </Typography>
          <Typography color="textSecondary" align="center" sx={{ width: '85%' }}>
            Hola! Por favor, consulte este sitio más tarde. Le estamos dando mantenimiento ahora mismo.
          </Typography>
          <Button component={Link} to={config.defaultPath} variant="contained">
            Ir A Inicio
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UnderConstruction;
