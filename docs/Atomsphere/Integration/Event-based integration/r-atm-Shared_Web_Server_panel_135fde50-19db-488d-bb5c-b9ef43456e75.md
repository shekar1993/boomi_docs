# Shared Web Server panel

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-186770BF-0A55-4151-ABA0-C3AC19DA5121"/>
</head>

The Shared Web Server panel appears on the Atom Management page (**Manage** > **Atom Management**). Use this panel to configure the selected Atom’s web server settings for web service publishing.

:::note

You must have the Atom Management privilege to perform actions on the Shared Web Server panel. If you have the Atom Management Read Access privilege, you can view existing settings, but you cannot make any modifications.

:::

The number of tabs that you see and the settings on the tabs vary, depending on whether the account that you are using owns the Atom, Molecule, or Atom Cloud that you selected and the features enabled in the account.

![Shared Web Server configuration panel.](../Images/manage-db-shared-web-server-settings_07d8629d-f3ec-4fb5-af59-8eaee712d43d.jpg)

Changes to the web server configuration specified on the General tab are saved for the most part in the `<installation_directory>/conf/container.properties` file. Notable exceptions are account authentication and web service user authentication properties, which are saved in the `<installation_directory>/conf/http-auth.properties` file.

:::info Important

A "Plugin Restart" message appears when Cloud owners save configuration changes on the Shared Web Server panel. Restarting the plugin saves changes to configuration settings, but may cause Shared Web Server downtime for users. Owners may choose to cancel the restart if they do not want to cause downtime for users, or if they want to restart the plugin at a later time.

:::

## General tab

The General tab enables you to set account-level settings and override several default values.

- **Base URL for API Requests** - By default, the URL is constructed based on the host name or external host name and port/SSL port settings.

- **API Type** - Sets the level of user management and API management functionality that is applicable to the web server.

  - **Basic** - User management is disabled. Client certificates and Custom authentication cannot be used. API Service/Proxy components cannot be used. This is the default for new accounts for which the Services Enablement feature is enabled

  - **Intermediate** - User management is enabled at the individual process level. API Service/Proxy components cannot be used.
  
    This selection is available only in accounts for accounts for which the Services Enablement feature was enabled prior to the June 2014 release

- **Advanced** - API Service/Proxy components are enabled. User management is enabled at the API Service component level. This is the default for new accounts for which the API Management feature is enabled.

    :::note

     If this setting is changed from either Intermediate or Advanced and process or API filters are configured in the User Management tab, a confirmation dialog opens. Clicking **OK** in the confirmation dialog immediately applies the change and deletes the filters.

     :::

- **Authentication Type** - The authentication type that the account uses when communicating with the Atom, Molecule, or Atom Cloud.

  For Atoms and Molecules, the authentication type selected here is used by all ports added to this web services server. The authentication type options are None, Basic, Client Certificate Header, Client Certificate, Custom, External Provider, and Gateway.

  For Clouds, each port that is added can use the None, Basic, Client Certificate, or External Provider authentication types. The Cloud owner’s account can then select any one of the authentication types used by its ports as the Cloud’s authentication type.

  Cloud accounts see only the authentication type\(s\) that the Cloud owner makes available to them.

  All web service users in the account must use the same authentication type.

  - **None** - No sign in information is required.

    :::note

    When **Authentication Type** is set to None, Users can still be added on the User Management tab and are used in the following scenarios:

    - For Atoms and Molecules, the Username identifies who is making the service call. In this scenario, passwords are ignored.
    - For Atom Clouds, one or more Users must be set on the User Management tab. The Username appends the instance ID so that the account being called is identified. Plus, it identifies who is making the service call.

    :::

  - **Basic** - Basic authentication is required for sign in.

    If **Authentication Type** is set to Basic and **API Type** is set to Basic, then a button for generating a token appears. If the **API Type** is set to Basic, then client certificates and custom authentication cannot be used.

- **Client Certificate Header** - A client certificate component is included in http or https headers.

  **Client Certificate Header** is available only if **API Type** is set to Intermediate or Advanced.

- **Client Certificate** - A client certificate component is required for authentication.

  **Client Certificate** is available only if **API Type** is set to Intermediate or Advanced. When using Client Certificate authentication with the Shared Web Server, certificates should always be unique.

- **Custom** - The JAAS LoginModule is used for authentication. This authentication type is available only for Atoms and Molecules. It can be used only by accounts for which the API Management feature is enabled.

   **Custom** is available only if **API Type** is set to Intermediate or Advanced and you have functionality.
  
- **External Provider** - An external identity provider is used for authentication.

   **External Provider** is available only if **API Type** is set to Advanced and you have functionality. It is available on Atoms, Molecules, and local Atom Clouds only. **External Provider** cannot be set on Atoms or Molecules attached to a Atom Cloud.

   Configure your external identity provider details within .

