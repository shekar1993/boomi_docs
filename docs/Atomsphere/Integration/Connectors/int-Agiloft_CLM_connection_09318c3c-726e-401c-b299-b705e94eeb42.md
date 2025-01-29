# Agiloft CLM - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-09318c3c-726e-401c-b299-b705e94eeb42"/>
</head>


An Agiloft CLM - Partner connection represents access to one Agiloft KB with one user account. Access with multiple user accounts or to more than one Agiloft KB require the configuration of one separate connection for each user account/KB combination.


:::note

The connector automatically manages the HTTPS certificate. It does not have to be manually imported. Agiloft REST API uses username and password for authentication and authorization.

:::

## Connection tab 

The Agiloft CLM - Partner connection configuration contains the information that is needed to connect with and log in to a specific Agiloft instance. The permissions configured in Agiloft for the credentials used in this configuration dictate the level of access to data in Agiloft.

- **URL** - Enter the URL for the Agiloft REST API service endpoint. This is usually the domain linked with the Agiloft KB followed by /ewws.
- **KB Name** - Enter the name of the Agiloft KB.
- **User Login** - User login for logging into the Agiloft REST API. Make sure that the credentials have the correct license and permissions to access the Agiloft API.
- **Password** - Password for logging into the Agiloft REST API
- **SAP Logon Group Name** - This field is applicable only if the **Connection Type** is Message Server Host, enter the name of the SAP server group \(group\). The SAP JCo property is jco.client.group. This field is extensible.
- **SAP Client** - Required. Enter the SAP client number. The SAP JCo property is jco.client.client.

User Name
:   Required. Enter the SAP Username used to connect to an SAP system. The SAP JCo property is jco.client.user.

Password
:   Required. Enter the SAP Password used to connect to an SAP system. The SAP JCo property is jco.client.passwd.

## Configuration in Agiloft 

Make sure the user configured in the connector has permissions to access the Agiloft REST API.

Workflow

1.  In Setup \> System \> Manage Web Services, configure the security settings for the SOAP and REST Web Services. Use this button to enable or disable SOAP Web Services. In case of problems, check the log file for messages: Agiloft\_install\_directory\_wildfly\_standalone+log\_server.log
2.  Select the groups that are permitted to use the SOAP and REST interfaces. If the user configured in the connector does not belong to a REST group, then the authentication will return a 403-access error.
3.  Configure the **IP Address Restriction** fields.