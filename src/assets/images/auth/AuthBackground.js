// material-ui
import { Box } from '@mui/material';
import { ReactComponent as AebeLogo } from '../logo_aebe_basic.svg';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(15px)',
        zIndex: -1,
        height: '500px',
        width: '500px',
        left: '50%',
        top: '65%',
        marginTop: '-250px',
        marginLeft: '-250px'
      }}
    >
      <AebeLogo />
    </Box>
  );
};

export default AuthBackground;