- **Gateway** - Leverages a validation token accessible to a API Gateway that is validated by the Atom, Molecule or Cloud to authenticate.

    **Gateway** is available only if **API Type** is set to Advanced and you have functionality. It is available on Atoms, Molecules, and local Atom Clouds only. **Gateway** cannot be set on Atoms or Molecules attached to a Atom Cloud.

   Configure your Gateway authentication details within .

## Listening Port Configuration

The settings under **Listening Port Configuration** on the General tab are specific to the server environment. In Atom Cloud configurations, these settings are present only for the account that owns the Atom Cloud.

You can have only one API Gateway authentication port configured. If you configure more than one port or already have multiple ports configured and you update any settings in the Shared Web Server panel, you will be prompted to delete or disable any additional port configurations.

:::info

Internal Port and External Port are independent from Internal Host and External Host.

If you want to use the default value for the External Port, type in the default Port number for it to be used. The default Port is not displayed in the Base URL for API Requests field, because the standard is to not include the default Port number in the URL.

:::

- **Default** - The default listening port. The default port is also used for accessing Swagger in a deployed API.

- **Port** - The port number of the external port which routes to the shared web server listener.

- **SSL** - If selected, the port is an SSL (HTTPS) port. The default for SSL ports is 9093.

- **Authentication Type** - The ports' authentication type is the same as the accounts authentication type. The authentication type can be changed only for the account, not for individual ports in the account.

- **External SSL** - If selected, the external port is an SSL (HTTPS) port. External SSL ports can be redirected to an internal non-SSL port.

- **Base URL for API Requests** - This URL is constructed per the configured **External Host** and optionally the **External Port**.

- If the **Authentication Type** is set to **Client Certificate**, the SSL Certificate field displays. Select the correct Certificate component for the client.

- If the **Authentication Type** is set to **Client Certificate Header**, the **Client Certificate Header Name** field displays. Add the name of the header for the certificate to reside in.

## Advanced Settings

The settings under **Advanced Settings** on the General tab are for advanced web service users and may not need to be configured in a majority of cases. In Atom Cloud configurations, this section is present only for the account that owns the Atom Cloud.

- **Internal Host** - For multi-homed boxes, an IP address can be used here for binding to a specific interface.

  :::info Important

  Internal Host and External Host are independent from Internal Port and External Port.

  If you want to use the default value for the External Port, you need to type in the default Port number for it to be used. The default Port is not displayed in the Base URL for API Requests field, because the standard is to not include the default Port number in the URL.

  :::

