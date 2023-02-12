// project import
import { Box } from '@mui/system';

// ==============================|| CLIMA PAGE ||============================== //

const Exportaciones = () => (
  <Box
    sx={{
      display: 'block',
      width: '100%',
      height: '95%'
    }}
  >
    <iframe
      src="https://app.powerbi.com/view?r=eyJrIjoiMTQ5NGRkYmEtOThhYS00ZjcyLWJjMDAtYzBmYWZmMmY5NTY2IiwidCI6ImI3YWY4Y2FmLTgzZDgtNDY0NC04NWFlLTMxN2M1NDUyMjNjMSIsImMiOjR9&pageName=ReportSectionbbc5bec5083cc8bc21b2"
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

export default Exportaciones;
