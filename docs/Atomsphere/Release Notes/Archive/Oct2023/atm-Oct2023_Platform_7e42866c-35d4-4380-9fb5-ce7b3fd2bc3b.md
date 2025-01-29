#  Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-7e42866c-35d4-4380-9fb5-ce7b3fd2bc3b"/>
</head>


:::note In line with our ongoing commitment to advancing and refining our platform, we are retiring the Swagger V2 API. The following change will be implemented in the upcoming release:<br/>
-  Retiring the Swagger V2 API specification for Boomi Enterprise Platform and Partner APIs. Any service reliant on the Swagger V2 API specification or consuming Swagger endpoints may cease to function properly. Any request to the Swagger V2 endpoint will automatically redirect to the newer OpenAPI V3 endpoint, to minimize downtime. You must manually update any external services and integrations using the legacy Swagger endpoints to the newer OpenAPI V3 specification.<br/><br/>
To learn more about this change, visit [Boomi Enterprise Platform Swagger V2 API Retirement](https://community.boomi.com/s/article/Boomi-Platform-Swagger-V2-API-Retirement)<br/>
\(INT-9857\)

:::

**We added these features:**
- Help.boomi.com has a new look and feel that’s simple, modern, and intuitive. In this update, you’ll notice:
  - A new Trending Topics section, featuring new and popular content.
  - A new Explore section, featuring the Boomi Enterprise Platform and Boomi Labs.
  - Improved search, featuring both documentation (help.boomi.com) and knowledge articles (community.boomi.com).
  - The Release Notes section is now easy to find and has moved to the top of the page.
  - You can click links on the right of an article to move to different sections within that page.
  - When browsing documentation by service, you can select a service from the top navigation bar or from the Documentation by Service section.
- Boomi GPT is a conversational experience that harnesses the power of generative AI. It aims to radically simplify the work of building integrations and automation. You can describe your business goal in everyday language, then customize what Boomi GPT integrates and automates to fit your business needs.<br></br><br></br> Boomi GPT is a part of the Boomi AI platform add-on. When Boomi AI is enabled on your account, you can click the AI icon on the Platform Home Screen to access Boomi GPT. Contact your account representative for more information on enabling this feature. Read [Boomi GPT](/docs/Atomsphere/Platform/atm-BoomiAI_Getting_Started_5836ede1-84a7-4c32-840b-4a3c4455795b.md) to learn more. (BI-2971)

- The licensing CSV report now provides additional information under the following new headings: 
  - Used in process ID
  - Used in process name

(INT-9487)

- Enhanced the functionality for the Trading Partner connector class to return Standard values under the Connector_type column in the downloaded CSV report. (INT-9519)

- Added Type column values for the Trading Partner connector class, under the Connectors Deployed in Class and the Deployments tabs in the licensing page. (INT-9564)

  To learn more about this feature, see topics:[Connections tabs Connectors Deployed in Class table](/docs/Atomsphere/Platform/r-atm-Connections_tabs_Connections_by_Class_table_d2ee3527-fee6-45c3-be6c-06ce2781681e.md) and [Connections tabs Deployments table](/docs/Atomsphere/Platform/r-atm-Connections_tabs_Deployments_table_2cf4462a-8499-42c9-940f-8b04c94f9c42.md).

- In the Licensing page, you can now see all available connector classes, without a scroll bar, under the Connections by Class table. (INT-9494)

  To learn more about this feature, see topic: [Test connection licensing](/docs/Atomsphere/Platform/c-atm-Test_connection_licensing_04708d54-8ea3-453f-8dac-3e2e6b72330b.md).

- Increased performance when you log in to the Boomi Enterprise Platform using Single Sign-On. (ADSEC-2002)

- We redesigned the Welcome page that displays after you sign in to the Boomi Enterprise Platform so that you have easier access to getting started resources and can explore connector options, discover popular solutions, and view and sort your recent work. (UU-746)

**We fixed these issues:**

- Connection Licensing reports now show the correct status for the requested report in the licensing page. (INT-9653, INT-9522)

- Clicking on the Download link after generating the Connection Licensing CSV report no longer causes an error. (INT-9753)