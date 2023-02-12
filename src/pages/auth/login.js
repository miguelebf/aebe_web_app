// material-ui
import { Grid, Stack, Typography, Box } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';
//import { ReactComponent as LogoLetra } from '../../assets/images/logo_aebe_letras.svg';
import LogoPNG from 'assets/images/logo_png.png';

// ================================|| LOGIN ||================================ //

const Login = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <Box sx={{ width: 250, height: 170, paddingTop: 10 }} component="img" alt="Logo" src={LogoPNG} />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Iniciar Sesión</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
