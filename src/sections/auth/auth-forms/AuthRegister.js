import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// material-ui
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Select,
  MenuItem,
  Chip
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const { firebaseRegister } = useAuth();
  const scriptedRef = useScriptRef();

  //Select Fincas
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
  }
  const handleChangeFincas = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [nivelEscolar, setnivelEscolar] = useState('');
  const [estadoCivil, setestadoCivil] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

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
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">Nombre*</InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Nombre"
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Apellido*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Apellido"
                    inputProps={{}}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <FormControl fullWidth>
                    <InputLabel id="label_nivel">Nivel Escolar</InputLabel>
                    <Select
                      labelId="label_nivel"
                      id="nive_escolar"
                      value={nivelEscolar}
                      label="Nivel Escolar"
                      onChange={(e) => {
                        setnivelEscolar(e.target.value);
                      }}
                    >
                      <MenuItem value={10}>Primaria</MenuItem>
                      <MenuItem value={20}>Secundaria</MenuItem>
                      <MenuItem value={30}>3er Nivel </MenuItem>
                      <MenuItem value={30}>4to Nivel</MenuItem>
                    </Select>

                    {touched.company && errors.company && (
                      <FormHelperText error id="helper-text-company-signup">
                        {errors.company}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <FormControl fullWidth>
                    <InputLabel id="label_nivel">Estado Civil</InputLabel>
                    <Select
                      labelId="label_nivel"
                      id="nive_escolar"
                      value={estadoCivil}
                      label="Nivel Escolar"
                      onChange={(e) => {
                        setestadoCivil(e.target.value);
                      }}
                    >
                      <MenuItem value={10}>Solter@</MenuItem>
                      <MenuItem value={20}>Casad@</MenuItem>
                      <MenuItem value={30}>Divorciad@ </MenuItem>
                      <MenuItem value={30}>Viud@</MenuItem>
                    </Select>

                    {touched.company && errors.company && (
                      <FormHelperText error id="helper-text-company-signup">
                        {errors.company}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="edad_id">Edad</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.edad && errors.edad)}
                    type="number"
                    id="edad_id"
                    value={values.edad}
                    name="edad"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Edad"
                    inputProps={{}}
                  />
                  {touched.edad && errors.edad && (
                    <FormHelperText error id="edad_id">
                      {errors.edad}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="anos_id">Años de Experiencia</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.anos_experiencia && errors.anos_experiencia)}
                    type="number"
                    id="anos_id"
                    value={values.anos_experiencia}
                    name="anos_experiencia"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Años"
                    inputProps={{}}
                  />
                  {touched.anos_experiencia && errors.anos_experiencia && (
                    <FormHelperText error id="anos_id">
                      {errors.anos_experiencia}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">Numero de Hijos</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.company && errors.company)}
                    id="company-signup"
                    value={values.company}
                    name="edad"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Años"
                    inputProps={{}}
                  />
                  {touched.company && errors.company && (
                    <FormHelperText error id="helper-text-company-signup">
                      {errors.company}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <FormControl fullWidth>
                    <InputLabel id="label_nivel">Empresa</InputLabel>
                    <Select
                      labelId="label_nivel"
                      id="nive_escolar"
                      value={nivelEscolar}
                      label="Nivel Escolar"
                      onChange={(e) => {
                        setnivelEscolar(e.target.value);
                      }}
                    >
                      <MenuItem value={10}>Primaria</MenuItem>
                      <MenuItem value={20}>Secundaria</MenuItem>
                      <MenuItem value={30}>3er Nivel </MenuItem>
                      <MenuItem value={30}>4to Nivel</MenuItem>
                    </Select>

                    {touched.company && errors.company && (
                      <FormHelperText error id="helper-text-company-signup">
                        {errors.company}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-chip-label">Fincas</InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChangeFincas}
                      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Correo Electronico*</InputLabel>
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
                  <InputLabel htmlFor="password-signup">Contraseña</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  By Signing up, you agree to our &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Terms of Service
                  </Link>
                  &nbsp; and &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Privacy Policy
                  </Link>
                </Typography>
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
