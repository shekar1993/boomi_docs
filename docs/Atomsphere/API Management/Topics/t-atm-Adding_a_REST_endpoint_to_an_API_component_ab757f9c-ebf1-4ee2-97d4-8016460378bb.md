# Adding a REST endpoint to an API Service component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ab757f9c-ebf1-4ee2-97d4-8016460378bb"/>
</head>


Click **Add an Endpoint** on the API Service component’s REST tab to add a REST endpoint.

## About this task

These steps represent an alternative to generating endpoints by selecting processes to link.

## Procedure

1.  In the API Service component, select the **REST** tab.

2.  Click **Add an Endpoint**.

    The **Add REST Endpoint** dialog opens.

3.  **Optional:** In the **Resource Path** field, type the **Object Name** for requests to the route's specified operation and the **Path Parameters**URL path for parameter requests in the path.

    To specify parameters in the path, delineate them with braces — for example, \{id\}. Parameters in the matched part of the path are available to the linked process as dynamic process properties named param\_name, where name is the parameter name — for example, param\_id.

    The full URL has this form:

    ```
    http://Host:port/REST_url_path/Object/Path_Parameters
    ```

    where

    -   `Host` and `port` are set on the Shared Web Server panel \(**Manage** \> **Atom Management**\).

    -   `REST_url_path` is the **Path to REST** shown on the **REST** tab \(the **Base API Path** that you specify on the **General** tab is appended to the **Path to REST**\).

    -   `Object` is the **Object** specified.

    -   `Path_Parameters` is the **Path Parameters** specified in this step.

    For example:

    ```
    http://machine.domain.tld:9090/ws/rest/Customer/{customerId}
    ```

1.  **Optional:** In the **HTTP Method** list, select the HTTP method for the route.

2.  **Optional:**  In the **Request Handled by Process** field, select or create a process to handle the incoming requests.

3.  Click **OK**.

    The new route and, if a resource was added, the new resource, appear in the REST Resources list.

4.  Click **Save** or **Save and Close**.

## Next steps

The next task is to configure the new route, or if this is a new resource, to configure its route\(s\). As part of the route configuration you can specify alternative routing by HTTP header. 