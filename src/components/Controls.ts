var homePageControls = {
  devDocsAlertBanner: {
    showBanner: false,
    bannerText:
      "Boomi’s new developer documentation is here, with curated content on Integration Connectors.",
    bannerCTAtext: "Explore now",
    bannerCTAlink: "https://developer.boomi.com/",
  },
  homePageBanner: {
    showBanner: true,
    bannerImage: "/img/homePageBanner/newBanner.svg",
    bannerImageDarkMode: "/img/homePageBanner/newBannerDark.svg",
    bannerHeadline: "Boomi terminology changes",
    bannerCTAtext: "Learn More ›",
    bannerCTAlink:
      "https://help.boomi.com/docs/Atomsphere/Platform/atm-Boomi_terminology_changes",
  },
  homePageExploreSection: {
    sectionHeader: "Explore",
    exploreCards: [
      {
        id: 1,
        icon:"Ai",
        header: "Boomi AI",
        submenu: [
          {
            id: 1,
            title: "Boomi AI FAQ",
            docLink: "docs/Atomsphere/Platform/atm-BoomiAI_FAQ_8a8705a8-4773-44bd-92ed-41105186781c",
          },
          {
            id: 2,
            title: "Boomi Scribe",
            docLink: "docs/Atomsphere/Platform/atm-BoomiAI_Boomi_Scribe",
          },
          {
            id: 3,
            title: "Boomi DesignGen",
            docLink: "docs/Atomsphere/Platform/atm-BoomiAI_Boomi_DesignGen",
          },
          {
            id: 4,
            title: "AI Agent Garden",
            docLink: "docs/Atomsphere/Platform/atm-BoomiAI_Agent_Garden",
          },
        ],
      },
      {
        id: 2,
        icon:"API Management",
        header: "Boomi Cloud API Management",
        submenu: [
          {
            id: 1,
            title: "Release Notes",
            docLink:
              "docs/Atomsphere/API%20Management/Topics/cam_release_notes",
          },
          {
            id: 2,
            title: "Cloud API Management",
            docLink:
              "docs/category/cloud",
          },
          {
            id: 3,
            title: "Local Edition 6.0.0",
            docLink:
              "docs/category/local-edition-600",
          },
          {
            id: 4,
            title: "Local Edition 5.6.2",
            docLink:
              "docs/category/local-edition-562",
          },
        ],
      },
      {
        id: 3,
        icon:"API Management",
        header: "Boomi API Control Plane",
        submenu: [
          {
            id: 1,
            title: "Federated API Management",
            docLink: "docs/Atomsphere/API%20Management/Topics/cp-Introduction",
          },
          {
            id: 2,
            title: "Getting Started",
            docLink: "docs/Atomsphere/API%20Management/Topics/cp-Gettting_started",
          },
          {
            id: 3,
            title: "Concepts",
            docLink: "docs/Atomsphere/API%20Management/Topics/cp-Concepts",
          },
          {
            id: 4,
            title: "Release Notes",
            docLink: "docs/Atomsphere/API%20Management/Topics/cp-release_notes",
          },
        ],
      },
      {
        id: 4,
        icon:"Lab",
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
        id: 5,
        icon:"Boomiplatform",
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
    ],
  },
};

export default homePageControls;
