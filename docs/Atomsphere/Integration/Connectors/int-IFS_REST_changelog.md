# IFS REST – Partner changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fc78996b-e198-48bc-bfcc-cd8eb3dd05d9"/>
</head>


## Changelog

**2024-11 (Version 342, Current)**

- With the release of Time Zone support in IFS Cloud, users of this connector can now send their website or server time zone aware requests to IFS applications. A new property has been added to the IFS REST - Partner connector allowing users to set the header `X-IFS-Time-Zone-Aware-Request`.

**2024-09 (Version 339)**

- The `Function` action type, as previously communicated, will be removed. You should now use the `Function V2` action type to call IFS functions.

- Custom Header Support for Content-Type and Accept Headers.

**2024-08 (Version 333)**

- Custom Header support for Content-Type and Accept headers by using Dynamic Document properties. For more information, visit the [Custom Header Support for IEEE Standard 754 in Boomi IFS REST Partner Connector](https://community.boomi.com/s/article/How-To-set-Custom-Header-in-IFS-REST-Partner-Connector-to-Support-IEEE-Standard-754) community article.

- The GET action type now supports using the Supplemental Entity Sets and Variables connector document property at the second level. Previously, this capability was only available when accessing three or more levels. With this release, you can now fetch data at the second level.

**2024-06 (Version 327)**

- A maximum of 5 retries was implemented for cases where the server responds with a `MI_MODIFIED_ERROR` (503 status code). This approach posed challenges when the requests included payloads. These challenges have been fixed in this release.

**2024-02 (Version 325)**

-  The deprecation of the **Function** action has been delayed to September 2024.

**2023-09 (Version 323)**

-  Introduction of **Function V2** action to replace the existing **Function** action that is scheduled for deprecation in December 2023.