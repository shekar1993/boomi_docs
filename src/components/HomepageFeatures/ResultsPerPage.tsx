import React, {FunctionComponent, useEffect, useState, useContext} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import {
  buildResultsPerPage,
  ResultsPerPage as HeadlessResultsPerPage,
  buildQuerySummary
} from '@coveo/headless';
import EngineContext from '../common/engineContext';
import './ResultsPerPage.css';

interface ResultsPerPageProps {
  options: number[];
  controller: HeadlessResultsPerPage;
}
const ResultsPerPageRenderer: FunctionComponent<ResultsPerPageProps> = (
  props
) => {
  const {controller, options} = props;
  const [state, setState] = useState(controller.state);
  const engine = useContext(EngineContext)!;
  const queryController = buildQuerySummary(engine);
  const [querystate, setQueryState] = useState(queryController.state);

  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );

  useEffect(
    () => queryController.subscribe(() => setQueryState(queryController.state)),
    []
  );
  if(!querystate.hasResults){
    return null;
  }


  return (
    <FormControl component="fieldset" className='results_per_page' data-testid="results-per-page">
      <span className='results_per_page_heading'>Results per page</span>
      <RadioGroup
        row
        value={state.numberOfResults}
        onChange={(event) => {
          controller.set(parseInt(event.target.value, 10));
        }}
      >
        {options.map((numberOfResults) => (
          <FormControlLabel
            key={numberOfResults}
            value={numberOfResults}
            control={<Radio />}
            label={numberOfResults}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const ResultsPerPage = () => {
  const engine = useContext(EngineContext)!;
  const options = [5, 10, 25];
  const controller = buildResultsPerPage(engine, {
    initialState: {numberOfResults: options[0]},
  });
  return <ResultsPerPageRenderer controller={controller} options={options} />;
};
export default ResultsPerPage;
