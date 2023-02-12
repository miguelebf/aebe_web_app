import PropTypes from 'prop-types';

// material-ui
import { Box, Container, Grid, Typography } from '@mui/material';

// third party
import Marquee from 'react-fast-marquee';

// assets
// import imgcust1 from 'assets/images/landing/client-01.png';
// import imgcust2 from 'assets/images/landing/client-02.png';
// import imgcust3 from 'assets/images/landing/client-03.png';
// import imgcust4 from 'assets/images/landing/client-04.png';

// ================================|| SLIDER - ITEMS ||================================ //

const Item = ({ item }) => (
  <Typography
    variant="h2"
    color="white"
    sx={{
      cursor: 'pointer',
      fontWeight: 600,
      my: 1,
      mx: 2.5,
      transition: 'all 0.3s ease-in-out',
      opacity: 0.9,
      '&:hover': { opacity: '1' }
    }}
  >
    {item.text}
  </Typography>
);

Item.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    highlight: PropTypes.bool
  })
};

// ==============================|| LANDING - PARTNER PAGE ||============================== //

const PartnerBlock = () => {
  // const partnerimage = [{ image: imgcust1 }, { image: imgcust2 }, { image: imgcust3 }, { image: imgcust4 }];
  const items = [
    { text: 'ASOGUABO' },
    { text: 'TIERRA FERTIL' },
    { text: 'COOPERATIVA ORO VERDE' },
    { text: 'ASOCIACIÓN FINCAS EL ORO' },
    { text: 'ASOPROREY' },
    { text: 'ASOCIACION 11 DE ABRIL' },
    { text: 'ASOCIACIÓN LOS CHIRIJOS' },
    { text: 'AGROAMBIENTE' },
    { text: 'AGROBAN' }
  ];
  return (
    <Box sx={{ mb: 20, mt: 20 }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid container spacing={1} justifyContent="center" sx={{ textAlign: 'center' }}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sx={{ pb: 5 }}>
                <Typography variant="h1" fontWeight="900">
                  Aliados Claves
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <Grid container spacing={5} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
              {partnerimage.map((item, index) => (
                <Grid item key={index}>
                  <img src={item.image} alt="feature" />
                </Grid>
              ))}
            </Grid>
          </Grid> */}
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12}>
          <Marquee pauseOnHover direction="right" gradient={false}>
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PartnerBlock;
