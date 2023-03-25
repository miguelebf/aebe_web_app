import { useEffect } from 'react';
import * as React from 'react';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import

import useScriptRef from 'hooks/useScriptRef';

import AnimateButton from 'components/@extended/AnimateButton';

// ============================|| REGISTER - COMPANY ||============================ //

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AuthRegister = () => {
  const scriptedRef = useScriptRef();
  const [success, setSuccess] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Snackbar open={success} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Empresa creada con éxito!
        </Alert>
      </Snackbar>
      <Formik
        initialValues={{
          nombre: '',
          descripcion: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          nombre: Yup.string().max(255).required('Nombre es requerido'),
          descripcion: Yup.string().max(255).required('Descripción es requerido')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', access_token: '1234567890' },
              body: JSON.stringify({ name: values.nombre, description: values.descripcion })
            };
            fetch(`https://api-aebe.herokuapp.com/api/v1/companies`, requestOptions)
              .then((response) => {
                console.log(response);
                if (response.status === 200) {
                  setStatus({ success: true });
                  setSubmitting(false);
                  console.log('Success');
                  resetForm();
                  setSuccess(true);
                } else {
                  setStatus({ success: false });
                  setErrors({ submit: 'No se pudo crear la empresa' });
                  setSubmitting(false);
                }
              })
              .then((result) => console.log(result))
              .catch((error) => {
                setStatus({ success: false });
                setErrors({ submit: error.message });
                setSubmitting(false);
              });
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
                    type="text"
                    value={values.nombre}
                    name="nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Nombre de la empresa"
                    inputProps={{}}
                  />
                  {touched.nombre && errors.nombre && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.nombre}
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
                    id="password-signup"
                    type="text"
                    value={values.descripcion}
                    name="descripcion"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Descripción de la empresa"
                    inputProps={{}}
                  />
                  {touched.descripcion && errors.descripcion && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.descripcion}
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
