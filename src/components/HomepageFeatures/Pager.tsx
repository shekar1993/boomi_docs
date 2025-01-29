import React, {FunctionComponent, useEffect, useState, useContext} from 'react';
import {Pagination} from '@mui/material';
import {buildPager, Pager as HeadlessPager, buildQuerySummary} from '@coveo/headless';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EngineContext from '../common/engineContext';
import './Pager.css';

interface PagerProps {
  controller: HeadlessPager;
}

const PagerRenderer: FunctionComponent<PagerProps> = (props) => {
  const {controller} = props;
  const [state, setState] = useState(controller.state);
  const engine = useContext(EngineContext)!;
  const queryController = buildQuerySummary(engine);
  const [querystate, setQueryState] = useState(queryController.state);
  useEffect(
    () =>
      controller.subscribe(() =>
        setTimeout(() => setState(controller.state), 0)
      ),
    [controller]
  );

  useEffect(
    () => queryController.subscribe(() => setQueryState(queryController.state)),
    []
  );

  const setPage = (pageNumber: number) => {
    controller.selectPage(pageNumber);
  };
  if(!querystate.hasResults){
    return null;
  }
  return (
    <div className='result-pagination'  data-testid="result-pagination">
      <span className='results_current_page' data-testid="results-current-page">Current page</span>
      <Pagination
        page={state.currentPage}
        count={state.maxPage}
        onChange={(e, page) => {
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 100);      
          setPage(page)}
        }
        shape="rounded"
        size="small"
      />
    </div>
  );
};

const Pager = () => {
  const engine = useContext(EngineContext)!;
  const controller = buildPager(engine, {
    options: {numberOfPages: 3},
  });

  return <PagerRenderer controller={controller} />;
};

export default Pager;
