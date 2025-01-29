# Uploading a custom file 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-1e930859-7d52-4f10-beb5-a18102e6a89a"/>
</head>


You can upload custom JAR files for use with your integration processes.

## About this task

Each Boomi account has access to 100 MB of space for uploaded files.

:::note

You must have the Build Read and Write Access privilege and the Developer privilege to upload custom JAR files.

:::

## Procedure

1.  On the **Manage Account Libraries** page, click **Upload a File**.

    The **Upload a File** dialog opens.

2.  Click **Choose a File** and locate the JAR file that you want to upload.

3.  Upload the hash file that is produced by executing the SHA256 cryptographic hash function of the uploaded JAR file.

4.  Click **Upload** to complete the upload process.

    Only JAR files can be uploaded. If you select a file with an extension other than .jar, an error message is displayed.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

    An error message is also displayed if:

    -   Uploading the selected file would exceed the account limit of 100 MB.

    -   A file with the same name already exists in the account library.

    The uploaded file appears in the list in alphabetical order by name. Optionally, you can sort the list by date uploaded or by size.

    :::note
    
    If the name of the uploaded file contains any special characters, those characters are replaced by underscores. For example, a file called connectorjar\(2\).jar is uploaded as connectorjar\_2\_.jar.

    :::

## Next steps    

After you upload custom JAR files, you can include them in a Custom Library component and deploy that component to any Atom, Molecule, Atom Cloud, or environment.