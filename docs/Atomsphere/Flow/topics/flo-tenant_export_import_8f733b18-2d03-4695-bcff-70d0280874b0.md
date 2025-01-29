# Exporting and importing tenant data

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8f733b18-2d03-4695-bcff-70d0280874b0"/>
</head>


You can export tenant data from a tenant as a tenant data file, which can then be imported into another tenant.

## Overview

Tenant data export allows you to create a 'copy' of a tenant, for backup purposes or for migrating tenant content to other Flow regions.

Exporting tenant data creates a JSON tenant data file (.tenant). The file name is generated using the tenant name and export date and time, for example: TenantName_20220614113304.tenant.

The following tenant data elements are included in the export file:

| **Exported tenant data** | **Description** |
|:-------------------|:----------|
|Tenant settings|All the general tenant settings, as shown on the **Tenant** page. For example: <ul><li>Tenant Single Sign-on settings</li><li>Tenant Security access restrictions</li><li>Tenant Reporting settings</li><li>Tenant Observability settings</li></ul>|
|Flows|All published flows within the tenant, and any linked functionality and elements used by these flows, such as: <ul><li>Page layouts, values, types, assets, and macros</li><li>Connectors \(including password information\)</li><li>Identity Providers</li></ul>|
|Players|All players set up within the tenant.|

Any unused functionality and elements in the tenant are not included in the tenant export file.

When this file is imported into a different tenant:

- The exported tenant settings overwrite those of the tenant in which the file is imported.

- The flows contained within the file are added to the tenant in which the file is imported.

- All elements and settings required by the flows are added to the tenant in which the file is imported.

## Before you begin

- Before you can export tenant data, all the flows within the tenant must have previously been published at least once.

- Importing tenant data will overwrite all information in the current tenant, and reload the page. It is highly recommended that you export and backup your current tenant information, before importing data from another tenant.

## Exporting tenant data

To export a tenant data file:

1. Ensure that you are in the correct tenant that you wish to export data from, and that all flows in the tenant have been published.
2. On the **Tenant** page, click **Export**.
3. The JSON packaged tenant data file \(*.tenant*\) is exported. The file name is generated using the export date and time, for example: *TenantName\_20220614113304.tenant*.
4. Import the file into a different tenant as required.

## Importing tenant data

:::caution

Importing tenant data will overwrite all information in the current tenant, and reload the page. It is highly recommended that you export and backup your current tenant information, before importing data from another tenant.

:::

To import a tenant data file:

1. Ensure that you are in the correct tenant that you wish to import the tenant data into.
2. On the **Tenant** page, either:

    - Drag and drop a *.tenant* file onto the **Import Tenant** field.

    - Click the **Import Tenant** field, browse to the file and click **Open**.

3. The **Importing Tenant** form is shown.

    - To confirm that you wish to proceed, enter the name of the tenant that you wish to import the file into \(as shown on the form\).

    - Once you have entered the import tenant name correctly, the **Import and overwrite** button becomes active.

4. Click **Import and overwrite**.
5. A progress bar indicates the import status. Once it has completed, click **Cancel** to exit out of the form.