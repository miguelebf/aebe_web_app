import { Box } from '@mui/system';

//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const PrecioPage = () => (
  <Box
    sx={{
      display: 'block',
      width: '100%',
      height: '95%'
    }}
  >
    <iframe
      src="https://app.powerbi.com/view?r=eyJrIjoiMjBhMTkzOTEtYmEyMS00N2Y5LTg1ZTktOTY4MWE0YjkyODRhIiwidCI6ImI3YWY4Y2FmLTgzZDgtNDY0NC04NWFlLTMxN2M1NDUyMjNjMSIsImMiOjR9"
      title="page"
      width="100%"
      height="100%"
      style={{
        border: 'none'
      }}
    ></iframe>
  </Box>
);

export default PrecioPage;
