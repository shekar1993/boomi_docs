# Adding an instance identifier to an EDI profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a77d3ca6-f338-49e8-83c8-8f59bf6ec6a9"/>
</head>

Use the **Data Elements** tab to add instance identifiers \(by occurrence and/or by qualifier\) to a loop or segment in an EDI profile.

## Procedure

1. Open the EDI profile.

2. On the **Data Elements** tab, expand the tree and select the loop or segment.

3. Click the blue arrow icon and select **Add Instance Identifier**.

   The Add/Edit Instance Identifier dialog opens.

   ![Add/Edit Instance Identifier dialog in an EDI profile's Data Elements tab.](../Images/build-db-add-edit-instance.jpg)

4. To identify by an occurrence, select **Identify By Occurrence** and set **Occurrence** by doing one of the following:

   - Click the first radio button and type or select a number.

   - Click the **Last** radio button.

5. To identify by a qualifier:

   1. Select **Identify By Qualifier** and click **Select Qualifier** to open the Select Qualifier dialog.

      ![Select Qualifier dialog](../Images/build-db-choose-qualifier.jpg)

      :::note

      If no qualifiers appear in the dialog, you might need to manually enter any qualifiers that you need to data elements. Refer to [Adding a qualifier to an EDI profile](./t-atm-Adding_a_qualifier_to_an_EDI_profile_data_element_db0c4e20-5859-48d8-a779-66870819919d.md) for more information.

      :::

   2. To filter the tree, type in the **Search** field.

   3. Expand the tree as needed.

   4. Select a qualifier.

   5. Click **Save**.

6. Click **Save**.

    After you have added the instance identifier you can do either of the following:

    - Edit the instance identifier.

    - Delete the instance identifier.

7. Click **Save** to save the profile.
