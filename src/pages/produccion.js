// material-ui
//import { Typography } from '@mui/material';

//import { Box } from '@mui/system';

// project import
import { Box } from '@mui/system';

//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const ProduccionPage = () => (
  <Box
    sx={{
      display: 'block',
      width: '100%',
      height: '95%'
    }}
  >
    <iframe
      src="https://app.powerbi.com/view?r=eyJrIjoiZGZhYjVlYzEtZGRmNC00NzlkLTk0ODQtNjM4MDNiM2EzNmYxIiwidCI6ImI3YWY4Y2FmLTgzZDgtNDY0NC04NWFlLTMxN2M1NDUyMjNjMSIsImMiOjR9"
      title="page"
      allowFullScreen="true"
      style={{
        border: 'none',
        position: 'static',
        width: '100%',
        height: '100%'
      }}
    ></iframe>
  </Box>
);

export default ProduccionPage;
