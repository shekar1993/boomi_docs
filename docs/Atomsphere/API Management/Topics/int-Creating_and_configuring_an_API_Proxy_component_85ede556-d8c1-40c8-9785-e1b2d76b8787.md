# Creating and configuring an API Proxy component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-85ede556-d8c1-40c8-9785-e1b2d76b8787"/>
</head>


Create and configure an API Proxy component in on the Build page.

## Procedure

1.  On the **Build** page in the Component Explorer, navigate to the folder in which you want to create the component.

2.  Click the blue arrow ![Actions button.](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to the folder.

3.  Click the ![](../Images/main-ic-document-new-with-starburst-16_53476bde-c898-4a14-98b8-b3fe8cd9594a.jpg) **New Component** link.

    The Create Component dialog opens with the folder selected.

4.  In the **Type** list, select API.

5.  In the **Component Name** field, type a name for the component.

    The maximum length is 255 characters.

6.  In the **API Type** list, select API Proxy.

7.  Click **Create**.

    The component configuration panel appears on a tab with the name you entered. The panel’s **General** tab is selected.

8.  **Optional:** Type a description.

9.  **Optional:** Import the OpenAPI specification file, if available, for use in by the API Gateway for routing requests and as API user documentation in the API Developer Portal:

    1. Click **Import Swagger File**.

        The Import a Swagger File wizard opens.

    2. Do one of the following and when done, click **Next**:

    -   To import from a file, select **Choose a File**.

    -   To import from a URL, select **Import from a URL**.

    3.  Do one of the following and when done, click **Next**:

    -   If importing from a file, click **Choose a File** and in the system file selection dialog, select the file to upload.

    -   If importing from a URL, type the **External Service URL** at which the file resides, and, if needed, type the **User Name** and **Password**.

    4.  In the **Select Fields to Import** screen, select all fields to import into your API Proxy and click **Next**.

    5.  In the **Select API Server URL to Import** screen, select the URL to import into your API Proxy and click **Next**.

    6.  In the **Summary** screen, verify that the fields are correct.

    7.  Click **Finish**.

    The selected fields are imported and focus returns to the component configuration panel.

10. Type the **Published API Title**, **Published Version Number**, and, optionally, **Published Description** for the API that you are deploying.

    :::note

    If you imported an OpenAPI specification file \(step 9\) and selected the fields API\_TITLE, API\_VERSION, and API\_DESCRIPTION for importing, these settings are automatically set to the values of those fields.

    :::

11. In the API Type section, select the type of routing on the API Gateway — **REST**, **SOAP**, or **OData**.

12. In the**Base API Path** field, type the base portion of the URL for requests to the API defined by the API object.

    The full URL is generated when the API Proxy component is deployed.

13. Select the **Server** tab.

14. In the **API Server URL** field, type the URL to which the API Gateway sends API service requests.

    :::note
    
    If you imported an OpenAPI specification file \(step 9\) and selected the field API\_URL for importing, **API Server URL** is automatically set with the value of that field.

    :::

15. **Optional:** In the **Health Check URL** field, type the URL to which API service heath checks can be sent.

16. In the Authentication section, select either **None** or **Basic Authentication** as the Authentication Type used on the server on which the API service is hosted.

17. If in the previous step you selected **Basic Authentication**, type the **User Name** and **Password**.

18. **Optional:** If you want to pass the original authorization header in the request, choose **Yes** for the **Include original authorization header** field.

19. **Optional:** In the Custom Headers section, specify custom headers that will be included by the API Gateway in API service requests:

    1.  Click **Add Header**.

    2.  In the **Key** field, type the header name.

    - Header names can contain alphanumeric characters and special characters !\#$%&'\*+.^\`~-\_.

    3.  Set the header value by doing one of the following:

    -   To set an unencrypted value, type it in the **Value** field.

    -   To set an encrypted value, click **Encrypt**, click **Click to Set**, type the **Password**, and click **Apply**.

    4.  For each additional header name you are specifying, repeat steps 1–3.

20. **Optional:** Specify API metadata:

    1.  Select the **Documentation** tab.

    2.  In the Published Contact Information section:

    **Name**   
    **Description**

    **Publisher**<br />
    Select an Organization component to reuse Publisher information across multiple API Service/Proxy components or Trading Partner components.

    **Publisher Name** <br />
    The name of the person or organization acting as the API publisher.

    :::note
    
    If you imported an OpenAPI specification file \(step 9\) and selected the field CONTACT\_NAME for importing, **Publisher Name** is automatically set with the value of that field.

    :::

    **Publisher Email** <br />
    The email address of the publisher.

    :::note
    
    If you imported an OpenAPI specification file \(step 9\) and selected the field CONTACT\_EMAIL for importing, **Publisher Email** is automatically set with the value of that field.

    :::

    **Publisher URL** <br />
    The URL, including protocol, of the document containing contact information for the publisher. Make sure you post this document to that URL before you deploy the API Proxy component.

    :::note
    
    If you imported an OpenAPI specification file \(step 9\) and selected the field CONTACT\_URL for importing, **Publisher URL** is automatically set with the value of that field.

    :::

3.  In the License Metadata section:

    **Name**   
    **Description**

    **License Title** <br />
    The title of the license under which the API is provided.

    :::note
    
    If you imported an OpenAPI specification file \(step 9\) and selected the field LICENSE\_NAME for importing, **License Title** is automatically set with the value of that field.

    :::

    **License Information** <br />
    The URL, including protocol, of the API license document. Make sure you post this document to that URL before you deploy the API Proxy component.

    :::note
    
    If you imported an OpenAPI specification file \(step 9\) and selected the field LICENSE\_URL for importing, **License Information** is automatically set with the value of that field.

    :::

    **Terms of Service** <br />
    The URL, including protocol, of the document containing the terms of service. Make sure you post this document to that URL before you deploy the API Proxy component.

    :::note
    
    If you imported an OpenAPI specification file \(step 9\) and selected the field TERMS\_OF\_SERVICE for importing, **Terms of Service** is automatically set with the value of that field.

    :::

21. Click **Save** or **Save and Close**.

## Next steps

If you are ready to deploy the API Proxy component, after clicking **Save**, click **Create Packaged Components**. The Create Packaged Component wizard opens. Complete the steps in the wizard and click the **Deploy** button on the final confirmation message. Your component now appears in the list of packaged components in the **Deploy** \> **Packaged Components** page, and in the list of deployed components on the **Deploy** \> **Deployments** page.