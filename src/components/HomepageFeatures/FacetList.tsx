import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Facet from './Facet';
import React from 'react';

const FacetList = () => {
  return (
    <Box mx={4}>
      <div className="result-filters" data-testid="result-filters">
        <span className="result-filters_heading"  data-testid="result-filters-heading">Refine By</span>
        <Facet field="matter" title="Topic" />
        <Facet field="objecttype" title="Content Type" />
      </div>
    </Box>
  );
};

export default FacetList;
