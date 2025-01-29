# Exporting a flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-68fc8c07-7e2a-4011-98f5-d3d40c295277"/>
</head>


The **Export** tool allows you to export a flow from your current tenant so that it can be imported into a different tenant.

## Before you begin

-   Flows can be exported as either a flow shared package file or as a generated shared package token.

-   Flows are only made available for export once they have been published; if a flow has not been published it will not be available from the **Export Flow** drop-down menu.

-   By default, passwords are not included in an exported flow, and this means that any passwords will need to be set again once a flow has been imported, as may not work as expected until these passwords have been set.

-   If you require passwords to be included when exporting a flow, select the **Include passwords in package export** checkbox.


## Exporting a flow shared package file

To export a flow as a shared package file \(.package\):

1.  On the **Home** tab, select **Import/Export** from the main menu.
2.  On the **Import/Export** page, select the flow you wish to export from the **Export flow** drop-down menu.
3.  Select/de-select the **Include passwords in package export** checkbox as required \(see above\).
4.  Click **Download Package** to generate a shared package file \(.package\).
5.  Save the generated shared package file \(.package\) to your preferred location.
6.  Import the flow using this shared package file into a different tenant via the **Import** tool. See [Importing a flow shared package file](c-flo-Import_a_Flow_d6a6d656-0e4b-4e59-b830-cbec14557491.md#section_uyc_wqs_y3b).

## Generating a flow shared package token

To export a flow using a generated shared package token:

1.  On the **Home** tab, select **Import/Export** from the main menu.
2.  On the **Import/Export** page, select the flow you wish to export from the **Export flow** drop-down menu.
3.  Select/de-select the **Include passwords in package export** checkbox as required \(see above\).
4.  Click **Generate Sharing Token** to generate a shared package token.
5.  The token is displayed in the **Sharing token** field. Click the field to select the full token and copy it.
6.  Import the flow using this shared package token into a different tenant via the **Import** tool. See [Importing a flow shared package token](c-flo-Import_a_Flow_d6a6d656-0e4b-4e59-b830-cbec14557491.md#section_wxj_xqs_y3b).