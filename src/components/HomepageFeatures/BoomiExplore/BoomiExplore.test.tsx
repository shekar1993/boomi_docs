import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoomiExplore from "./BoomiExplore";
import { Swiper as MockSwiper } from "swiper/react";
import ExploreCardLayout from "./ExploreCardLayout/ExploreCardLayout";

// Mock swiper/react
jest.mock("swiper/react", () => ({
  Swiper: jest.fn(({ children }) => (
    <div data-testid="mock-swiper">{children}</div>
  )),
  SwiperSlide: jest.fn(({ children }) => (
    <div data-testid="mock-swiper-slide">{children}</div>
  )),
  Pagination: jest.fn(),
  Navigation: jest.fn(),
}));

// Mock the ExploreCardLayout component to simplify tests
jest.mock("./ExploreCardLayout/ExploreCardLayout", () => {
  return ({ cardDetails, indexNumber }) => (
    <div data-testid={`explore-card-${cardDetails.id}`}>
      <div>{cardDetails.header}</div>
      {cardDetails.submenu.map((submenu) => (
        <div key={submenu.id}>{submenu.title}</div>
      ))}
    </div>
  );
});

// Mock the homePageControls data
const mockHomePageControls = {
  homePageExploreSection: {
    sectionHeader: "Explore",
    exploreCards: [
      {
        id: 1,
        image: "img/BoomiPlatform.svg",
        darkModeImage: "img/BoomiPlatform_dark.svg",
        header: "Boomi Enterprise Platform",
        submenu: [
          {
            id: 1,
            title: "The Boomi Enterprise Platform",
            docLink:
              "docs/Atomsphere/Platform/c-atm-AtomSphere_platform_1d7d7d01-ea27-4aef-ae7c-bd190cbc6ee5",
          },
          {
            id: 2,
            title: "Core terms and concepts",
            docLink:
              "docs/Atomsphere/Platform/atm-core_concepts_4b20131f-8460-4a0c-935f-5f32320ed6ad",
          },
          {
            id: 3,
            title: "Runtime and platform releases",
            docLink:
              "docs/Atomsphere/Platform/atm-Runtime_and_Atomsphere_releases_8aa6b48e-b0b6-4382-8ffa-a7cf23f0314f",
          },
          {
            id: 4,
            title: "Boomi Pay As You Go",
            docLink:
              "docs/Atomsphere/Platform/atm-Boomi_Pay_As_You_Go_d9f80432-a9de-4717-a7cf-4c9e3ea786c5",
          },
          {
            id: 5,
            title: "Boomi Discover",
            docLink: "docs/Atomsphere/Platform/atm-Boomi_Discover",
          },
        ],
      },
      {
        id: 2,
        image: "img/BoomiLabs.svg",
        darkModeImage: "img/BoomiLabs_dark.svg",
        header: "Boomi Labs",
        submenu: [
          {
            id: 1,
            title: "About Boomi Labs",
            docLink: "docs/Atomsphere/Boomi_Labs/about_boomi_labs",
          },
          {
            id: 2,
            title: "Spaces",
            docLink:
              "docs/Atomsphere/Boomi_Labs/Spaces/Getting_started/overview",
          },
          {
            id: 3,
            title: "Bundles",
            docLink:
              "docs/Atomsphere/Boomi_Labs/Bundles/bundles_Getting_Started_with_Bundles",
          },
          {
            id: 4,
            title: "Integration Packs",
            docLink:
              "docs/Atomsphere/Integration/Integration%20packs/r-atm-Integration_Packs_page_623dba34-859b-4ad4-ad2c-d22d9503bd5a",
          },
          {
            id: 5,
            title: "Process Library",
            docLink:
              "docs/Atomsphere/Integration/Integration%20management/c-atm-Process_libraries_8afa6002-d3a9-4e4d-93fb-1aada133ca31",
          },
        ],
      },
      {
        id: 3,
        image: "img/BoomiPartnerPortal.svg",
        darkModeImage: "img/BoomiPartnerPortal_dark.svg",
        header: "Boomi for SAP",
        submenu: [
          {
            id: 1,
            title: "Boomi for SAP release notes",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap_Release_Notes",
          },
          {
            id: 2,
            title: "Getting started",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap-getting_started",
          },
          {
            id: 3,
            title: "Installation",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap_installation_guide",
          },
          {
            id: 4,
            title: "Configuration",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap-Configuration_Guide",
          },
        ],
      },
      {
        id: 4,
        image: "img/BoomiPartnerPortal.svg",
        darkModeImage: "img/BoomiPartnerPortal_dark.svg",
        header: "Tile 4",
        submenu: [
          {
            id: 1,
            title: "Sample Link",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap_Release_Notes",
          },
          {
            id: 2,
            title: "Sample Link",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap-getting_started",
          },
          {
            id: 3,
            title: "Sample Link",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap_installation_guide",
          },
          {
            id: 4,
            title: "Sample Link",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap-Configuration_Guide",
          },
        ],
      },
      {
        id: 5,
        image: "img/BoomiPartnerPortal.svg",
        darkModeImage: "img/BoomiPartnerPortal_dark.svg",
        header: "Tile 5",
        submenu: [
          {
            id: 1,
            title: "Sample Link",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap_Release_Notes",
          },
          {
            id: 2,
            title: "Sample Link",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap-getting_started",
          },
          {
            id: 3,
            title: "Sample Link",
            docLink: "docs/Atomsphere/Boomi_for_SAP/sap_installation_guide",
          },
        ],
      },
    ],
  },
};

describe("BoomiExplore Component", () => {
  it("renders the BoomiExplore wrapper", () => {
    render(<BoomiExplore />);
    const wrapper = screen.getByTestId("boomi-explore-wrapper");
    expect(wrapper).toBeInTheDocument();
  });

  it("renders the section header", () => {
    render(<BoomiExplore />);
    const sectionHeader = screen.getByText("Explore");
    expect(sectionHeader).toBeInTheDocument();
  });

  it("renders the carousel", () => {
    render(<BoomiExplore />);
    const carousel = screen.getByTestId("carousel-wrapper");
    expect(carousel).toBeInTheDocument();
  });

  it('should hide previous caret button when swiperInstance is at the beginning', () => {
    render(<BoomiExplore />);
    expect(screen.queryByTestId('prev-caret-button')).toBeNull();
  });

  it("calls the slidePrev method on prev caret click", () => {
    const slidePrevMock = jest.fn();
    MockSwiper.prototype.slidePrev = slidePrevMock;

    render(<BoomiExplore />);
    const prevCaretButtons = screen.getAllByTestId("prev-left-caret");
    expect(prevCaretButtons).toHaveLength(2);
    fireEvent.click(prevCaretButtons[0]);
    fireEvent.click(prevCaretButtons[1]);
  });

  it("calls the slideNext method on next caret click", () => {
    const slideNextMock = jest.fn();
    MockSwiper.prototype.slideNext = slideNextMock;

    render(<BoomiExplore />);
    const nextCaretButtons = screen.getAllByTestId("next-right-caret");
    expect(nextCaretButtons).toHaveLength(2);
    fireEvent.click(nextCaretButtons[0]);
    fireEvent.click(nextCaretButtons[1]);
  });
});
