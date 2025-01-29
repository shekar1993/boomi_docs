#  Boomi Integration Service connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-7c2deca1-a3f3-4397-b9ba-ef58f27308b8"/>
</head>


The Boomi Integration Service connector allows you to connect your flows to a Integration Flow Service component.

## Overview 

This connector provides a way for Flow to connect to a Integration Flow Service component.

The connector requires you to configure:

-   The **Atom Type** that the connector should connect to.

-   The **Path to Service** as defined on the Flow Service component in Integration.

-   The **Authentication Type** to be used by the connector. This can be either basic authentication using a Integration username/token, or X.509 client certificate authentication.

To learn more about using with , see [Flow and Integration](/docs/Atomsphere/Flow/topics/c-flo-AS_Flow_Integration_29be6cb0-f11a-4eaa-a03a-d1ce7c42e77d.md).

## Connector URL

The Integration Flow service endpoint is dependent upon the configuration of the connector defined during installation. Specifically, the endpoint is defined by which **Atom Type** is selected during connector installation, along with the **Path to Service** value. See [Installing the Boomi Integration Service connector](/docs/Atomsphere/Flow/topics/t-flo-Services_Installing_Boomi_Flow_Integration_Service_73fd266e-875d-4112-b9a1-eb284af2de3d.md).

For example:

-   The 'Boomi US Atom Cloud (Legacy) 1' cloud **Atom Type** is selected. The URI for this atom cloud is 'https://connect.boomi.com', which is used as the base URI for the connector endpoint.

-   The **Path to Service** is entered as '/fs/FlowService', as specified in the **Metadata \| Path to Service** field in the Integration Flow Service component.

-   This results in a URL of 'https://connect.boomi.com/fs/FlowService'.

-   The connector URL must not end with a forward slash \(/\) character.


For an updated list of Atom Cloud IP addresses, see [Hostnames and IP addresses for the Atom Clouds](https://help.boomi.com/csh?context=GUID-56963A56-5B61-4323-8510-E32CF810880C&pubname=atomsphere_platform).

## Configuration values 

Configuration values are added to the Integration Flow Service component, and are refreshed when installing/updating the Integration Flow service.

-   Configuration values are set on the connector, and are sent with each connector request. These values become a dynamic process property in the Boomi Flow Services Server listener process.

-   No configuration values are set up by default as these are defined in the Integration Flow Service component.