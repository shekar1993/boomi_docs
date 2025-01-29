# Using file resource components in a flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-2c5c94e4-3496-4990-ac61-16fefed71d63"/>
</head>

There are two file resource page components that can be added to a [page map element](c-flo-ME_Page_539c415f-59d7-47d5-90ef-cb3a108b3010.md) on the corresponding [page layout](c-flo-Pages_Overview_15c245e1-5232-4173-8a85-dae7ea7f060b.md) for the page.

- The [File Upload component](./flo-pages-components-fileupload_edb868aa-5a66-4cbf-9019-42e1df0ed027.md) allows you to upload a file, which can then be consumed by a process.

- The [Files component](./flo-pages-components-files_78d1140b-67ad-4561-bce7-e14086cc2122.md) allows you to both upload a file, and list files for download from an outside system.

When setting up these file resource page components, you will need to ensure that you have configured them correctly:

![File upload component](../Images/img-flo-components_fileupload_18684699-669a-4c8a-942d-8c2b8acdafd5.png)

- The Integration Flow connector that you have set up in Flow should be selected as the Data Source.  ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

- The Resource Path must be the same as the resource path you have defined in the Boomi Flow Services Server File Resource configuration. For example, '/file'. ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

- Response data can be populated into an Object value using the base type you have created to map to your profile. Note that when you initially create the value, you may need to change it from the global '$File' system type ![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png)

:::note

See the Community article '[File Uploads with the Boomi Flow Services Server Component](https://community.boomi.com/s/article/File-Uploads-with-the-Flow-Services-Server-Component)' for a useful quide to setting up file upload functionality in a flow.

:::
