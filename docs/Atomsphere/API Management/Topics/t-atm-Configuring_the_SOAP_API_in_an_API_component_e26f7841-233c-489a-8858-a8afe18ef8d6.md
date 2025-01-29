# Configuring the SOAP API in an API Service component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e26f7841-233c-489a-8858-a8afe18ef8d6"/>
</head>


Configure SOAP endpoints on the SOAP tab of your API Service component.

## Procedure

1.  In the API Service component, select the **SOAP** tab.

2.  In the **WSDL Namespace** field, type the namespace that will be applied as a prefix in the WSDL to object names and List nodes. The default is `http://www.boomi.com/connector/wss`.

3.  Do one of the following:

-   To enable the generation of a WSDL with embedded schemas, set **Schema** to **Single**.

-   To enable the generation of a schema file for each XML namespace, along with the WSDL, set **Schema** to **Multi**.

4.  **Optional:** In the **WSDL Service Name** field, type the WSDL service name. This affects the `<port>` and `<binding>` elements in the WSDL. It is typically unnecessary to set a custom value unless you have a requirement to mimic a pre-existing API.

5.  In the **SOAP Version** list, select the SOAP version\(s\) with which the WSDL is to be compatible — v1.1 \(default\), v1.2 or both v1.1 and v1.2.

6.  **Optional:** To omit from the WSDL the -specific operation name wrapper elements for requests and responses, select **Omit Operation Wrappers**.

    :::note
    
    Do not use this option with operations for which the input type is Multiple XML objects or with operations whose names do not match the names of the corresponding profile elements.

    :::

7. **Optional:** To pass the entire SOAP request into the process, select **SOAP Envelope Passthrough**.

    :::note
    
    Advanced SOAP functionality is an optional account feature. If you would like to have this feature enabled in your account, contact your representative.

    :::

8.  Click **Save** or **Save and Close**.


## Next steps

You need to generate or create SOAP endpoints and configure them. 