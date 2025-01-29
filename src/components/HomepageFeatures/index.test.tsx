import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPage from '.'; 
import { SearchStringContext } from '../../context/SearchString'; // Replace with the correct path
import homePageControls from '../Controls';
import DevDocsAlertBanner from './DevDocsAlertBanner/DevDocsAlertBanner';

jest.mock('./HomePageBanner/HomePageBanner', () => () => <div>HomePageBanner Mock</div>);
jest.mock('./WhatsNewSection/WhatsNewSection', () => () => <div>WhatsNewSection Mock</div>);
jest.mock('./CategoryTiles/CategoryTiles', () => () => <div>CategoryTiles Mock</div>);
jest.mock('./OtherBoomiResources/OtherBoomiResources', () => () => <div>OtherBoomiResources Mock</div>);
jest.mock('./BoomiExplore/BoomiExplore', () => () => <div>BoomiExplore Mock</div>);
jest.mock('./DevDocsAlertBanner/DevDocsAlertBanner', () => () => <div>DevDocsAlertBanner Mock</div>);

describe('SearchPage', () => {
  it('renders the home page content when searchSubmitted is false', () => {
    render(
      <SearchStringContext.Provider value={{ searchSubmitted: false }}>
        <SearchPage />
      </SearchStringContext.Provider>
    );

    expect(screen.getByTestId('home-page-content')).toBeInTheDocument();
    expect(screen.getByTestId('boomi-documentation-header')).toHaveTextContent('Boomi Documentation');
    expect(screen.getByText('HomePageBanner Mock')).toBeInTheDocument();
    expect(screen.getByText('WhatsNewSection Mock')).toBeInTheDocument();
    expect(screen.getByText('BoomiExplore Mock')).toBeInTheDocument();
    expect(screen.getByText('CategoryTiles Mock')).toBeInTheDocument();
    expect(screen.getByText('OtherBoomiResources Mock')).toBeInTheDocument();
    expect(screen.getByText('DevDocsAlertBanner Mock')).toBeInTheDocument();
  });

  it('does not render the home page content when searchSubmitted is true', () => {
    render(
      <SearchStringContext.Provider value={{ searchSubmitted: true }}>
        <SearchPage />
      </SearchStringContext.Provider>
    );

    expect(screen.queryByTestId('home-page-content')).not.toBeInTheDocument();
    expect(screen.queryByTestId('boomi-documentation-header')).not.toBeInTheDocument();
    expect(screen.queryByText('HomePageBanner Mock')).not.toBeInTheDocument();
    expect(screen.queryByText('WhatsNewSection Mock')).not.toBeInTheDocument();
    expect(screen.queryByText('BoomiExplore Mock')).not.toBeInTheDocument();
    expect(screen.queryByText('CategoryTiles Mock')).not.toBeInTheDocument();
    expect(screen.queryByText('OtherBoomiResources Mock')).not.toBeInTheDocument();
    expect(screen.queryByText('DevDocsAlertBanner Mock')).not.toBeInTheDocument();
  });

  it('conditionally renders HomePageBanner based on homePageControls', () => {
    homePageControls.homePageBanner = { showBanner: true };

    render(
      <SearchStringContext.Provider value={{ searchSubmitted: false }}>
        <SearchPage />
      </SearchStringContext.Provider>
    );

    expect(screen.getByText('HomePageBanner Mock')).toBeInTheDocument();
  });

  it('does not render HomePageBanner when showBanner is false', () => {
    homePageControls.homePageBanner = { showBanner: false };

    render(
      <SearchStringContext.Provider value={{ searchSubmitted: false }}>
        <SearchPage />
      </SearchStringContext.Provider>
    );

    expect(screen.queryByText('HomePageBanner Mock')).not.toBeInTheDocument();
  });
});



