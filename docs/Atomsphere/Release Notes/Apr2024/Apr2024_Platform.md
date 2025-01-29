#  Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-159fb0fe-3c12-445d-bde3-1743cc7b4de8"/>
</head>

**Important information for the upcoming audit log retention changes**

As part of continuously strengthening Boomi’s security posture, we are revamping how long we store customer [audit logs](https://developer.boomi.com/api/platformapi#tag/AuditLog) from indefinite retention towards the industry standard practice of 1-year retention. This policy applies to all Boomi products including Integration, Event Streams, EDI Management, API Management, Master Data Hub, and Flow. While initially slated for April 2024, we've decided to extend the deadline to allow ample time for preparation and downloading of older logs. Stay tuned for the announcement of the new deadline, which will be communicated via the community article below and future release notes. Read [Audit Log Retention Changes for all Boomi Customers](https://community.boomi.com/s/article/Audit-Log-Retention-Changes-for-all-Boomi-Customers) for more information. 

**We added these features:**

- Removed the **Home** button from the top navigation bar. You can click on the Boomi logo to return to the Platform home page. (UU-3540, UU-3537)

- Established a limit of 10000 when creating and linking users to an account from the UserManagement tab and AccountUserRole API object. An error will be thrown if this limit is exceeded.  (ADSEC-2748)

To learn more, see the topic [User Management tab](../../Platform/r-atm-User_management_baf961e2-b480-4fca-a3f5-8262aed6c031.md)

- You can now configure parameters to encrypt SAML assertions in the **Setup** > **SSO Options** tab on the Settings page. (PS-3632)

To learn more, see the topic [SSO Options](../../Platform/r-atm-SSO_Options_Tab_57874809-d2f0-47d7-810c-a5786180ccd6.md)

- Renamed **Boomi Labs** to **Labs** in the top navigation bar in the Boomi Enterprise Platform. (UU-4278, UU-4271)

- Added **Task Automation** to the Welcome page and to the Services menu in the Boomi Enterprise Platform. (UU-4177, UU-3718)

- A new **Discover** tab is available in the top navigation bar, providing the opportunity to explore and install solutions in the Boomi Enterprise Platform. Additionally, the library of Connectors is now accessible through the Discover page. (UU-4171, UU-3718)

- In the **Browse Discover** section of the platform Welcome page, the "Learn more" links and "Go to all Discover solutions" link directly to the [Boomi Discover portal](https://discover.boomi.com/browse-solutions). (UU-3826)

- A banner displays on the Build canvas giving you the option to switch to the new canvas design before it is fully implemented for all users. To learn more, see the Community article [A New Integration Build Experience](https://community.boomi.com/s/article/A-New-Integration-Build-Experience).

**We fixed this issue:**

- Improved how trusted IP addresses are validated to address security vulnerabilities. (ADSEC-1914)
