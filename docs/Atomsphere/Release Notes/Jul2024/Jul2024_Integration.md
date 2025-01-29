# Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d4e0d9ba-f22b-43fa-a92e-9e27167a8f8a"/>
</head>

**We fixed these issues:**

- The SOAP API response is successful, with no control character exceptions for the Boomi Atomsphere API and Partner API connectors, when the deployed packages are pulled. (INT-12387)
- When creating and deploying a packaged component, the control characters will be automatically removed from the **Package Notes for All** and **Deployment Notes** fields. (INT-10157)

  :::note
  This will be available only for new packaged components deployed after this release.
  :::

- Sub-accounts can now filter the processes published in the primary account's process library. The filtered process list includes processes whose names or descriptions match the typed characters in the **Search processes** field. (INT-12190)
- The Boomi AtomSphere API connector passes the application error response to the next component with Query operation if `Return Application Error Responses` is selected. (INT-6111)

- Added the ability to successfully generate an XML profile by importing the XSD files with dependent schemas, including all profile elements. (INT-10493)



## Event Object API Change Notice

The Event Object API will be updated to return the appropriate information about the related processes with correct process Id values using Notify step in general and bridge modes. 

For more information, refer to [Event Object API Change Notice](https://community.boomi.com/s/article/Event-Object-API-Change-Notice).

This change will be reflected as a part of the August Platform release.
