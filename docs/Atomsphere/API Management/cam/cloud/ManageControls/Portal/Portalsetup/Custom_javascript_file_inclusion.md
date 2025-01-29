---
sidebar_position: 3
---

# Custom JavaScript File Inclusion

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c6e3f848-2bee-4778-bffa-6da42b39dad9"/>
</head>

The **Custom JavaScript File Inclusion** allows you to specify the path of JavaScript files to be referred in the Portal pages. 

The following table describes the fields in the **Custom JavaScript File Inclusion** section. 

|**Field** |**Description** |
| :-: | :-: |
|Head JavaScript File URL|The location of the JavaScript file that is referenced as an include file in the `<head>` section of a Portal page. This file can be located within or outside the Portal domain. |
|Body JavaScript File URL|The location of a JavaScript file that is referenced as an include file in the `<body>` section of a Portal page. This file can be located within or outside the Portal domain. |

:::note

The file can be hosted by the customer by placing it in the file manager or it can be served by the Portal application. It is recommended for the customer to identify an optimized deployment environment. In this way the JavaScript file can be controlled by API Management or by the Customer. To serve the JavaScript file from within the Portal application, contact API Management Support. 

:::
