---
sidebar_position: 4
---

# Deleting an Organization

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d7a91026-5dfc-412a-b40c-cf3f0aed0d80"/>
</head>

On the **Organization Overview** page, you can delete the existing Organizations in an Area. Some scenarios where an Organization or Sub-Organization can be deleted are the following: 

- When a business unit in a company is to be dissolved. 

- Two business units are to be merged to form a new one.

- The company no longer wants a Distributed API Management. 

:::note

To delete an Organization that has Sub-Organizations, you have to first delete all its Sub-Organizations. For Organizations that have Sub-Organizations, the Delete button is enabled only when all the Sub-Organizations are deleted. 

:::

**After deletion of a Sub-Organization:**

- Portal Access Groups are deleted.

- All the resources APIs, Packages, Package Keys, and Plans owned by the Sub-Organization are assigned to the Organization and can be modified only by your company's Organization Administrators. Hence, you can assign the resources to some other Sub-Organization or a new Sub-Organization, or the resources can continue to be in the Organization in case the Organization and Sub-Organization are merged. 

**On deletion of an Organization:**

- Portal Access Groups are deleted. 

- All the resources APIs, Packages, Package Keys, and Plans owned by the Organization are assigned to the Area and can be modified only by your company's Area Administrators. Hence, you can assign the resources to some other Organization or a new Organization, or the resources can continue to be in the Area, in case the company does not want a Distributed API Management. 

## Procedure

To delete an Organization:

1. Click **Manage > Organizations**. 

   The Organizations page is displayed. A list of Organizations is displayed. 

   :::note
   
   To delete an Organization that has Sub-Organizations, you have to first delete all its Sub-Organizations. For Organizations that have Sub-Organizations, the Delete button is enabled only when all the Sub-Organizations are deleted.

   ::: 

2. Select an Organization in the **Organization** list. 

   The **Organization Overview** page is displayed. 

3. Click **Delete**. 

   A confirmation message is displayed. 

   For Organizations that have Sub-Organizations, the **Delete** button is visible only when all the Sub-Organizations are deleted. 

4. Click **Confirm**. 

   The Organization is deleted. 
