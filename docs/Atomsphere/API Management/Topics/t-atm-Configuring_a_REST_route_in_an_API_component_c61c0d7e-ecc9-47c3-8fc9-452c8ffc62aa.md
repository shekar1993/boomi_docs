# Configuring a REST endpoint in an API Service component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c61c0d7e-ecc9-47c3-8fc9-452c8ffc62aa"/>
</head>


In an API Service component, configure a REST endpoint on the **REST** tab.

## Procedure

1.  In the API Service component, select the **REST** tab.

2.  In the **![](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) Actions** menu for the endpoint you want to configure, select **Edit Endpoint**.

3.  If the URL path for requests for the route’s specified operation is not yet set, type the path in the **Resource Path** field.

    To specify parameters in the path, delineate them with braces — for example, `{id}`. Parameters in the matched part of the path are available to the linked process as dynamic process properties named `param_name`, where name is the parameter name — for example, `param_id`.

    The full URL has this form:

    ```
    http://Host:port/REST_url_path/Object/Url_path
    ```

    where

    -   `Host` and `port` are set on the Shared Web Server panel \(**Manage** \> **Atom Management**\).

    -   `REST_url_path` is the **REST URL Path** specified in the **General** tab \(this path contains the **Base URL** set in that same tab\),

    -   `Object` is the **Object** specified when the resource was added to the REST API.

    -   `Url_path` is the **URL Path** specified in this step or when the route was added.

    For example:

    ```
    http://machine.domain.tld:9090/ws/rest/Customer/{customerId}
    ```

    :::note
    
    In steps 6–12 you can override the default settings derived from the linked process for the route’s specified operation. Refer to the topic about the **REST** tab for information about the settings.

    :::

4.  **Optional:** Set an override for the operation’s **HTTP Method**.

5.  **Optional:** Define HTTP routing headers to be matched in requests for the operation.

    1.  Expand **Routing Headers**.

    2.  Click **![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add HTTP Header**.

    3.  In the **Key** field, type the name of the first header.

    4.  In the **Value** field, type the header value.

    For each additional header you are defining, repeat steps 2-4 for that header.

6.  **Optional:** Define query parameters for the operation. Query parameters defined here will be included in the generated [OpenAPI specification file](/docs/Atomsphere/API%20Management/Topics/int-Open_API_Specification_File_Reference_c22e9762-4e86-400f-a87a-3244c780e361.md).

    1.  Expand **Query Parameters**.

    2.  Click **![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add Query Parameter**.

    3.  Add the **Name** of the query parameter.

    4.  Select a base type: **string**, **boolean**, **integer**, or **number**.

    5.  Select the **Required** check box if necessary.

    6.  Add a **Description**.

7.  If a Web Services Server listener process is not already linked to the route, click the magnifying glass icon adjacent to the **Request Handled by Process** field and in the component browser, select the process to link.

    The **Request Handled by Process** field populates, along with the default settings for the route’s specified operation. The default settings are derived from the Web Services Server connector operation used in that process.

8. **Optional:** Set an override for the operation’s **Input Type**.

9. **Optional:** Set an override for the operation’s **Input Profile for Request**. This is an option only for an operation with its **Input Type** set to Single JSON Object, Multiple JSON Objects, Single XML Object or Multiple XML Objects.

    If you set an override, the profile’s name will appear in black.

10. **Optional:** Set an override for the operation’s **Output Type**.

11. **Optional:** Set an override for the operation’s **Output Profile for Response**. This is an option only for an operation with its **Output Type** set to Single JSON Object, Multiple JSON Objects, Single XML Object or Multiple XML Objects.

    If you set an override, the profile’s name will appear in black.

12. **Optional:** Set an override for the operation’s output **Internet Media Type for Output** \([Internet media type](http://en.wikipedia.org/wiki/Internet_media_type)\) . This is an option only for an operation with its **Output Type** set to Single Data.

13. **Optional:** Set an override for the operation’s output **Number of Documents Returned**. This is an option only for an operation with its **Output Type** set to Multiple JSON Objects or Multiple XML Objects.

14. **Optional** In the **Additional Responses** section, select **Add Response** and add the following for each response:
    - **Response Code** - Set to a number between 100-599. You can also use `1XX`, `2XX`, `3XX`, `4XX`, `5XX`, or `default`.
    - **Description** - Details about the response.
    - **Output Type** -  Single Data, Single JSON Object, Single XML Object, or Multipart/form-data.
    - **Output Profile/Media Type**   

15. Click **Save** or **Save and Close**.