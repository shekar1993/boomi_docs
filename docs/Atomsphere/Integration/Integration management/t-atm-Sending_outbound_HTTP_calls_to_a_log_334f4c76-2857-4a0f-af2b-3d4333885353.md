# Sending outbound HTTP calls to a log 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-334f4c76-2857-4a0f-af2b-3d4333885353"/>
</head>

If you have your own Atom, Molecule, or private Atom Cloud, and if you use a SOAP-related connector such as the Web Services SOAP Client connector, you can change the HTTP transport pipe property.

## About this task

To send outbound HTTP calls to a container log where you can check for error messages, set the property's dump parameter to `true`.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Click the **Custom** tab.

    ![](../Images/manage-ps-properties-custom-tab_c99ba52d-98d6-4314-b8bf-090a1b801855.jpg)

3.  In the **System Properties** section, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

4.  In the **Property** field, type the following:

    ```
    .xml.internal.ws.transport.http.client.HttpTransportPipe.dump=true
    ```

5.  Click **Save**.

    Because changes to these properties do not take effect until the Atom, Molecule, or private Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

    Only Atom, Molecule, and Atom Cloud owners can restart them. Accounts that have an Atom in an Atom Cloud cannot restart the Cloud.