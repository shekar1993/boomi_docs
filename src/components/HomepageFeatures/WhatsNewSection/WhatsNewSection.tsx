import React from "react";
import "./WhatsNewSection.css";
import CardLayout from "./CardLayout/CardLayout";

const WhatsNewSection: React.FC = () => {
  const whatsNewCards = [
    {
      id: 1,
      heading: "Release Notes",
      cardIcon: "img/sparkle.svg",
      darkModeCardIcon: "img/sparkle_dark.svg",
      footer: {
        footerTitle: "View previous Release Notes",
        footerDocLink:
          "/docs/category/release-notes",
      },
      body: [
        {
          title: "January 4, 2025",
          titleContent: "New in January 2025",
          icon: "calendar",
          iconColor: "default",
          docLink:
            "docs/Atomsphere/Release%20Notes/Jan2025/Whats_new_in_Jan_2025",
        },
        {
          title: "December 4, 2024",
          titleContent: "New in December 2024",
          icon: "calendar",
          iconColor: "default",
          docLink:
            "docs/Atomsphere/Release%20Notes/Dec2024/Whats_new_in_Dec_2024",
        },
        {
          title: "October 26, 2024",
          titleContent: "New in November 2024",
          icon: "calendar",
          iconColor: "default",
          docLink:
            "docs/Atomsphere/Release Notes/Nov2024/Whats_new_in_Nov_2024",
        },
      ],
    },
    {
      id: 2,
      heading: "Trending Topics",
      cardIcon: "img/fire.svg",
      darkModeCardIcon: "img/fire_dark.svg",
      body: [
        {
          title: "Boomi AI",
          titleContent: "Process canvas: Documenting integrations",
          icon: "Ai",
          iconColor: "color-set",
          docLink:
            "docs/Atomsphere/Platform/atm-BoomiAI_Generating_documentation_in_the_canvas",
        },
        {
          title: "Integration",
          titleContent: "Parallel Development with Branch and Merge",
          icon: "integration",
          iconColor: "color-set",
          docLink:
            "/docs/Atomsphere/Integration/Process%20building/int-Branch_merge_overview",
        },
        {
          title: "DataHub",
          titleContent: "Boomi DataHub connector",
          icon: "hub",
          iconColor: "color-set",
          docLink:
            "/docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connector",
        },
      ],
    },
    {
      id: 3,
      heading: "Jumpstart your journey",
      cardIcon: "img/start.svg",
      darkModeCardIcon: "img/start_dark.svg",
      body: [
        {
          title: "Integration",
          titleContent: "Jumpstart your journey with Integration",
          icon: "integration",
          iconColor: "color-set",
          docLink:
            "docs/atomsphere/integration/getting started/int-jumpstart_your_journey_with_integration",
        },
        {
          title: "Platform",
          titleContent: "Jumpstart your journey with Administration",
          icon: "Boomiplatform",
          iconColor: "color-set",
          docLink:
            "/docs/atomsphere/platform/atm-jumpstart_your_journey_with_administration",
        }
      ],
    },
  ];
  return (
    <div className="whats-new-section-wrapper" data-testid="whats-new-section-wrapper">
          {whatsNewCards?.map((cardDetails) => (
            <CardLayout key={cardDetails?.id} cardDetails={cardDetails} />
          ))}
    </div>
  );
};

export default WhatsNewSection;
