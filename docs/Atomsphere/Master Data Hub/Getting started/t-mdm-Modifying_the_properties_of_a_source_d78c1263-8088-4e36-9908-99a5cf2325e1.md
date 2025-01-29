# Modifying the properties of a source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-2D807BC4-7D8A-460B-A5F4-210C7014E558"/>
</head>


You can modify the properties of a source in response to changes in requirements.

## Procedure

1.  In the **Sources** page, click the source’s gear icon **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)**. \(If the source is not attached to any domains, additionally select **Configure** in the icon’s menu.\)

    The Modify Source dialog appears and takes focus.

    ![Modifying the properties of the source Salesforce using the Modify Source dialog](../Images/Sources/mdm-db-modify-source_aca8ae3c-0990-4b30-808e-bcb5d900866f.jpg)

2.  **Optional**: To change the name of the source, in the Name field, type the new name.

3.  **Optional**: To change the URL format Boomi DataHub uses to construct target URLs for links, rendered in the Golden Records page for a deployed model, to entities in the source system, type the new format in the **Entity ID URL** field. Specify `{id}` as the placeholder for the source entity ID.

4.  Click **Save**.

    The dialog closes, and the list entry for the source updates to reflect the change.