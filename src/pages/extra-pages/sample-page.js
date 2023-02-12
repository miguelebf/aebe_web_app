// material-ui
//import { Typography } from '@mui/material';

//import { Box } from '@mui/system';

// project import
import { Box } from '@mui/system';
import UnderConstruction from 'pages/maintenance/under-construction';

//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <Box
    sx={{
      display: 'block',
      width: '100%',
      height: '85%',
      border: '1px solid'
    }}
  >
    <UnderConstruction />
  </Box>
);

export default SamplePage;
