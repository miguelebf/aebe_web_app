// material-ui
import { Box, Button, Grid, Typography } from '@mui/material';

// project import
import useAuth from 'hooks/useAuth';
import AnimateButton from 'components/@extended/AnimateButton';
import AuthWrapper from 'sections/auth/AuthWrapper';

// ================================|| CHECK MAIL ||================================ //

const CheckMail = () => {
  const { logout, sendEmailVerification } = useAuth();

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Hola, Verifica tu Correo Electrónico</Typography>
            <Typography color="secondary" sx={{ mb: 0.5, mt: 1.25 }}>
              Para poder usar la aplicion primero debes verificar tu correo electronico.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <AnimateButton>
            <Button
              onClick={() => {
                logout();
                window.location.href = '/login';
              }}
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Iniciar Sesión
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={6}>
          <AnimateButton>
            <Button
              onClick={() => {
                sendEmailVerification();
              }}
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Reenviar Email
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default CheckMail;
