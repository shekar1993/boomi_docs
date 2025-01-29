import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBoxInput from "./SearchBox";

// Mock the entire @docusaurus/router module
jest.mock('@docusaurus/router', () => ({
  useHistory: jest.fn(),
  useLocation: jest.fn()
}));

describe('SearchBoxInput', () => {
  let mockHistoryPush;
  let mockLocationSearch;

  beforeEach(() => {
    // Reset and setup mocks before each test
    mockHistoryPush = jest.fn();
    mockLocationSearch = '?q=test';

    const { useHistory, useLocation } = require('@docusaurus/router');
    useHistory.mockReturnValue({ push: mockHistoryPush });
    useLocation.mockReturnValue({ search: mockLocationSearch });
  });

  it('renders the search box', () => {
    render(<SearchBoxInput />);
    const searchBox = screen.getByTestId('search-box');
    expect(searchBox).toBeInTheDocument();
  });

  it('renders the input field with correct placeholder', () => {
    render(<SearchBoxInput />);
    const input = screen.getByPlaceholderText('I need help with...');
    expect(input).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<SearchBoxInput />);
    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
  });

  it('initializes input value from URL search params', () => {
    render(<SearchBoxInput />);
    const input = screen.getByPlaceholderText('I need help with...');
    expect(input).toHaveValue('test');
  });

  it('navigates to search results page on button click', () => {
    render(<SearchBoxInput />);
    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(mockHistoryPush).toHaveBeenCalledWith('/searchResults?q=test');
  });

  it('navigates to search results page on Enter key press', () => {
    render(<SearchBoxInput />);
    const input = screen.getByPlaceholderText('I need help with...');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', keyCode: 13 });

    expect(mockHistoryPush).toHaveBeenCalledWith('/searchResults?q=test');
  });
  
});
