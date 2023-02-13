import { useEffect } from 'react';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

import AnimateButton from 'components/@extended/AnimateButton';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const { firebaseRegister } = useAuth();
  const scriptedRef = useScriptRef();

  useEffect(() => {}, []);

  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          company: '',
          password: '',
          edad: '',
          anos_experiencia: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('Nombre es requerido'),
          lastname: Yup.string().max(255).required('Apellido es requerido'),
          email: Yup.string().email('EL correo electrónico debe ser valido').max(255).required('Correo Electrónico es requerido'),
          password: Yup.string().max(255).required('Contraseña es requerida'),
          edad: Yup.number().max(80).required('Edad es requerida'),
          anos_experiencia: Yup.number().max(70).required('Años de experiencia es requerida')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            firebaseRegister(values.email, values.password).then(
              (firebase) => {
                firebase.user
                  .updateProfile({
                    displayName: values.firstname + ' ' + values.lastname
                  })
                  .then(
                    function () {
                      // Update successful.
                      location.reload();
                    },
                    function (error) {
                      console.log(error);
                    }
                  );
              },
              (err) => {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            );
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Nombre</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@empresa.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Descripción</InputLabel>
                  <OutlinedInput
                    multiline
                    rows={3}
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type="text"
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Descripción de la empresa"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Crear Cuenta
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
