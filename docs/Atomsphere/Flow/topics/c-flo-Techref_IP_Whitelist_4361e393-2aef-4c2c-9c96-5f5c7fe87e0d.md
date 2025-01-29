# Hostnames and IP addresses for the Flow platform 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-4361e393-2aef-4c2c-9c96-5f5c7fe87e0d"/>
</head>


If your Organization wishes to provide Flow with local resource access using IP Ingress (Inbound IP) address trusted listing, ensure that you proceed with caution.


## Overview 

The following IP addresses relate to Outbound IP address connectors connectivity with the Flow platform. Connectors are used within Flow to connect flows to external applications, such as third-party APIs and data sources. See [Connectors](c-flo-Service_Integrations_cac4d712-9607-4f24-8e70-aae48ceb27b9.md).

There are two types of connectors connection:

-   **Connections to self-hosted connectors communicating with Flow**:  Connectors that are hosted outside of the Flow platform, typically self-hosted by a customer within their own infrastructure. If this is required, the main/global US region should be trusted, but the GB/AU/CA/SG/EU regions are only required if end users will be running flows from within those regions. Using a regional URL means that the Flow build time and runtime is contained within that region. See [Technical architecture overview](c-flo-Techref_Architecture_b7cbf7a7-bcd0-4d1c-b926-69854df699ec.md).

-   **Connections from native Flow connectors hosted by Flow**: Flow provides access to a number of supported native connectors that offer ready-made connectivity to common applications such as Salesforce, for example.


IP address restrictions can also be set up for users from within Flow. See[ Restricting tenant flow access by IP address](c-flo-Tenant_restrict_by_ip_address_96aa7e22-e56d-4ae1-aab5-ba6d92627eca.md).

If you use a local atom with the Boomi Integration Service connector you may also need to add the Flow IP addresses to your trusted list if your Organization's network policy is configured to block all outbound and/or inbound traffic.

See [ Hostnames and IP addresses for connecting with Boomi](/docs/Atomsphere/Platform/c-boo-Hostnames_and_IP_Addresses_for_Connecting_b6a0acea-1c2f-4c22-92b2-6aa3f410cffd.md) for more information on Hostnames and IP addresses for the Boomi Enterprise Platform and Boomi Atom Clouds.

## Flow connectors trusted IP listing

trusted IP listing requirements depends on your usage, as outlined in the following table of scenarios.

|Are you using a hosted ?|Are you using a self-hosted ?|Trusted IP listing|
|:-----------------------|:----------------------------|:-----------------|
|No|No|No IP addresses require trusted IP listing (no connectors are being used).|
|Yes|No|Add all of the "Connections to native Flow connectors hosted by Flow" IP addresses in the table to your trusted IP listing.|
|No|Yes|Add the Flow global/main US region (and any/all of the GB/AU/CA/SG/EU regions if you are using these) in the "Connections to self-hosted connectors communicating with Flow" table to your trusted IP listing.|
|Yes|Yes|Add all of the "Connections to native Flow connectors hosted by Flow" IP addresses as well as the Flow global/main US region (and any/all of the GB/AU/CA/SG/EU regions if you are using these) in the "Connections to self-hosted connectors communicating with Flow" table to your trusted IP listing.|

## Connections to self-hosted connectors communicating with Flow

Users typically access Flow using the `flow.boomi.com` URL, routing to the main US regional AWS data centre. However, user access for Flow can also be configured to route through one of the alternative regions (CA/EU/GB/AU/SG).

Each region is accessed through a regional URL, such as `gb.flow-prod.boomi.com`, that directs users to the appropriate regional AWS data centre.

To learn more about the Flow technical architecture, see [Technical architecture overview](c-flo-Techref_Architecture_b7cbf7a7-bcd0-4d1c-b926-69854df699ec.md).

Flow publishes these current IP address ranges in JSON format, to allow you to update your trusted IP listing programatically. To view the current ranges, download the .json file:

-   Download [flow-ips.json](https://documents.flow.boomi.com/flow-ips.json)


| Destination | URLs | IP addresses |
| --- | --- | --- |
| **Main/global region**<br />North America (US)<br />Located in North Virginia, USA.<br />Used by the Flow platform to connect to self-hosted connectors from any region. | • `https://flow.boomi.com/`<br />• `https://us.flow-prod.boomi.com/` | • 44.195.164.3<br />• 54.225.220.98 <br />• 75.2.114.224<br />• 99.83.211.72 |
| North America (CA)<br />Located in Montreal, Canada.<br />Used by the Flow platform to connect to self-hosted connectors in the CA region. | • `https://ca.flow-prod.boomi.com/` | • 3.97.250.139<br /> 13.248.173.230<br />• 52.60.218.35<br />• 76.223.56.71 |
| Europe (EU)<br />Located in Frankfurt, Germany.<br />Used by the Flow platform to connect to self-hosted connectors in the EU region. | • `https://eu.flow-prod.boomi.com/` | • 3.33.205.78<br />• 3.66.238.128<br />• 3.69.229.207<br />• 15.197.191.207 |
| Europe (GB)<br />Located in London, England.<br />Used by the Flow platform to connect to self-hosted connectors in the GB region. | •` https://gb.flow-prod.boomi.com/` | • 18.135.8.58<br />• 18.134.218.215<br />• 35.71.187.108<br />• 52.223.7.193 |
| Asia Pacific (AU)<br />Located in Sydney, Australia.<br />Used by the Flow platform to connect to self-hosted connectors in the AU region. | • `https://au.flow-prod.boomi.com/` | • 13.237.63.163<br />• 35.71.183.120<br />• 52.63.9.160<br />• 52.223.5.223 |
| Asia Pacific (SG)<br />Located in Singapore, Singapore.<br />Used by the Flow platform to connect to self-hosted connectors in the SG region. | • `https://sg.flow-prod.boomi.com/` | • 3.33.148.78<br />• 13.213.129.67<br />• 13.214.93.221<br />• 15.197.157.206 |


## Connections to native Flow connectors hosted by Flow

For more information on native Flow connectors, see [Connectors](c-flo-Service_Integrations_cac4d712-9607-4f24-8e70-aae48ceb27b9.md)

| Destination | URLs | IP addresses |
| --- | --- | --- |
| Flow platform hosted connectors.<br />Connections to connectors hosted by Flow, including:<br />• Azure AD (Legacy)<br />• Email (Legacy)<br />• Hub<br />• Okta (Legacy)<br />• PDF (Legacy)<br />• SAML (Legacy)<br />• SQL (Legacy)<br />• Timer (Legacy) | • `https://services.manywho.com/`<br />• `https://services-staging.manywho.com/` | • 34.195.168.124<br />• 34.199.182.26<br />• 34.226.40.201<br />• 54.76.157.111 |
| Flow platform hosted connectors<br />Connections to connectors hosted by Flow, including:<br />• Salesforce | • `https://salesforce.manywho.com/`<br />• `https://salesforce-staging.manywho.com/` | • 54.164.117.86 |