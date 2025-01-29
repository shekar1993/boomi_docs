---
sidebar_position: 2
---

# Updating Older SDK

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-33d828e9-2f61-47f3-95aa-26a069f9ebad"/>
</head>

If you want to update older version of SDK, perform the following steps:

Navigate to the location where you extracted SDK and run the following command: 

- For Windows: 

```xml
MasheryLocalSDK> update-sdk.bat -d "<path of TML <product version from which you want
to upgrade> MasheryLocalSDK folder>"
```

- For Linux/MacOS: 

```$ ./update-sdk.sh [--destination-sdk-path <OLDER_SDK_PATH>]```
