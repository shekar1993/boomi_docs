# Generating API endpoints with a new linked listener process in an API Service component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a2b82e55-51d3-4584-86b0-2b3c5a8f9e8f"/>
</head>


Use the **Import an Endpoint** wizard to create a new linked listener process for the API Service component.

## Procedure

1.  In the API Service component, click **Import an Endpoint**.

    The Import an Endpoint wizard opens.

2.  Select **Create a new process**.

3.  Click **Next**

    The wizard advances to the **Create a Process** screen.

4.  In the **Process Name** field, type a name for the new process.

5.  Browse to the **Process Location** — the folder in which the new process and its Web Services Server operation are to be generated.

6.  In the **Add to** field, select the endpoint that you want to generate.

 | Option                                                       | Description                                                  |
   | :----------------------------------------------------------- | :----------------------------------------------------------- |
   | If REST is selected, the following controls are used to configure the REST endpoint. | **Name**<br />**Description**<br />**Object**<br />The unique name of the object upon which the generated route operates. This name also identifies the resource for the route.<br />**URL Path**<br />Sets the URL path for requests for the operation.<br />The fully-formed URL will be the concatenation of<br /> 1. The host and port, set in the Shared Web Server panel (Manage > Atom Management), <br /> 2. The Path to REST, visible in the REST tab (this path contains the Base API Path set on the General tab),<br /> Object, and the path set here.<br />To specify parameters in the path, delineate them with braces — for example, `{id}`. Parameters in the matched part of the path are available to the linked process as dynamic process properties named param_name, where name is the parameter name — for example, `param_id`.<br />**HTTP Method**<br />Sets the HTTP method used in requests for the operation. Your selection determines the Operation Type for the Web Services Server operation in the new process. |
   | If SOAP is selected, the following controls are used to configure the SOAP operation. | **Name**<br />**Description**<br />**Operation Name**<br />The unique name of the operation. The recommended naming convention is the listener Operation Type in all lowercase — get, query, create, update, upsert, or delete — followed by the name of the object upon which the generated endpoints will operate — for example getCustomer.<br />  Even if you followed the recommended naming convention, the Object for the Web Services Server operation in the new process will not be populated.<br /> |
   | If OData is selected, the following controls are used to configure the OData entity. | **Name**<br />**Description**<br />**Entity Name**<br />The unique name of the entity.<br />**Entity Action**<br />Two OData actions are available for each entity:<br /> 1. Get Entities<br />Select Query Passthrough to enable OData client processes to pass query filters as payloads in action requests.<br /> 2. Get Entity By Key |

7.  Click **Finish**.

    The wizard closes and the API endpoints are generated, along with the listener process and its Web Services Server operation. The process is linked to the endpoints, and the process’ Start step is pre-configured to use Web Services Server operation.

2.  In the API Service component, click **Save** or **Save and Close**.

## Next steps

The next task is to configure the newly generated endpoints.
