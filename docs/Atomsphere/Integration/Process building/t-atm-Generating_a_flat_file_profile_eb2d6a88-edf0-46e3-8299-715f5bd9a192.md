# Generating a flat file profile with the Import Wizard

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-eb2d6a88-edf0-46e3-8299-715f5bd9a192"/>
</head>


You can use the Import Wizard to import a standard flat file structure and automatically generate elements.

## About this task

:::note

Flat file profiles were updated in May 2016 to support additional parsing functions for delimited flat file data. The Import Wizard supports both the new profile format and the legacy format. New profiles are created in the new format. Existing profiles in the legacy format can be updated and the format is maintained.

:::

## Procedure

1.  Create or open a flat file profile.

2.  Go to the **Options** tab and specify the general characteristics of the data set's formatting.

3.  On the **Data Elements** tab, select the **Record** node.

    If you do not select the **Record** node, the **Import** button will not be available.

4.  Click **Import**.

5.  Confirm the profile settings and ensure that they match the file you are using as a sample.

6.  Click **Choose File** and navigate to the sample file on your local machine.

7.  Click **Next** to preview and confirm the column settings.

8.  Click **Finish**.

    If the column headers are not populated even though they are contained in the sample file, ensure that the **Use Column Headers** option is checked on the **Options** tab. You can edit the column names by clicking on them in the wizard.

## Next steps

If you re-import a profile to incorporate updates, the updated profile might affect the connections in any map where it is used. See the Profile components topic for more information.