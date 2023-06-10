// project import
import { Box } from '@mui/system';

// ==============================|| CLIMA PAGE ||============================== //

const Clima = () => (
  <Box
    sx={{
      display: 'flex',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      '&::-webkit-scrollbar': { display: 'none' },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none'
    }}
  >
    <iframe
      src="https://www.aebe.agroclima.online/aebe/?finca=142"
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
