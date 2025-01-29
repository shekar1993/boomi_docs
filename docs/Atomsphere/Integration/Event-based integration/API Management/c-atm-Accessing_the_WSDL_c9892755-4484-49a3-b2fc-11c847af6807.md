# WSDL access 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c9892755-4484-49a3-b2fc-11c847af6807"/>
</head>


A WSDL (Web Services Description Language) is an XML-based language for describing SOAP-based web services and how to access them. Integration automatically generates a WSDL definition for Web Service Server operations that are deployed in processes.

A WSDL is an aggregated view of the entire web server for a particular Atom, so it shows all request objects and/or actions distributed throughout all of your operations and processes. A WSDL is accessible at the Atom level through a URL, so you need to point to the local Atom or Atom Cloud accordingly.

-   For SOAP endpoints defined in a deployed API Service component and published using API Management, developers of applications that interact with those endpoints can obtain WSDL URLs from the API Catalog page in the API Management Developer Portal as follows:

    -   If the API has SOAP v1.1 endpoints, to obtain the WSDL URL for those endpoints, open the API’s catalog entry and select the **SOAP 1.1** tab.

    -   If the API has SOAP v1.2 endpoints, to obtain the WSDL URL for those endpoints, open the API’s catalog entry and select the **SOAP 1.2** tab.

-   For SOAP endpoints defined in a deployed API Service component but not published using API Management, WSDL URLs are constructed as follows:

    -   SOAP v1.1 endpoints

        ```
        <Base URL for API Requests><Base API Path>/ws/soap
        ```

    -   SOAP v1.2 endpoints

        ```
        <Base URL for API Requests><Base API Path>/ws/soap12
        ```

    where

    -   **Base URL for API Requests** is set in **Manage** \> **Atom Management** in the Shared Web Server panel. The base URL is by default derived from the Atom’s host name or external host name and the shared web server’s port/SSL port settings. For a local Atom, there is the option to configure an override for the base URL.

    -   **Base API Path** is set in the API Service component’s **General** tab.

-   For a SOAP web service that is not defined in an API Service component, the WSDL URL is constructed as follows:

    -   `<Base URL for API Requests>/ws/soap?wsdl` retrieves a WSDL as multiple files, one for each request object.

    -   `<Base URL for API Requests>/ws/soap?wsdl=single` retrieves a WSDL in which request objects are merged into a single file.

    **Base URL for API Requests** is set in **Manage** \> **Atom Management** in the Shared Web Server panel.

    WSDL URL examples for this case are in the linked topic about configuring web service listen connections.

:::info Important

It is important that your web service object configuration and, if applicable, your API Service component configuration, allow for SOAP requests to be received in order to generate a request definition in the WSDL. The SOAP URL path will be labeled as “Unavailable” in the operation if the settings do not apply.

:::
