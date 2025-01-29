# Editing 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-571922e4-9c92-463b-bb4a-80ff42580abc"/>
</head>


You can edit an existing installation from the **** page.

1.  To edit a installation, click the **Edit** icon ![Edit Page Layout](../Images/img-flo-Action_Edit_a0e2bcdc-d94b-42f5-b937-3affc6881fda.png) in the **Actions** column on the **** page.
2.  The current configuration settings for the are displayed. Edit the settings as required.

    **Name**: The name of the .

    **The URL for this**: The URL. See [c-flo-Service\_Integrations\_cac4d712-9607-4f24-8e70-aae48ceb27b9.md](c-flo-Service_Integrations_cac4d712-9607-4f24-8e70-aae48ceb27b9.md) for a list of connectors. If you change this, you should update the using the **Update** button to ensure the Actions and Types of the are updated, otherwise any flows using the may display errors when run.

    **Username** and **Password**: These fields are only required if using an integration, otherwise these should be left blank.

    **Update**: Click to refresh the installed and any types associated with the .

    **Features**: This section of the page shows which features are supported by the , i.e. what it could be used for.

    **Configuration**: The configuration values currently set for the . If you change any of these values, you should update the via the **Update** button to ensure the Actions and Types of the are updated, otherwise any flows using the may display errors when run.

    **Actions**: Displays the Actions that can be performed by the .

    **Types**: Displays the object Types that can be used by the .

    **Advanced \| Comments**: This optional field allows you to insert information about the that can then be viewed within by other users. These comments are not visible in the flow to runtime users.

    **Dependencies**: Displays any dependencies for the . If a is used in a flow it creates dependencies – which means you will not be able to delete the from the tenant, without either deleting the flow or removing the from the flow first. Dependencies listed includes types, flows, and map elements.

3.  Click **Save** to save and commit your changes to the installation.
4.  Once you have saved your changes, the installation is updated and these changes are reflected in any flows in the tenant that currently use the .