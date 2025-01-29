---
sidebar_position: 3
---

# Creating an Organization

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2530ab76-b0a7-4e72-a4ef-094edc9809a6"/>
</head>

An Area Administrator can create Organizations and Sub-Organizations. Organization Administrator can create Organizations and Sub-Organizations. 

You can create an Organization or Sub-Organization to provide role-based access to the resources in the API Management Control Center. To create a Sub-Organization, you have to select its parent Organization. 

**Organization visibility:**

- An Organization is visible to the Area Administrator and the users who belong to the Organization. 
- The Sub-Organization is visible to the Area Administrator, parent Organization Administrator, and the users who belong to the Sub-Organization. 

## Procedur

To create a new Organization:

1. Click **Manage > Organizations**. 

   The **Organizations** page is displayed. 

2. Click **New Organization**.

   The **Create an Organization** dialog box is displayed. 

3. Enter the following details in the **Create an Organization** dialog box. 

   |**Field** |**Description** |
   | ------ | ------- |
   |Organization Name|<p>Required </p><p>Name of the Organization or Sub-Organization. </p><p>:::note</p><p>This field is visible only to Area Administrators and Control Center Users who belong to an Organization or in the parent Organization. Users who do not belong to an Organization cannot view this field.</p><p>::: </p>|
   |Description|<p>Optional </p><p>Description of the Organization. </p><p>:::note</p><p>This field is visible only to Control Center users with an Administrator role in the Organization, in the parent Organization (in case of Sub-Organization) or the Area.</p><p>::: </p>|
   |Select a parent Organization|<p>Optional </p><p>Select a parent Organization if the Organization you are creating is a smaller part of a larger existing Organization. </p>|

4. Click **Save and close**. 

   The Organization is created and the Organization name is displayed on the **Organizations** page. 

   Or, click **Save and continue**. 

   The Organization is created and the [Organization Overview](Organization_overview.md) page is displayed. 
