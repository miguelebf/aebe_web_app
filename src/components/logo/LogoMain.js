import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

import logoDark from 'assets/images/logo_observatorio_dark.svg';
import logo from 'assets/images/logo_observatorio.svg';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = () => {
  const theme = useTheme();
  return <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Mantis" width="100" />;
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
