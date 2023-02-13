// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthRegisterCompany from 'sections/auth/auth-forms/AuthRegisterCompany';

// ================================|| REGISTER ||================================ //

const RegisterCompany = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Registro de Empresa</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthRegisterCompany />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default RegisterCompany;
