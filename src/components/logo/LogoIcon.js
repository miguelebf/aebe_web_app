// material-ui
import { useTheme } from '@mui/material/styles';

import logoIconDark from 'assets/images/logo_observatorio_icon_dark.svg';
import logoIcon from 'assets/images/logo_observatorio_icon.svg';

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return <img src={theme.palette.mode === 'dark' ? logoIconDark : logoIcon} alt="Mantis" width="100" />;
};

export default LogoIcon;
