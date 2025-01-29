# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-6ea093a9-b04f-4146-b2fd-a8b61a40cd99"/>
</head>



## Trading Partner Component object 

Fix:

-   This fix resolves an issue where, if the interchangeID was excluded in the X12 Partner Information section of the Trading Partner Component object, the API request failed with a `NullPointerException` error message. (B2B-302)


