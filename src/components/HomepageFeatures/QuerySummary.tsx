import React, {FunctionComponent, useEffect, useState, useContext} from 'react';
import {
  buildQuerySummary,
  QuerySummary as HeadlessQuerySummary,
} from '@coveo/headless';
import {Box} from '@mui/material';
import EngineContext from '../common/engineContext';

interface QuerySummaryProps {
  controller: HeadlessQuerySummary;
}

const QuerySummaryRenderer: FunctionComponent<QuerySummaryProps> = (props) => {
  const {controller} = props;
  const [state, setState] = useState(controller.state);

  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );

  const renderNoResults = () => {
    const text = `We have found 0 results for '${state.query}'`;
    return <ex-empty-state text={text} icon="community" label="No Results" />;
  };

  const renderRange = () => {
    return `${state.firstResult}-${state.lastResult} `;
  };

  const renderTotal = () => {
    return `of ${state.total.toString()}`;
  };

  const renderQuery = () => {
    if (state.hasQuery) {
      return `for ${state.query}`;
    }
    else{
      return null;
    }
  };

  const renderHasResults = () => {
    return (
      <Box>
        <div className="result-query"  data-testid="result-query">
          {`Results ${renderRange()} ${renderTotal()} ${renderQuery()}`}
        </div>
      </Box>
    );
  };

  return !state.hasResults ? renderNoResults() : renderHasResults();
};

const QuerySummary = () => {
  const engine = useContext(EngineContext)!;
  const controller = buildQuerySummary(engine);
  return <QuerySummaryRenderer controller={controller} />;
};

export default QuerySummary;
