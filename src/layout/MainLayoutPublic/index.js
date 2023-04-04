//import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
//import { useSelector } from 'react-redux';

// material-ui
//import { useTheme } from '@mui/material/styles';
import { Box, Container, Toolbar, Button } from '@mui/material';

// project import
//import Drawer from './Drawer';
//import Header from './Header';
import Footer from './Footer';
import navigation from 'menu-items';

import Breadcrumbs from 'components/@extended/Breadcrumbs';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayoutPublic = () => {
  //const menu = useSelector((state) => state.menu);
  //const { drawerOpen } = menu;

  // drawer toggler
  //const [open, setOpen] = useState(!miniDrawer || drawerOpen);
  //const handleDrawerToggle = () => {
  //  setOpen(!open);
  //  dispatch(openDrawer({ drawerOpen: !open }));
  //};

  // set media wise responsive drawer

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Button variant="contained" color="primary" href="/">
          Ir a inicio
        </Button>
        <Toolbar />

        {false && (
          <Container
            maxWidth="lg"
            sx={{
              px: { xs: 0, sm: 2 },
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
            <Outlet />
            <Footer />
          </Container>
        )}
        {!false && (
          <Box
            sx={{
              position: 'relative',
              minHeight: 'calc(100vh - 250px)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={true} /> */}
            <Outlet />
            <Footer />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainLayoutPublic;
