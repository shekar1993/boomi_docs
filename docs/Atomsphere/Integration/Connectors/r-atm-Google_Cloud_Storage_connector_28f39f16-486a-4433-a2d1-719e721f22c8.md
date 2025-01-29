# Google Storage connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6a6a387c-697c-49b5-b92c-7018f418c53b"/>
</head>


The Google Storage connector enables you to leverage a powerful, simple, and cost effective object storage service. Using this connector, you can store and retrieve files and data from the Google Cloud Storage platform from a process.

Google Cloud Storage allows world-wide storage and retrieval of any amount of data at any time. You can use Google Cloud Storage for a variety of scenarios including serving website content, storing data for archival and disaster recovery, and distributing large data objects to users through direct download. The Google Storage connector allows you to easily incorporate the Storage Bucket service into your integration and data flow orchestrations. Implementations of using Google Cloud Storage include storing and serving music, running e-commerce operations, providing financial web and mobile apps, and more.



## Connector configuration

To configure a connector to communicate with Google Cloud Storage, set up these two components:

-   Google Storage connection. This connector uses the OAuth 2.0 protocol for authentication and authorization, and you can use the *JWT Bearer Token* and *Authorization Code* grant types for client authentication.
-   Google Storage operation

This approach creates reusable components that contain connection settings and operation settings. After building your connection and operation, set up your Google Storage connector within a process. When the process is defined properly, can map to and from virtually any system using the Google Storage connector to retrieve data from or send data to Google Cloud Storage.

## Prerequisites 

To use the connector and implement a connection to your Google Cloud Storage account from :

-   Have your Google Cloud Storage client ID and client secret from when you created your project available.
-   Activate the Cloud Storage JSON API.

## Tracked properties 

This connector has the following tracked properties that you can set or reference in various step parameters:

-   Name — The name of the object.
-   Bucket — The name of the bucket containing the object.
-   Updated — The modification time of the object metadata.
-   MD5 Hash — MD5 hash of the data; encoded using base64.
-   Link — The media download link.