- **Examine Forwarded Headers** - Embedded Java technology is capable of examining forwarded headers and extracting external host information for response/callback purposes.

  Selecting this option substitutes the load balancer’s host name for the node’s host name in the request. This is recommended, particularly for Molecules and Atom Clouds.

  :::info Important

  Select this field to use a URL that uses `https` rather than `http` for your Swagger Visualization Portal URL.

  When **Examine Forwarded Headers** is selected, the external host, port, and protocol information is extracted from the request headers of the proxy.

  On the proxy, configure the following headers for a secure `https` configuration of your Swagger Visualization Portal:

  - `X-Forwarded-Host` - The External Host name.

    If you use a port other than the default port of 433, also include `host:port`.

  - X-Forwarded-Proto` - Use a value of `https` for a secure Swagger Visualization Portal URL.

  Your Atom checks these headers, when they are present, and extracts the information from them.

  If the proxy is configured to forward the host name in a different header than `X-Forward-Host`, you can configure the custom property `com.boomi.container.sharedServer.http.forwardedProtoHeader` on your Atom. For instance, if you configure the proxy to forward the host name in the `X-Destination-Host` header, set the `com.boomi.container.sharedServer.http.forwardedProtoHeader` on your Atom to `X-Destination-Host`. Your Atom will check the request for the `X-Destination-Host` header and extract the host name information from it.

  :::

- **External Host** - The external host name or IP for the listener.

  :::info Important

  Internal Host and External Host are independent from Internal Port and External Port.

  If you want to use the default value for the External Port, you need to type in the default Port number for it to be used. The default Port is not displayed in the Base URL for API Requests field, because the standard is to not include the default Port number in the URL.

  :::

- **Override Base URL** - If the Shared Web Server is behind a load balancer or a firewall, enter the load balancer or firewall URL that routes to the Atom. This value is used for information only in API URLs that are displayed in API Management, to access APIs or their related documentation. It does not affect an Atom's connectivity.

- **Maximum Number of Threads** - The maximum number of handler threads that the listen process spawns. Other requests are queued. The default is 250.

## Protected Headers

The values of protected headers in web service requests are not passed as dynamic document properties to the shared web server listener process execution.

**Use default**  
If selected \(the default\), the Header Name list is updated to contain only the following header names. Editing of the list is disabled.

| General Headers  | Request Headers    | Non-standard Headers  |
|------------------|--------------------|-----------------------|
| `Connection`     | `Host`             | `Proxy-Connection`    |
| `Upgrade`        | `Proxy-Authorization` | `x-Forwarded-For`   |
| `Via`            |                    | `X-Forwarded-Proto`   |


**Define custom headers**  
The Header Name list is editable.

:::note

Defining custom headers does not remove the names of the default protected headers from the list. You must manually delete those headers.

:::

Each list entry has a field in which the name of a header is specified — either a [standard HTTP header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2) or a custom header.

Standard HTTP header field names are case-sensitive. Header names can contain alphanumeric characters and special characters !\#$%&'\*+.^\`~-\_.

Custom header field names must have the prefix `X-WSS-`. Custom header fields are case-sensitive.

Clicking ![Remove button.](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) next to a header name removes that header name from the list.

:::note

Only the values of the following special standard HTTP headers are eligible to be passed to the shared web server listener process execution:

| Request Headers  | Entity Headers    |
|------------------|-------------------|
| `Accept`         | `Content-Encoding`- the compression method applied to the data|
| `Accept-Charset` | `Content-Language`|
| `Accept-Encoding`| `Content-MD5`     |
| `Accept-Language`| `Content-Type` - the MIME type of any input data, if given   |


So there is no need to specify any other standard HTTP headers as protected.

:::

## User Management tab

The User Management tab’s settings apply directly to the account's relationship, or the web service user in an account’s relationship, to the Atom, Molecule or Atom Cloud in question. This tab is present only if **API Type** is set to Intermediate or Advanced on the General tab.

On this tab the owner of the Atom, Molecule or Atom Cloud can add and delete web service users. The owner can view and generate a user’s authentication token, select their client certificate, or enter their external user name. The owner can view and edit the IP filtering rules for a user, and view and edit the list of processes that should be accessible to each user.

**Enable Internal Roles**  
Available only if **API Type** is set to Advanced. If you select this check box, the Internal Roles Management tab appears.

**Users**  
List of web service users with access to the account and the Atom, Molecule or Atom Cloud on which it resides. The first user in the list is always the account, which cannot be deleted. It is identified by its account ID. If the selected Atom is attached to an Atom Cloud, this field displays the Instance ID, which is the account ID followed by a period and a suffix.

Any user of an Atom Cloud can add web service users to this list. Use the icons at the top of the list to add or delete web service users. When you select a web service user, the user name, authentication, IP filtering rules, and processes to which the user has access appear on the right side of the panel.

**Username**  
Used to enter the user name of the web service user. You cannot enter spaces or special characters in this field and it cannot be blank. The user name must be unique to the account and the Atom, Molecule, or Atom Cloud. An @ symbol and the account ID are appended to the user name that you enter, in the format `usernname@accountID`. The account ID cannot be edited.

The user name is *not* equivalent to a user name or email address.

**Use IP Filtering**  
Used to enable IP filtering. If you select this check box but do not specify any IP filters, all IP addresses are blocked for the user. If you specify filters, only IP addresses matching those patterns are allowed.

**Use API Filtering**  
Used to grant access to processes linked to certain API Service components that are deployed to the selected Atom or environment. The user will be able to invoke web service calls only for processes linked to API Service components to which they have access. This section is present only if **API Type** is set to Advanced.

**Use Process Filtering**  
Used to grant access to certain web service listener processes that are deployed to the selected Atom or environment. The user will be able to invoke web service calls only for processes to which they have access. This section is present only if **API Type** is set to Intermediate.

## Internal Roles Management tab

The Internal Roles Management tab allows a administrator to associate specific users to each internal role. [Internal Roles](http://help.boomi.com/api-management/GUID-1122C90D-EB04-4322-8A54-40D961881137.html) are defined in on the **Authentication** \> **Internal** page.

This tab is present only if **API Type** is set to Advanced on the General tab and the check box **Enable Internal Roles** is selected on the User Management tab.

**Internal Role**  
List of internal roles that exist on the Atom, Molecule, or Atom Cloud on which it resides.

## CORS Configuration tab

The CORS Configuration tab is used to define rules for the handling of incoming CORS requests. This tab is present only if **API Type** is set to Advanced.

**Origins**  
Lists the origin domains from which the web server allows requests in the order in which the web server applies matching. You should order origins from most specific to least specific. You can reorder origins by dragging their reorder icons **![Reorder Origins icon.](../Images/main-ic-dots-16-gray-on-white_404b1c3f-e21a-4b67-ba76-65412d39eb70.jpg)**. \* denotes any domain and, if specified, should be last in the list.

**Ports**  
Expands or collapses the controls used to specify ports from which the web server allows requests from the selected origin.

 If the list is not populated, the web server allows requests from the default ports — 80 for HTTP and 443 for HTTPS.

**Allowed Methods**  
Expands or collapses the controls used to specify allowed methods in requests from the selected origin.

**Allowed Request Headers**  
 Expands or collapses the controls used to specify allowed headers, in addition to the defaults, in requests from the selected origin.

**Exposed Response Headers**  
Expands or collapses the controls used to specify headers, in addition to the defaults, included in the web server’s responses to requests from the selected origin.
