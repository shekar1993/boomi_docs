# Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-9851abb9-c7d8-45a6-b1c8-b8bebea76fe9"/>
</head>


**We added these features:**

- The new canvas design is now the default view for all users. You can revert back to the legacy user interface by going to your user account settings and from the **Preferences** \> **Integration** screen, switching the **Enable new build canvas and component icons** toggle to **off**. The legacy UI will be available until a future release. For more information, read the community article [A New Integration Build Experience](https://community.boomi.com/s/article/A-New-Integration-Build-Experience). (UU-3474)

- A "Before you begin" dialog box displays in the Discover Welcome page after you finish installing a recipe, providing a list of supporting materials that are available to download. (UU-4614)

- Updated the order of the options in the Services dropdown menu and added **Usage & Billing** to the Resources dropdown menu in the Boomi Enterprise Platform. (UU-4652, UU-4754)

- Added a **Task Automation** tile to and removed the **View More** link from the Services section on the Boomi Enterprise Platform Welcome page. We also removed the **Usage & Billings** tile from the Resources section. You can access **Usage & Billing** from the Resources dropdown menu in the top navigation bar. (UU-4753)

**We fixed these issues:**

- Implemented retry logic so the Platform API will not return HTTP 500 errors when making audit log API calls. (PS-3838)

- Enhanced the sorting strategy for audit log queries so duplicate entries aren’t returned when you make pagination requests to the API. (PS-3847)
