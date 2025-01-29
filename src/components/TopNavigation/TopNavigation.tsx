import React from "react";
import "./TopNavigation.css";
import MenuItems from "./MenuItems/MenuItems";

const TopNavigation: React.FunctionComponent = () => {
  const topMenuItems = [
    {
      id: 1,
      label: "Integration",
      icon: "Integration",
      submenu: [
        {
          id: 1,
          submenuLabel: "Getting Started",
          docLink:
            "docs/Atomsphere/Integration/Getting%20started/c-atm-Integration_and_iPaaS_257fcf2c-7e93-48d0-be67-bd53fb444930",
        },
        {
          id: 2,
          submenuLabel: "Connectors",
          docLink:
            "docs/Atomsphere/Integration/Connectors/c-atm-Connectors_bb305b35-0f13-4937-a918-f85dbbe1b27b",
        },
        {
          id: 3,
          submenuLabel: "API Reference",
          docLink:
            "docs/Atomsphere/Integration/int-Boomi_Platform_APIs",
        },
      ],
    },
    {
      id: 2,
      label: "DataHub",
      icon: "Hub",
      submenu: [
        {
          id: 1,
          submenuLabel: "Getting Started",
          docLink:
            "docs/Atomsphere/Master%20Data%20Hub/Getting%20started/c-mdm-Getting_started_8f98c194-2f50-4949-b42d-d3925b210d2b",
        },
        {
          id: 2,
          submenuLabel: "Modeling",
          docLink:
            "docs/Atomsphere/Master%20Data%20Hub/Modeling/c-mdm-Modeling_079b48bb-6c87-431f-ac30-5c7ed5d57814",
        },
        {
          id: 3,
          submenuLabel: "API Reference",
          docLink:
            "docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-REST_APIs_f43499a6-3d1c-4102-bf13-94b02659dd9f",
        },
      ],
    },
    {
      id: 3,
      label: "API Management",
      icon: "API Management",
      submenu: [
        {
          id: 1,
          submenuLabel: "Getting Started with Boomi API Management",
          docLink:
            "docs/Atomsphere/API%20Management/Topics/c-api-Getting_Started_f06ad982-c0d9-4c67-ab0f-7a19db534868",
        },
        {
          id: 2,
          submenuLabel: "Getting Started with Boomi API Control Plane",
          docLink:
            "docs/Atomsphere/API%20Management/Topics/cp-Introduction",
        },
        {
          id: 3,
          submenuLabel: "Getting Started with Boomi Cloud API Management",
          docLink:
            "docs/Atomsphere/API%20Management/cam/cloud/GettingStarted/Overview_of_api_control_center",
        },
      ],
    },
    {
      id: 4,
      label: "Flow",
      icon: "Flow",
      submenu: [
        {
          id: 1,
          submenuLabel: "Getting Started",
          docLink:
            "docs/Atomsphere/Flow/topics/c-flo-Getting_Started_f26280db-5b73-46dd-b087-4423f5dc6774",
        },
        {
          id: 2,
          submenuLabel: "Flow and Integration",
          docLink:
            "/docs/Atomsphere/Flow/topics/c-flo-AS_Flow_Integration_29be6cb0-f11a-4eaa-a03a-d1ce7c42e77d",
        },
        {
          id: 3,
          submenuLabel: "API Reference",
          docLink: "https://manywho.github.io/docs-api/ ",
        },
      ],
    },
    {
      id: 5,
      label: "Event Streams",
      icon: "Event Streams",
      submenu: [
        {
          id: 1,
          submenuLabel: "Getting Started",
          docLink:
            "/docs/Atomsphere/Event Streams/es-getting_started_4264b227-9e7a-4705-add9-2bfda9327306",
        },
        {
          id: 2,
          submenuLabel: "Event Streams Connector",
          docLink: "/docs/Atomsphere/Event Streams/es-connector",
        },
        {
          id: 3,
          submenuLabel: "API Reference",
          docLink:
            "/docs/Atomsphere/Event Streams/es-Event_Streams_Admin_API_f16d80b2-0843-4b1c-a651-fe31237b4721 ",
        },
      ],
    },
    {
      id: 6,
      label: "Boomi Enterprise Platform",
      icon: "BoomiPlatform",
      submenu: [
        {
          id: 1,
          submenuLabel: "About the Boomi Enterprise Platform",
          docLink:
            "/docs/Atomsphere/Platform/c-atm-AtomSphere_platform_1d7d7d01-ea27-4aef-ae7c-bd190cbc6ee5",
        },
        {
          id: 2,
          submenuLabel: "Task Automation",
          docLink:
            "/docs/Atomsphere/Platform/atm-Task_Automation",
        },
        {
          id: 3,
          submenuLabel: "Boomi AI",
          docLink: "/docs/Atomsphere/Platform/atm-About_BoomiAI_d3bd0d92-4185-44a5-925f-0cb392fa1978",
        },
      ]
    },
  ];
  return (
    <div className="top-navigation" data-testid="top-navigation">
      <div className="top-menu-wrapper">
        <div className="top-menu">
          {topMenuItems.map((menuItems) => {
            return <MenuItems key={menuItems?.id} menuItems={menuItems} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
