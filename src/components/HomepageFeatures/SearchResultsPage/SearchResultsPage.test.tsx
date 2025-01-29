import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResultsPage from './SearchResultsPage';

// Mock the child components
jest.mock('../QuerySummary', () => () => <div data-testid="query-summary">QuerySummary</div>);
jest.mock('../FacetList', () => () => <div data-testid="facet-list">FacetList</div>);
jest.mock('../Sort', () => () => <div data-testid="sort">Sort</div>);
jest.mock('../ResultList', () => () => <div data-testid="result-list">ResultList</div>);
jest.mock('../Pager', () => () => <div data-testid="pager">Pager</div>);
jest.mock('../ResultsPerPage', () => () => <div data-testid="results-per-page">ResultsPerPage</div>);

describe('SearchResultsPage', () => {
  beforeEach(() => {
    render(<SearchResultsPage />);
  });

  it('renders the search results page wrapper', () => {
    const wrapper = screen.getByTestId('search-results-page-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
