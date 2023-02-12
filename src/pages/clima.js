// project import
import { Box } from '@mui/system';

// ==============================|| CLIMA PAGE ||============================== //

const Clima = () => (
  <Box
    sx={{
      display: 'block',
      width: '100%',
      height: '95%'
    }}
  >
    <iframe
      src="https://aebe.agroclima.online/aebe/?finca=142"
      title="page"
      width="100%"
      height="100%"
      style={{
        border: 'none'
      }}
    ></iframe>
  </Box>
);

export default Clima;
