import React, {FunctionComponent, useEffect, useContext, useState} from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import {
  buildSort,
  buildRelevanceSortCriterion,
  buildCriterionExpression,
  buildDateSortCriterion,
  SortOrder,
  Sort as HeadlessSort,
  SortCriterion,
  buildQuerySummary
} from '@coveo/headless';
import {InputLabel, MenuItem, Select} from '@mui/material';
import EngineContext from '../common/engineContext';
import './Sort.css'

export interface SortProps {
  controller: HeadlessSort;
  criteria: [string, SortCriterion][];
}

const SortRenderer: FunctionComponent<SortProps> = (props) => {
  const {controller, criteria} = props;
  const [state, setState] = React.useState(controller.state);
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

  const getCurrentCriterion = () =>
    criteria.find(
      ([, criterion]) =>
        state.sortCriteria === buildCriterionExpression(criterion)
    )! || criteria[0];

  const getCriterionFromName = (name: string) =>
    criteria.find(([criterionName]) => criterionName === name)!;

    if(!querystate.hasResults){
      return null;
    }  
    
  return (
    <Box className="sort-dd-container">
      <FormControl className="result-sortby" data-testid="result-sortby">
        <InputLabel id="sort-by-label" data-testid="sort-by-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-label"
          className="result-sortby_select"
          label="Sort by"
          id="sort-by"
          onChange={(e) =>
            controller.sortBy(getCriterionFromName(e.target.value as string)[1])
          }
          defaultValue={getCurrentCriterion()[0]}
        >
          {criteria.map(([criterionName]) => (
            <MenuItem key={criterionName} value={criterionName}>
              {criterionName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const Sort = () => {
  const engine = React.useContext(EngineContext)!;

  const criteria: [string, SortCriterion][] = [
    ['Relevance', buildRelevanceSortCriterion()],
    ['Date (Ascending)', buildDateSortCriterion(SortOrder.Ascending)],
    ['Date (Descending)', buildDateSortCriterion(SortOrder.Descending)],
  ];
  const initialCriterion = criteria[0][1];
  const controller = buildSort(engine, {
    initialState: {criterion: initialCriterion},
  });

  return <SortRenderer controller={controller} criteria={criteria} />;
};
export default Sort;
