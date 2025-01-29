# Generating API endpoints in an API Service component from an environment or Atom

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-53ef37b1-a774-4296-b6cc-63b9b2f43082"/>
</head>


Use the **Import an Endpoint** wizard to create API endpoints for the API Service component from an environment or Atom.

## Procedure

1.  In the API Service component, click **Import an Endpoint**.

    The Import an Endpoint wizard opens.

2.  Select **Import processes from an environment** or **Import processes from an Atom** to select Web Services Server listener processes deployed to an Atom or environment to link to new REST, SOAP, or OData endpoints.

    This is an easy way to migrate an existing API that does not use an API Service component.

3.  Click **Next**.

4.  In the **Environment** list, select an environment to import from. Or, in the **Atom** list, select an Atom to import from.

5.  Click **Next**.

6.  Select the check box for each Web Services Server listener process to link to a new REST, SOAP, or OData endpoint.

    You can search for processes by typing part or all of a process name, or an entire process ID in the **Search processes** field.

7.  Click **Next**.

8.  In the **Add to** field, select the endpoints that you want to have generated.

9.  Click **Finish**.

    The wizard closes, the requested endpoints are generated, and the selected processes are linked to the corresponding new endpoints.

10. In the API Service component, click **Save** or **Save and Close**.

## Next steps

Configure the newly generated endpoints. 