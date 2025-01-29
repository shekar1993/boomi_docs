# Importing a CSV file into a cross reference table

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d782ce2c-f229-46cf-85dc-35bc00adc4d5"/>
</head>


Use the Cross Reference Data Import dialog to import a CSV file into a cross reference table.

## Before you begin

Consider the following before you import a CSV file:

-   The size of a CSV file to be imported is limited to 1 MB.

-   If the file to be imported contains commas or double quotes in unexpected positions, the data might not be parsed correctly.

## Procedure


1.  Create or open a cross reference table component.

2.  Click **Import from CSV**.

    The Cross Reference Data Import dialog opens.

3.  In the **Number of Columns** field, enter the number of columns to import from the source file.

    :::note

    Six columns is the default. You can import from two to 20 columns.

    :::

4.  If the CSV file has a header row, select **Specify the first row of the uploaded file as the header row**.

5.  If the imported rows should overwrite existing rows, select **Overwrite the existing rows**.

    :::note
    
    If this option is not selected, imported rows are appended to existing rows. You can add up to 10,000 rows.

    :::

6.  If the imported headers should overwrite existing headers, select **Overwrite the existing headers**.

7.  Click **Choose a File**, select the CSV file, and open it.

8.  Click **Next**.

    The dialog displays an import preview so you can review the data.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

9.  Click **Back**, make changes as needed, and repeat steps 3-8.

10. Click **Finish**.