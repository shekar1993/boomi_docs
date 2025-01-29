# Adding extended properties to a Google contact or contact group XML profile 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-85c8282b-ecda-4874-bd4f-b96fe7c0a4d1"/>
</head>


You can use Google Data Extended Properties with Google Contacts and Google Contact Groups. To use extended property elements, update the Google Contacts or Contact Groups XML profile to include the extra elements.

## About this task

The Google G Suite connector exposes the extended property elements as custom elements with names that end with “\_c”.

## Procedure

1.  Open the Google Data Contact or Contact Group request XML profile.

2.  Right-click the root element, **contact** or **contact-group**.

3.  Select **Add Child Element**.

    Selecting this field adds a new element to the end of the profile.

4.  Select the new element and change the **Element Name** to your custom field name plus **\_c**.

    For example, to add a custom field called , change the element name to .

5.  Expand the **Namespace Declarations**section and click **Add Namespace**. Set the **URI** field to `http://www.w3.org.2005/Atom`.

6.  Save and close the XML profile.