#  Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-aa9c5602-160e-466c-b295-b8dd786d2381"/>
</head>

**We added these features:**

- The Boomi GPT home page has a new look and two UX enhancements. You’ll notice:

  - You can click tiles with prompt examples to help you start your conversation.
  - The Boomi AI icon appears in the top right in Settings, Integration, Master Data Hub, API Management, Event Streams, and Bundles, allowing you to access Boomi GPT from multiple screens in the Platform. Read [Getting Started with Boomi GPT](/docs/Atomsphere/Platform/atm-BoomiAI_Getting_Started_5836ede1-84a7-4c32-840b-4a3c4455795b.md) to learn more. (BI-3685, UU-2324)

- Upgraded the Boomi Enterprise Platform to use Java Corretto 8u382. (ADSEC-2561)

- You can no longer connect to or accept requests from the following Boomi USA East Integration Test Clouds (ET):

  - `https://c03-usa-east-et.integrate-test.boomi.com`
  - `https://c04-usa-east-et.integrate-test.boomi.com` (CLOUD-3527)

  For more information about available Boomi Clouds, see the topics [Connecting to the Boomi Atom Clouds and Hub Clouds](../../Platform/atm-Connecting_to_the_boomi_atom_clouds_and_hub_clouds_fa4ee368-735e-4f4b-bb1b-b269de9b9448.mdx) and [Accepting requests from the Atom Clouds and Hub Clouds](../../Platform/atm-Accepting_requests_from_the_boomi_atom_clouds_and-hub_clouds_c50ae6a0-3849-4d36-a74e-ed9e7e87b3ee.md).

- Improved ability to drag and drop components and folders in the component explorer. (UU-2090)

- Improved experience when interacting with the menu button next to components or folders in the component explorer. (UU-2088)

- Standardized icon size and appearance for connectors in the connectors list. (UU-2162)

**We fixed these issues:**

- Boomi GPT deactivates integration suggestion tiles after you select an integration design. (BI-3582)

- The Boomi GPT conversation window now has a 180 character limit. Text wraps when you type a long sentence. (BI-3501)
