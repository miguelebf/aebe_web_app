import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Box } from '@mui/system';
import { Tooltip, Typography } from '@mui/material';

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState('');

  const handleMouseLeave = () => {
    setHoveredCountry('');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '800px' }}
    >
      <ComposableMap projection={'geoMercator'} projectionConfig={{ scale: 120 }}>
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.name !== 'Antarctica')
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#FFF"
                  onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: {
                      fill: '#e7ca00',
                      outline: 'none'
                    },
                    hover: {
                      fill: '#00A854',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#00A854',
                      outline: 'none'
                    }
                  }}
                ></Geography>
              ))
          }
        </Geographies>
      </ComposableMap>
      {hoveredCountry && (
        <Box sx={{ position: 'absolute', top: '66%', left: '50%' }}>
          <Tooltip
            title={
              <React.Fragment>
                <Typography color="inherit">{hoveredCountry}</Typography>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
                }
              </React.Fragment>
            }
            open={true}
          >
            <span />
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default WorldMap;
