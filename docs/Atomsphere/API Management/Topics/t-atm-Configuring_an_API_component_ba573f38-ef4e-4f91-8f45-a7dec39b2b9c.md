# Configuring an API Service component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3D0034CF-728D-47BA-85B1-366947F3AB2D"/>
</head>


After creating an API Service component in on the Build page, configure it by opening the API Service component and adding endpoints.

## Procedure

1.  Select the **General** tab, and specify a **Title**, **Version Number**, and **Description** for the API that you are deploying.

2.  In the **Base API Path** field, type the base portion of the URL for requests to the API defined by the component.

    The base portion is appended as you type the **Path to REST**, **Path to SOAP**, and **Path to OData** on the other tabs.

    :::note
    
    Omit the leading slash, which is assumed and shown as the last character in **Path to REST**, **Path to SOAP**, and **Path to OData**.

    :::

3.  **Optional:** Under Advanced Settings, specify the names of HTTP headers whose values are potentially passed to the API’s linked listener process execution in the Dynamic Document Property Headers section. The values actually passed are those of headers *not* designated as protected in the shared web server settings. The values are passed as dynamic document properties with the prefix `inheader_`. For example, if you specify Content-Type, and Content-Type is not protected, its value would be passed as a dynamic document property named `inheader_Content-Type`.

    1.  Click **Add Header**.

        A field for specifying a header name appears in the list below.

    2.  In the field, type the header name.

        Header names can contain alphanumeric characters and special characters !\#$%&'\*+.^\`~-\_. [Standard HTTP header names](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields) are case-sensitive. You can specify only the following standard HTTP headers:

    | Request Headers | Entity Headers                                                |
    |-----------------|---------------------------------------------------------------|
    |                 |                                                               |
    | Accept          | Content-Encoding — the compression method applied to the data |
    | Accept-Charset  | Content-Language                                              |
    | Accept-Encoding | Content-MD5                                                   |
    | Accept-Language | Content-Type — the MIME type of any input data, if given      |

    For each additional header name you are specifying, repeat steps 1-2.

4.  If the component will include SOAP API endpoints, configure the general settings for WSDL generation.

5.  Generate or create REST, SOAP, OData API endpoints, and configure the endpoints.

6.  If any endpoints reference JSON or XML profiles, select the **Profiles** tab, and if there are profile type conflicts resolve them. See [Resolving profile type conflicts in an API Service component](/docs/Atomsphere/API%20Management/Topics/t-atm-Resolving_profile_type_conflicts_in_an_API_component_e2385eb2-c0a8-42b0-a03e-a2d14e543154.md).

7.  **Optional**: Boomi only supports XML for Odata APIs. If a JSON response is required, you must use the [map step](/docs/Atomsphere/Integration/Process%20building/r-atm-Map_shape_a481eb4d-739a-46fb-b062-866d9d13f21a.md) to translate the response from an XML profile to JSON.

8.  **Optional** Specify Published Information:

    1.  Select the **Documentation** tab.

    2.  In the Published Contact Metadata section:

        **Name**   
        **Description**

        **Publisher**
        <br /> Select an Organization component to reuse Publisher information across multiple API Service/Proxy components or Trading Partner components.

        **Publisher Name**
        <br />The name of the person or organization acting as the API publisher.

        **Publisher Email**
        <br />The email address of the publisher.

        **Publisher URL**
        <br />The URL, including protocol, of the document containing contact information for the publisher. Make sure you post this document to that URL before you deploy the API Service component.

    3.  In the License Metadata section:

        **Name**   
        **Description**

        **License Title**
        <br />The title of the license under which the API is provided.

        **License URL**
        <br />The URL, including protocol, of the API license document. Make sure you post this document to that URL before you deploy the API Service component.

        **Terms of Service**
        <br />The URL, including protocol, of the document containing the terms of service. Make sure you post this document to that URL before you deploy the API Service component.

9.  Click **Save** or **Save and Close**.

## Next steps

If you are ready to deploy the API Service component, after clicking **Save**, click the **Create Packaged Component** button. The Create Packaged Component wizard opens. Complete the steps in the wizard and click the **Deploy** button on the final confirmation message. Your component now appears in the list of packaged components in the **Deploy** \> **Packaged Components** page, and in the list of deployed components on the **Deploy** \> **Deployments** page. 