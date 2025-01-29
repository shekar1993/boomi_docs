# AS2 Shared Server connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-52f5c067-676d-417f-a68d-1207664ca092"/>
</head>


Use the AS2 Shared Server connector \(listen-only connector\) to accept AS2 requests in real-time and initiate Boomi Integration processes.

When a process containing this connector is deployed to an Atom, the Atom's internal AS2 web server listens for documents based on configurations made in the AS2 Shared Server operation. Because AS2 is a common communication choice for EDI and B2B integrations, the AS2 Shared Server connector is often used with a trading partner.


:::note

The AS2 Shared Server connector is included in its own Boomi Integration edition. If you want to have Trading Partner, EDI, and B2B capabilities enabled in your account, contact your Boomi representative.

:::

Unlike Web Services or SOAP, the AS2 Shared Server connector can receive generic data, often in EDI or XML, using AS2. The AS2 connector listens for inbound or event-based messages sent from trading partners and processes them immediately. Therefore, AS2 Shared Server connectors can be used only in the Start step as the initial inbound connector. AS2 listener processes deployed to an Atom, Molecule or Atom Cloud do not need to be scheduled. You can view AS2 statuses in the Listeners panel in **Manage** \> **Atom Management**. In that panel you can also pause, resume, and restart listeners.

AS2 listener processes run as General mode processes, but you can force those processes on a private Atom Cloud to use Atom workers by setting the **Default AS2 Workload** property to Low\_Latency\_Debug on the Attachment Quotas tab. Trading Partner components that use AS2 listeners will also run as Low\_Latency\_Debug.


:::note

The EDI and B2B Solutions topic describes different options and scenarios for using this connector with a trading partner.

:::


:::note

Deploying an AS2 Shared Server connector does not affect your license count. You can deploy this connector an unlimited number of times across different Atoms and environments.

:::

## Connector configuration 

Building a connector to listen for AS2 Client applications requires the configuration of two components:

-   Listen connection

-   AS2 Shared Server operation


The listen connection is managed at the Atom level and is *not* configurable within an individual process. Review the configuration requirements for the Atom's shared web server to learn more. This connector design provides shared reusability across Atoms and the ability to launch unique operations/URLs for different process actions. When an AS2 server is launched for request listening, you can develop a process to interact with virtually any system using other connectors in the Boomi Integration library.

## AS2 URL configuration 

Applications and trading partners send messages to a specific URL:

```
http://<Atom Host name or IP address>:<Port>/as2
```

Or if you are using SSL:

```
https://<Atom Host name or IP address>:<Port>/as2
```

Configure the host name and port variables in the Atom's shared web server. If your AS2 connector uses an Atom or Molecule, append the main URL with `/as2` to properly route messages. Give this URL to the sending trading partner. If you receive AS2 from multiple trading partners, you can configure the Atom's shared web server once and pair it with multiple AS2 Shared Server operations, one for each trading partner based on a unique AS2 ID.

If your AS2 connector uses a Boomi Atom Cloud, append the URL with `/as2/` and your account ID. For example:

```
https://c01-usa-east-integrate.boomi.com/as2/<AccountID>
```

If your AS2 connector uses a Boomi Atom Cloud and your account has multiple Atoms attached to the Cloud, append the URL with `/as2/` and the attached Atom’s account ID and suffix. You can find the account ID and suffix on the Atom Management page. Select the attached Atom on the left, view the Atom Info tab on the right, and find the account ID and suffix in the Instance ID field. For example:

```
https://c01-usa-east-integrate.boomi.com/as2/<AccountID.123456>
```

Similarly, if your AS2 connector uses a private Atom Cloud, append the main URL with `/as2/` and either your account ID or the attached Atom’s account ID and suffix. The suffix is needed only if your account has multiple Atoms attached to the Cloud.


:::note

Use the AS2 Shared Server connector to listen for inbound messages sent from another trading partner. Use the AS2 Client connector to send data.

:::

## Process options 

The Allow Simultaneous Executions process option is ignored for real-time processes that are deployed with the AS2 Shared Server connector.

## Prerequisites 

The AS2 Shared Server connector has the following requirements and limitations:

- All communication from the Atom to the data center uses TLS version 1.2 encryption.

    
:::note

On March 28, 2018, Boomi disabled support for TLS v1.0 on the Boomi EU and ANZ Atom Clouds and all Boomi Hub Clouds. On May 23, 2018, Boomi additionally disabled support for TLS v1.0 on the Boomi Enterprise Platform and the Boomi U.S. Atom Cloud. On October 29, 2021, Boomi disabled support for TLS v1.0 for Atoms and Molecules.

:::

-   You can use the AS2 Shared Server connector only within a deployed process. You cannot use this connector in Test mode.

-   The machine on which the Atom is installed, or the network gateway device, must have a static IP address assigned. Ask your network administrator for help with this configuration.

-   You must provide the static URL/IP address to your trading partner for a connection.

-   You must provide your trading partner with a certificate that they can use to encrypt the data they send to you. You can import an existing certificate or generate a new one within Boomi Integration.

-   You must configure your firewall to allow AS2 traffic on the specific ports that are configured in the Atom's shared web server. A common port for AS2 is 8080. The default listener port is 9090. Ask your network administrator for help in configuring the firewall.


## Tracked properties 

This connector has the following tracked properties that you can set or reference in various step parameters.



**AS2 From ID** - 
The AS2 ID of the sending entity.

**AS2 To ID** - 
The AS2 ID of the receiving entity.

**Subject** - 
The AS2 subject of the message.

**Message ID** - 
The AS2 message ID.

**File Name** - 
The inbound file name of the document.

**MIME Type** - 
The MIME type of the message.