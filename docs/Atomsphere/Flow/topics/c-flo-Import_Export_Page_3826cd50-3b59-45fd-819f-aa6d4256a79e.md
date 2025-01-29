# Import/Export page

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3826cd50-3b59-45fd-819f-aa6d4256a79e"/>
</head>


The **Import/Export** page allows you to import and export flows from and into your current tenant.

## Opening the page

-   Select **Import/Export** from the left-hand menu.

## Page overview

The **Import/Export** page provides access to the **Import** and **Export** tools.

![Import/Export page](../Images/img-flo-Import_Export_Page_d852afc0-0840-4bc0-b432-6d35acf6195c.png)

## The Export tool

The **Export** tool and options are located at the top of the page.

-   The **Export Flow** drop-down menu allows you select the flow you wish to export. ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

-   The **Include passwords in package export** checkbox ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png) allows you to define whether passwords are included in an exported flow. By default, passwords are not included in an exported flow, and this means that any connector passwords will need to be set again once a flow has been imported, as connectors may not work as expected until these passwords have been set. If you require passwords to be included when exporting a flow, select this checkbox.

-   The **Generate Sharing Token** button ![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png) allows you to generate a shared package token for the selected flow.

-   The **Download Package** button ![Step 4](../Images/img-flo-Step4_a9fc9306-20bb-4f06-b6c7-616c9df561cb.png) allows you to generate a shared package file \(.package\) for the selected flow.

-   If you have generated a shared package token, the token is displayed in the **Sharing token** field. ![Step 5](../Images/img-flo-Step5_68838705-dce4-47a0-b594-89406c339876.png) Click the field to select the full token and copy it.


## The Import tool

The **Import** tool and options are located below the **Export** tool.

-   The **Import Package** field ![Step 6](../Images/img-flo-Step6_f098fd71-e2a8-4aef-8268-e3002e1d0bf6.png) allows you to import a shared package file, by either dragging and dropping the .package file onto the field, or by clicking the field and browsing to the package file.

-   The **Import Shared Package Token** field ![Step 7](../Images/img-flo-Step7_01fffaa6-6e6e-46e8-9522-35524f05f54d.png) allows you to enter/paste a shared package token.

-   The **Import** button allows you to begin importing your shared package file or token. ![Step 8](../Images/img-flo-Step8_0e4e1162-0b41-4dc9-a309-48a8886379aa.png)