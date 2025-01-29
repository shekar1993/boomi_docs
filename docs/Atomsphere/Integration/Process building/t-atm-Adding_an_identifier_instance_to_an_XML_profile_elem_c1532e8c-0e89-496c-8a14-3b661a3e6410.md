# Adding an instance identifier to an XML profile element

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c1532e8c-0e89-496c-8a14-3b661a3e6410"/>
</head>


Use the **Data Elements** tab to add instance identifiers \(by occurrence and/or by qualifier\) to a repeating element in an XML profile.

## Procedure

1.  Open the XML profile.

2.  On the **Data Elements** tab expand the tree and select the repeating element.

    Instance identifiers cannot be added to root elements or attributes. Instance identifiers also cannot be duplicated.

3.  Click the blue arrow icon and select **Add Instance Identifier**.

    The Add/Edit Instance Identifier dialog opens.

4.  To identify by an occurrence, select **Identify By Occurrence** and set **Occurrence** by doing one of the following:

    -   Click the first radio button and type or select a number.

    -   Click the **Last** radio button.

5.  To identify by a qualifier:

    1.  Select **Identify By Qualifier** and click **Select Qualifier** to open the Select Qualifier dialog.

    2.  To filter the tree, type in the **Search** field.

    3.  Expand the tree as needed.

    4.  Select a qualifier.

    5.  Click **Save**.

6.  Click **Save**.

    After you have added the instance identifier you can do either of the following:

    -   Edit the instance identifier.

    -   Delete the instance identifier.

7.  Click **Save** to save the profile.

## Results

When the XML profile is used in a map, the map tries to match the identifiers instances based on the order in which they were defined. If there are multiple instance identifiers, then the map uses the first identifier that matches. Subsequent instance identifiers matches are not used. If none of the instance identifiers match, then the default \(no instance identifier\) is used.