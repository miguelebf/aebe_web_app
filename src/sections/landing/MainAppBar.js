import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
//import Link from '@mui/icons-material/Link';

//const pages = ['Metas', '/', 'Caracteristicas', '/', 'Planes'];

function MainAppBar({ children }) {
  return (
    <AppBar position="absolute" color="transparent" elevation="0" sx={{ zIndex: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>{children}</Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <PersonIcon sx={{ color: 'rgb(0,0,0)' }} />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            href="/login"
            component="a"
            sx={{
              mr: 2,
              paddingLeft: 1,
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'rgb(0,0,0)',
              textDecoration: 'none'
            }}
          >
            Iniciar Sesión
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;
