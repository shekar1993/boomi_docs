# Configuration of web service listen connections

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0e7993f9-dee7-4348-8ce1-6bf52f23dd43"/>
</head>

For connectors that use the shared web server to manage incoming traffic, connection settings are controlled at the Atom level on the **Shared Web Server** panel within Atom Management.

In standard Integration connectors, a connection component is paired with an operation component to build a direct link to a desired application or data source. This is not the case for connectors that use the shared web server to manage incoming traffic. For API publishing, connection settings are controlled at the Atom level, so the same web server can be used for all processes that are deployed to the Atom.

The Shared Web Server panel \(**Manage** \> **Atom Management** \> **Settings and Configuration** \> **Shared Web Server**\) is used to specify URL requirements and to control network and security settings at the account and account user level. The maximum number of configurable API users, including the account itself, is specified by the container property `com.boomi.container.sharedServer.http.maxSoaUsers`. The default number of API users is 200, which is the maximum number allowed by the . You may want to set this to a smaller number for your Atom. For information about configuring access to API processes at the individual user level, see the topic about securing APIs.

The AS2 Shared Server and Web Services Server connectors use the shared web server to manage incoming traffic. Their connection components are not predefined. You must create a process to use the shared web server settings along with the associated operation. The process(es) containing the connectors must be deployed to launch web server listening and to route the proper documents to a process. If you are using API Management, you must likewise deploy the API Service component in which an API endpoint(s) are defined that link to the process(es). See the connector topics linked below for information about configuring the operations for each connector. See the related topic about Designing APIs for information about generating and configuring API endpoints.

:::note

Review the Web Services Server Operation Configuration topic to learn how to construct advanced API scenarios and implement response paging.

:::

## Base URL

The base URL for an Atom’s deployed APIs is shown in the Atom’s Shared Web Server panel. By default this URL is constructed based on the Atom’s host name or external host name and the shared web server’s port/SSL port settings.

-   For a Atom Cloud or Test Atom Cloud, use the domain name shown in [Hostnames and IP addresses for the Atom Clouds](https://help.boomi.com/csh?context=GUID-56963A56-5B61-4323-8510-E32CF810880C&pubname=atomsphere).

## Listen connections on local Atoms

If you want to publish APIs that integrate with on-premise applications or data sources behind your firewall, you need to deploy the integration process to a local Atom that has access to those resources.

If you are using a local Atom within a secure network, you should configure your firewall/router to route incoming messages to this Atom. The proper ports should be opened for the Atom web server to receive messages.

The web server settings can be configured to forward requests to a standard HTTP or HTTPS address.

|  |  |  |
| --- | --- | --- |
| Definition URL (recommended) | `http(s)://<External/Internal Host>:<Port>/ws/soap?wsdl` | Used to output multi-file WSDLs. |
| Definition URL | `http(s)://<External/Internal Host>:<Port>/ws/soap?wsdl=single` | Used to create a WSDL merged into one file, with inline schemas and no includes. |

## Listen connections on the Boomi Atom Clouds

Each Atom Cloud’s Atom instance manages the authentication token settings for your account ID and the Atom Cloud's domain name. For all Atom Clouds, the token \(password\) is accessible from the Atom Management page.

The web server settings for an Atom Cloud's domain name are managed in the Atom Cloud on the Atom Management page. By default, the connection requires an HTTPS address and BASIC authentication to connect. If you are accessing the WSDL via a browser or SOAP client, you will be prompted for a user name and password.

**Sample Definition URL**

```
https://c01-usa-east-integrate.boomi.com/ws/soap?wsdl
```

## Listen connections on the Boomi Test Atom Clouds

The above information regarding Atom Cloud connections otherwise applies to the Test Atom Clouds. The only aspect of Test Atom Cloud connections that differs is the presence of the subdomain “test” in the base URL.

## Protected input headers

Protected input headers can be configured for an Atom’s shared web server in the Shared Web Server panel. When a header is protected, its value in a REST/SOAP/simple HTTP request cannot be passed to the web service listener process execution as a dynamic document property.

The following HTTP headers are designated as protected in the shared web server’s default configuration:

| General Headers | Request Headers | Non-standard Headers |
| --- | --- | --- |
| `Connection` | `Host` | `Proxy-Connection` |
| `Upgrade` | `Proxy-Authorization` | `x-Forwarded-For` |
| `Via` |     | `X-Forwarded-Proto` |