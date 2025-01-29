#  Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-7e42866c-35d4-4380-9fb5-ce7b3fd2bc3b"/>
</head>


**Note:** In line with our ongoing commitment to advancing and refining our platform, we are retiring the Swagger V2 API. The following change will be implemented in the upcoming release:

-   October release: Retiring the Swagger V2 API specification for Boomi Enterprise Platform and Partner APIs. Any service reliant on the Swagger V2 API specification or consuming Swagger endpoints may cease to function properly. Any request to the Swagger V2 endpoint will automatically redirect to the newer OpenAPI V3 endpoint, to minimize downtime. You must manually update any external services and integrations using the legacy Swagger endpoints to the newer OpenAPI V3 specification.

To learn more about this change, visit [Boomi Enterprise Platform Swagger V2 API Retirement](https://community.boomi.com/s/article/Boomi-Platform-Swagger-V2-API-Retirement)


**We added these features:**

-   For better accuracy and improved visibility in the Connection licensing page, we changed the cursor from an arrow to a hand icon. \(INT-9493\)
-   In the Connection Licensing CSV report, we renamed the column names in the table. *Atom\_id* and *atom\_name* are now *container\_id* and *container\_name*. \(INT-9509\)
-   Combined CREATE and GET actions of Connection licensing objects as an *Execute* action and added them to the Boomi connectors. \(INT-9092\)
-   Improved customer experience when downloading the detailed connection licensing report. Customers can now see progress messages followed by *your report is ready to be downloaded* when the download is ready. Additionally, if an error occurs, a pop-up error message displays on the page. \(INT-9328\)
-   With the exception of *equals*, if the operator values are invalid or blank in the connection licensing API, the API returns an error. \(INT-9756\)