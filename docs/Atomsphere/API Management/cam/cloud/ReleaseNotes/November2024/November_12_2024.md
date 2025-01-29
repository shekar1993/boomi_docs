# Boomi Cloud API Management November 2024 Release Notes

<head>
  <meta name="guidename" content="Cloud API Management"/>
  <meta name="context" content="GUID-f1971db7-43df-4b61-ac58-32a9e2a772d9"/>
</head>

## November 12, 2024 

### We added these features: 

- Enhanced functionality by recording SQL statements that take too long to execute and cause memory exhaustion issues. This will be helpful for debugging. (WA-14193)   

- Organization administrators can access Portal and Content pages outside their organization and can edit or delete configurations not associated with their role. As a workaround to this issue, a new Enabled Permission-based Organizational checks for Application updates checkbox is added in the Config screen, which will restrict user's visibility to Portal and Content pages outside their Organization. (WA-14202) 

### We fixed these features:

- After disabling TIBCO Cloud SSO, the existing TIBCO Cloud users with Boomi Okta SSO enabled could not sign in to Boomi Cloud API Management due to this error message “Your username and password did not match. Please try again”. As a workaround to this issue, the Member Update API was modified to include user credentials, allowing users to sign in to Boomi Cloud API Management via Boomi SSO Okta. (WA-14242)

- Users reported that on Boomi Cloud API Management, the TIBCO Cloud Mashery logo appeared instead of the Boomi logo. Also, the username on the Boomi Cloud API Management UI was cropped in the Firefox browser, and the Support link on the Boomi Cloud API Management home page was broken. Fixed the Boomi logo, username, and support link issues on the Boomi Cloud API Management UI. (WA-14189)

- Favicon displayed the TIBCO logo earlier. Fixed with the Boomi logo. (WA-14216)

- Users reported that they could not open the More Settings page for `API = Liquidador` and endpoints **customer** and **Parametric**. As a workaround, the database was updated to fix this issue. (WA-14187)

- The graphic that appears in the background on the Boomi Cloud API Management homepage after signing in does not match the homepage when not signed in. Once a user is signed in, the top section with the background graphic winds up becoming full page width. Fixed the Boomi Cloud API Management homepage width issue for all users with Boomi branding and sign-on enabled. (WA-14210)

- The user reported that `getPackage V3 API` calls return null for the created date field for one of the API endpoints. As a workaround, the database was updated. (WA-14194)

- Users were able to create multiple keys for different applications with common services. As a workaround to this issue, the user will get an error message when creating the same custom package key for different applications with common services. (WA-12320)

## November 19, 2024

### We added these features: 

- Disabled TIBCO Cloud SSO and added Boomi Okta SSO to sign in to Boomi Cloud API Management. This removes dependency and risk from relying on TIBCO Cloud SSO.  All new and existing Tibco Cloud users onboarded to Boomi can now sign in using Boomi Okta. (WA-14209)

- Organization administrators can access Applications outside their organization and can add, edit, or delete any Organizations or Users not associated with their role. As a workaround to this issue, a new **Enabled Permission-based Organizational checks for Application updates** checkbox is added in the Config screen, which will restrict user's visibility to Applications outside their Organization. (WA-14203)

### We fixed these features:

- After disabling TIBCO Cloud SSO, a user with an area admin role was able to add a Service account role in Boomi Cloud API Management. As a workaround to this issue, disabled the Service Account role for the newly created users in Boomi Cloud API Management. (WA-14252) and (WA-14254)

- After disabling TIBCO Cloud SSO, users could not assign Service account roles to Boomi Cloud API Management. As a workaround to this issue, enabled the Boomi flag to allow users to create a new user and assign Service Account+Admin roles in Boomi Cloud API Management. (WA-14249)

- After disabling TIBCO Cloud SSO, the existing TIBCO Cloud users with Boomi Okta SSO enabled could not sign in to Boomi Cloud API Management due to this error message _"Your username and password did not match. Please try again"_. As a workaround to this issue, the Member Update API was modified to include user credentials, allowing users to sign in to Boomi Cloud API Management via Boomi SSO Okta. (WA-14242)

- After disabling TIBCO Cloud SSO, the existing TIBCO Cloud users with Boomi Okta SSO enabled could not sign in to Boomi Cloud API Management. As a workaround to this issue, the Member Update API was modified to support the migration of TIBCO Cloud users, which allowed the users to sign in to Boomi Cloud API Management via Boomi SSO Okta. (WA-14218)

- Users reported intermittent login issues when the data sent from the v2 API stack failed with a 500 Internal Server Error. As a workaround to this issue, a new mash dash flag (API MQL Query limit) was added to control the maximum limit the API can process. (WA-14155)
