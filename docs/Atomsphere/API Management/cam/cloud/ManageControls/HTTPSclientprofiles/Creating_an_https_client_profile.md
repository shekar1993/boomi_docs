---
sidebar_position: 2
---

# Creating an HTTPS Client Profile

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cb5bd6d0-85c9-44cd-b5cd-d81c325bad7e"/>
</head>

## Procedure

To create an HTTPS client profile:

1. Click **Manage > HTTPS Client Profiles**. 

   The **HTTPS Client Profiles** page is displayed. 

2. On the HTTPS Client Profiles page, click **New HTTPS Client Profile**. 

   The **Create an HTTPS Client Profile** page is displayed. 

3. On the **Create an HTTPS Client Profile** page, enter the information in the following fields: 

   |**Field** |**Description** |
   | -------- | --------------- |
   |Profile name |Enter a name for the HTTPS client profile. |
   |Description|(Optional) Enter a description for the HTTPS client profile. |
   |Verify Hostname|<p>Select one of the following: </p><p>- Disabled: Click to not have the hostname verified. </p><p>- Enabled: Click to have the hostname verified. </p>|
   |Select an identity|Select an identity for the HTTPS client profile. |

4. Click **Save and continue**.

5. A second **Create an HTTPS Client Profile** page displays.

   On this page, select a trusted certificate from the **Trust Stores** list. Then click **Save and continue**. 

   :::note
   
   Once the HTTPS Client Profile is created, when you are creating an endpoint, the profile is available to select in the **Select HTTPS Client Profile** field of the **Endpoint Key & Method Detection** page. For more information, see [Creating an Endpoint](../../DesignControls/APIdefinitions/Endpoints/Creating_an_endpoint_manually.md). 

   :::
