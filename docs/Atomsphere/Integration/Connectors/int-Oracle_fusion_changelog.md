# Oracle Fusion changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8161d962-f84f-4a11-a90a-9fdb38bacb7a"/>
</head>


## Changelog

**2023-09 (Current)**

-   In the connection configuration, Service Name and Custom SOAP WSDL Relative Path fields are mutually exclusive. Service Name dropdown is applicable and displayed only when Service Operation is **not** CUSTOM. Custom SOAP WSDL Relative Path is applicable and displayed only when the Service Operation is CUSTOM.

-   The connection extension allows overriding of the Fusion endpoint URL without re-importing the profile.

-   There was an issue in the Oracle Fusion Connector Import Wizard where the **Custom SOAP WSDL URL** field threw an error when the absolute path URL was entered. This has been fixed by renaming the label as **Custom SOAP WSDL Relative URL**. Users must enter the relative path URL to successfully execute the Customer Service operation.

    For example, Instead of entering the absolute path URL: `https://fa-etan-dev8-saasfademo1.ds-fa.oraclepdemos.com/xmlpserver/services/PublicReportService?WSDL`, users are requested to enter the relative path URL: `xmlpserver/services/PublicReportService?WSDL`