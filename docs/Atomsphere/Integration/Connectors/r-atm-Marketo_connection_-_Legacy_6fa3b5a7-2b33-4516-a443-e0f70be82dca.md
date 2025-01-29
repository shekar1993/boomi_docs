import TestConnection from './_TestCon.md'

# Marketo — Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6fa3b5a7-2b33-4516-a443-e0f70be82dca"/>
</head>


The Marketo — Partner connection represents a single Marketo account including sign-in credentials.

To use multiple accounts, you need a separate Connection component for each. You can pair this connection with different Marketo — Partner operations to perform a unique action against a Marketo instance.

:::note

The documentation for this connector is provided by a partner. However, encourages you to take advantage of the new functionality provided by the Marketo REST connector.

:::

## Connection tab 

You must sign into your Marketo account at [https://www.marketo.com](https://www.marketo.com), and access the **SOAP API Setup section** on the **Admin \> Integration \> Web Services** menu to review your connection settings. Ensure that your **Access Status** is **Active**.

  
**URL** - 
 The full URL path for the Marketo SOAP endpoint.

**User ID** - 
 The static User ID identified in the SOAP API Setup section.

**Encryption Key** - 
  The configurable encryption key identified in the SOAP API Setup section.

**API Version** - 
 The version of the SOAP API used to make calls to the Marketo service.

See the topic about password encryption security to understand how to securely store passwords in a Connection component.

<TestConnection />