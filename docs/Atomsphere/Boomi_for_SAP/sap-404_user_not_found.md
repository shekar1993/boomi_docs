# 404 User Not found

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-d113f477-cd4a-4911-b414-2194e0e1bc51"/>
</head>

## Challenge

The error message varies depending on the root cause. It may be either [404] Extension Not found Error, [404] Not found Error …​ Backend version: -(-/-), or [404] Not found Error …​ Backend version: (NOT blank). 

Sample error message:

```
Connection Failed; Caused by: [404] Not found Error; host/url misconfiguration or mismatch between connector version and backend version.
Connector version:171-d558055-v1.1-Hanne Backend version: -(-/-)
```

## Solution

- **[404] Extension Not found Error**

  Verify the Boomi for SAP core installation is correct by checking if the Boomi for SAP core UI is functional. Open the transaction `/n/IXBX/ZBX001` or append `/zbx` to the SAP URL and check for errors. 

- **[404] Not found Error …​ Backend version: -(-/-)**

  Check the connection to Boomi for SAP core. If the backend version is blank (-/-), it indicates a connection failure. Verify the host, port, and URL settings for correctness.

- **[404] Not found Error …​ Backend version: (NOT blank)**

  Update either Boomi for SAP Core or the connector to ensure compatibility. Verify the versions of the Boomi for the SAP core and connector.

