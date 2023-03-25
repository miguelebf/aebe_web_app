import { useEffect, useState } from 'react';

import * as React from 'react';

// material-ui
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Autocomplete,
  TextField,
  CircularProgress,
  Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

// ============================|| FIREBASE - REGISTER ||============================ //
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AuthRegister = () => {
  //States
  const [provincia, setProvincia] = useState(null);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
  };

  const getEmpresas = (empresa) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', access_token: '1234567890' }
    };
    setLoading(true);
    fetch('https://api-aebe.herokuapp.com/api/v1/companies/search/' + empresa, requestOptions)
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((result) => {
        setLoading(false);
        setOptions(result);
      })
      .catch((error) => {
        setLoading(false);
        console.log('error', error);
      });
  };

  useEffect(() => {
    if (inputValue.length < 3) {
      setOptions([]);
      return undefined;
    }
    if (options.includes(inputValue)) {
      return undefined;
    }
    getEmpresas(inputValue);
  }, [inputValue]);

  //================================================================================================

  const states_ec = [
    { label: 'Azuay', value: 'Azuay' },
    { label: 'Bolivar', value: 'Bolivar' },
    { label: 'Carchi', value: 'Carchi' },
    { label: 'Chimborazo', value: 'Chimborazo' },
    { label: 'Cotopaxi', value: 'Cotopaxi' },
    { label: 'El Oro', value: 'El Oro' },
    { label: 'Esmeraldas', value: 'Esmeraldas' },
    { label: 'Galápagos', value: 'Galápagos' },
    { label: 'Guayas', value: 'Guayas' },
    { label: 'Loja', value: 'Loja' },
    { label: 'Los Ríos', value: 'Los Ríos' },
    { label: 'Manabí', value: 'Manabí' },
    { label: 'Morona Santiago', value: 'Morona Santiago' },
    { label: 'Napo', value: 'Napo' },
    { label: 'Orellana', value: 'Orellana' },
    { label: 'Pastaza', value: 'Pastaza' },
    { label: 'Pichincha', value: 'Pichincha' },
    { label: 'Santa Elena', value: 'Santa Elena' },
    { label: 'Santo Domingo', value: 'Santo Domingo' },
    { label: 'Sucumbíos', value: 'Sucumbíos' },
    { label: 'Tungurahua', value: 'Tungurahua' },
    { label: 'Zamora Chinchipe', value: 'Zamora Chinchipe' },
    { label: '', value: '' }
  ];

  return (
    <>
      <Snackbar open={success} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Finca creada con éxito!
        </Alert>
      </Snackbar>
      <Formik
        initialValues={{
          nombre_finca: '',
          coordenadas: '',
          ciudad: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          nombre_finca: Yup.string().max(255).required('Nombre es requerido'),
          coordenadas: Yup.string().max(255).required('Coordenadas es requerido'),
          ciudad: Yup.string().max(255).required('Ciudad es requerido')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', access_token: '1234567890' },
              body: JSON.stringify({
                name: values.nombre_finca,
                city: values.ciudad,
                state: provincia['value'],
                geo: values.coordenadas,
                company_id: options.find((o) => o.name === inputValue)['id']
              })
            };
            fetch('https://api-aebe.herokuapp.com/api/v1/fincas', requestOptions)
              .then((response) => {
                console.log(response);
                if (response.status === 200) {
                  setStatus({ success: true });
                  setSubmitting(false);
                  console.log('Success');
                  resetForm();
                  setProvincia(null);
                  setOptions([]);
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
                  <InputLabel htmlFor="firstname-signup">Nombre Finca</InputLabel>
                  <OutlinedInput
                    id="nombre_finca"
                    value={values.nombre_finca}
                    name="nombre_finca"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Nombre"
                    fullWidth
                    error={Boolean(touched.nombre_finca && errors.nombre_finca)}
                  />
                  {touched.nombre_finca && errors.nombre_finca && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.nombre_finca}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <FormControl fullWidth>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      getOptionLabel={(option) => option.label}
                      isOptionEqualToValue={(option, value) => option.label === value.label}
                      value={provincia}
                      onChange={(event, newValue) => {
                        setProvincia(newValue);
                      }}
                      options={states_ec}
                      renderInput={(params) => <TextField {...params} label="Provincia" opacity="20" />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">Ciudad</InputLabel>
                  <OutlinedInput
                    id="ciudad"
                    value={values.ciudad}
                    name="ciudad"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Ciudad"
                    fullWidth
                    error={Boolean(touched.ciudad && errors.ciudad)}
                  />
                  {touched.ciudad && errors.ciudad && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.ciudad}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <FormControl fullWidth>
                    <Autocomplete
                      id="autocomplete_company"
                      options={options}
                      loading={loading}
                      isOptionEqualToValue={(option, value) => option.name === value.name}
                      filterOptions={(x) => x}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Empresa"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </FormControl>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Coordenadas</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.coordenadas}
                    name="coordenadas"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="0.0000lat, 0.0000long"
                    inputProps={{}}
                  />
                  {touched.coordenadas && errors.coordenadas && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.coordenadas}
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
                    Crear Finca
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
