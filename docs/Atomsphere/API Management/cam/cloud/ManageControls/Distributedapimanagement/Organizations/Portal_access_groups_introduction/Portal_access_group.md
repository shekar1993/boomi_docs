---
sidebar_position: 2
---

# Portal Access Group

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-92c6bda8-51cf-4037-915e-4ff389200636"/>
</head>

The Portal Access Group is a group of Control Center resources (Plans and Interactive Documentation) and Portal Users (developers). You can use Portal Access Groups to provide role-based user access to resources on your Portal. The users in a specific Portal Access Group have access only to the resources in that Portal Access Group. The users can request Package Keys for API Package and Plans on the Developer Portal that are in the Portal Access Group. This page displays a navigable list of Portal Access Groups of your Organization. 

:::note

There are no Portal Access Groups at the Area level. 

:::

The Administrator and the Community Manager can create Portal Access Groups according to: 

- **Area:**

  - **An Administrator:** can create and modify all the Portal Access Groups of all the Organizations and Sub-Organizations and can add or remove users, Plans, and Interactive Documentation that belong to specific Organizations and its Sub-Organizations to the Portal Access Groups. 

  - **A Community Manager:** can create new Portal Access Groups and add or remove users in the Portal Access Groups of specific Organizations and its Sub-Organizations. 

- **Organization:** 

  - **An Administrator:** can create and modify only the Portal Access Groups owned by the Organization and its Sub-Organizations and can add or remove users, Plans, and Interactive Documentation that belong to the Organization and its Sub-Organizations to the Portal Access Groups.

  - **A Community Manager:** can create new Portal Access Groups and add or remove users to the Portal Access Groups of specific Organizations and its Sub-Organizations. 

- **Sub-Organization:** 

  - **An Administrator:** can view and modify only the Portal Access Groups owned by the Sub-Organization and can add or remove users, Plans, and Interactive Documentation that belong to the Sub-Organization to the Portal Access Groups. 

  - **A Community Manager:** can create new Portal Access Groups and add or remove users to the Portal Access Groups of the Sub-Organization. 

:::note

The API Manager does not have access to the **Portal Access Groups** page. 

:::

The following table describes the fields on the **Portal Access Groups** page. 

|**Field** |**Description** |
| -------- | --------- |
|Portal Access Group Name|Name of the Portal Access Group. |
|Organization|Name of the Organization that owns the Portal Access Group. |
|Date Created|The date and time when the Portal Access Group was created. |
|Date Updated|The date and time when the Portal Access Group was last updated. |
|Actions|<p>Click ![](../../../../Images/navigation.jpg) to navigate to the **Portal Access Group Overview** page to add the following to the group: </p><p>- Users </p><p>- Plans </p><p>- Interactive Documentation </p><p>For more information, see [Portal Access Group Overview](Portal_access_group_overview.md). </p>|

