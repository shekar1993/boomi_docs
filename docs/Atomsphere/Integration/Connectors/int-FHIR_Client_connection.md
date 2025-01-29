# FHIR Client connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a5c58bb4-7b2e-47e0-a2a1-5925c3329aff"/>
</head>

The FHIR Client connection represents an authorized connection to a FHIR server. You can utilize **None**, **Basic**, or **OAuth2.0** based authentication.

## Connection tab

* **URL**: The URL of the FHIR server. To view a list of public FHIR test servers, see the [Public Test Servers](https://confluence.hl7.org/display/FHIR/Public+Test+Servers) topic in the FHIR documentation.

* **Authentication Type**: The authentication method you’d like to use to connect to the service. 

  * **None** : No authentication. 

  * **Basic**: Use your existing FHIR server credentials. 

    * **Username**: Enter your FHIR server username. 

    * **Password**: Enter your FHIR server password.

  * **OAuth 2.0**: See the OAuth 2.0 tab. 

## OAuth 2.0 tab

The following fields are displayed when you select OAuth 2.0 as your authentication type. Some fields are conditional based on the **Grant Type**.

* **Grant Type** - A checkbox to select which OAuth 2.0 authorization method to use. You can choose **Authorization Code** or **Client Credentials**. 

* **Client ID** - The client application ID.

* **Client Secret** - The client application secret.

* **Authorization Token URL** (Authorization Code) - The URL to obtain user authorization to access their FHIR resources.

* **Access Token URL** - The URL to obtain an access token.

* **Scope** - You can add one or more permissions, which are case-sensitive and separated by a space, to application request URLs. If you change scope permissions, you need to re-authenticate to ensure that all of the requested permissions are granted. This value is empty by default..

* **Add Authorization Parameter** (Authorization Code) - An optional key value pair. 

* **Add Access Token Parameter** - An optional key value pair. 

* **Access Token** (Authorization Code) - Click to retrieve an access token to access protected resources

## Test Connection

You can test your connection settings before you use or save the connection in a process. Test Connection performs a request to the `{fhir-server-url}/metadata` endpoint to validate the connection settings. 

The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::note 

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::