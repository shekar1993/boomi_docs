# Adding a staging area for a source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-a4e18da6-9b8d-4257-a28e-dc1725b587ae"/>
</head>


Adding a staging area for a source from which you want to stage batches is the first step in the workflow for staging.

## Procedure


1.  In the repository page, click the domain to which the source is attached and select the **Sources** tab.

2.  In the source’s gear icon ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) menu, select **Add a Staging Area**.

    The Add a Staging Area dialog appears and takes focus.

    ![Add a Staging Area dialog](../Images/Repositories/mdm-db-add-staging-area_372a4a70-9f34-44a7-b75d-663ed294c602.jpg)

3.  In the **Name** field, type the staging area name.

4.  In the **ID** field, type a unique ID for the staging area. You are allowed to use uppercase and lowercase letters, numbers, underscore (_), and hyphen (-) with a maximum length of 50 characters.

5.  Click **Save**.

    The dialog closes, and the staging area is added. The staging area is listed by name below the source for which it is added. The listing is indented.

    The colored dot icon next to a staging area indicates the staging status:

    - ![Green dot icon](../Images/Common/main-ic-dot-green-12_2f68f523-a6b0-4691-831c-1dbdf0f6ef2e.jpg) － Staging Area is ready to receive staged entities.

    - ![Red dot icon](../Images/Common/main-ic-dot-red-12_4112ea3b-21ef-4820-8981-786df001c59f.jpg) － Staging Area is disabled due to deployment of new version of the domain model. Deleting all the entities in the staging area will change its status to ready.
 
