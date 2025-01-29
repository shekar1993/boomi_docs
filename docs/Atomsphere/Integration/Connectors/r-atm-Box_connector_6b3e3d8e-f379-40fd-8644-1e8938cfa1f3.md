# Box connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f053e38b-c127-44dd-ad3f-89bded7d4a34"/>
</head>


The Box connector enables government agencies and employees to safely and securely store, access, share, and collaborate on files, folders, and content across devices in a cloud-friendly and secure environment.

Box is a FedRAMP-approved solution. With the Box connector, agencies can securely collaborate and share content across agencies and jurisdictions. You can safely upload sensitive materials, easily find and work on the documents that you need, manage your content on-the-go from any device, and easily access the same relevant Box content whenever you need it.

The Box connector enables you to store, access, and share data from a Boomi process.



## Connector configuration 

To configure a connector to communicate with Box, set up these two components:

-   Box connection. This connector uses the OAuth 2.0 protocol for authentication and authorization.
-   Box operation.

This approach creates reusable components that contain connection settings and operation settings. After building your connection and operation, set up your Box connector within a process. When correctly defining the process, Integration can map to and from virtually any system using the Box connector to retrieve or send data to Box.

## Prerequisites 

-   To implement a connection to your Box account from , have your Box client ID and client secret provided when you created your application.
-   UTF-8 encode input JSON documents to preserve special characters and ensure the operations work properly.

## Tracked properties 

This connector has the following tracked properties that you can set or reference in various step parameters:

-   File ID — The ID of the file from Box.
-   File Name — The name of the file from Box.

