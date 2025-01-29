---
sidebar_position: 2
---

# Adding Portal Access Group Plans

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9608e36e-74bc-4996-8f30-b880ad7fff3c"/>
</head>

The users in the Portal Access Groups can access the Plans from the Developer Portal. An Administrator can add Plans to the Portal Access Group. 

:::note

To add Plans to the Portal Access Group, the Plans and Portal Access Group must be owned by the same Organization. For the Portal Access Group of the parent Organization, you can add Plans that are owned by the Sub-Organization. However, Plans owned by the parent Organization cannot be added to the Portal Access Group of the Sub-Organization. 

:::

- **An Area Administrator and API Manager**: can add Plans to the Portal Access Groups that belong to a specific Organizations and its Sub-Organizations. 

- **An Organization Administrator and API Manager:** can add Plans to the Portal Access Groups that belong to a specific Organization and its Sub-Organizations. 

- **A Sub-Organization Administrator and API Manager:** can add Plans to the Portal Access Groups that belong to the Sub-Organization. 

## Procedure

To add the Portal Access Group Plans:

1. Click **Manage > Portal Access Group**. 

   The **Portal Access Group** page displays a list of Portal Access Groups. 

2. Select a Portal Access Group from the Portal Access Group list. 

   The **Portal Access Grou**p page is displayed. 

3. On the left pane, click **Plans**. 

   The **Portal Access Group Plans** page is displayed. 

4. Click **Add Plans**. 

   The Add plans to Portal Access Group dialog box is displayed. 

5. Select a package from the **Plans** list. 

   :::note
   
   For the parent Organization, all the Package-Plans that belong to an Organization and Sub-Organizations are visible.

   ::: 

6. Select a plan from the **Plans** list.

   The Package-Plan name is displayed in the **Plans** list. 

7. Click ![](../../../../../Images/add.jpg). 

   The Package-Plan is added to the list. 

   :::note
   
   Perform step 4 to step 7 to add multiple Package-Plans to build a list for the Organization. 

   :::

8. Click **Save Changes**. 

   The Package-Plan is added to the Portal Access Group. 
