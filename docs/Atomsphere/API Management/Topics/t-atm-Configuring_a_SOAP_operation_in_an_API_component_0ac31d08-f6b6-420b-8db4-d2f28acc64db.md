# Configuring a SOAP operation in an API Service component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0ac31d08-f6b6-420b-8db4-d2f28acc64db"/>
</head>


In an API Service component, configure a SOAP operation on the **SOAP** tab.

## Before you begin

Open the operation that you would like to configure either by:

-   Creating [a new SOAP operation](/docs/Atomsphere/API%20Management/Topics/t-atm-Adding_a_SOAP_operation_to_an_API_component_b470a2f0-5a58-465b-ba0f-745ea1a4cc02.md)

-   Opening the API Service component, selecting the **SOAP** tab, and clicking **Action** \> **Edit Operation**.

## Procedure


1.  Set the operation’s **Operation Name**.

2.  If a Web Services Server listener process is not already linked to the endpoint, click the magnifying glass icon adjacent to the **Request Handled by Process** field and in the component browser, select the process to link.

    The **Request Handled by Process** field populates, along with the default settings for the endpoint’s specified operation. The default settings are derived from the Web Services Server listener operation used in that process.

    :::note
    
    In steps 4–9 you can override the default settings derived from the linked process for the endpoint’s specified operation. Refer to the topic about the **SOAP** tab for information about the settings.

    :::

3.  **Optional:** Set an override for the operation’s **Expected Input Type**.

4.  **Optional:** Set an override for the operation’s **Request Profile**. This is an option only for an operation with its **Requested Input Type** set to Single XML Object or Multiple XML Objects.

    If you set an override, the profile’s name will appear in black.

5.  **Optional:** Set an override for the operation’s **Response Output Type**.

6.  **Optional:** Set an override for the operation’s **Response Profile**. This is an option only for an operation with its **Response Output Type** set to Single XML Object or Multiple XML Objects.

    If you set an override, the profile’s name will appear in black.

7.  **Optional:** Set an override for the operation’s output **Page Size**. This is an option only for an operation with its **Response Output Type** set to Multiple XML Objects.

8.  **Optional:**   If **SOAP Envelope Passthrough** is selected on the SOAP tab, select the **Returns a SOAP Fault** option to use the value specified in the Dynamic Document Property as the HTTP status code.

9.  Click **Save** or **Save and Close**.