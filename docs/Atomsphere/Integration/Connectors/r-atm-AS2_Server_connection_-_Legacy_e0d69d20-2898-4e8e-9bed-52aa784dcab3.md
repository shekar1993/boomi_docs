# AS2 Server connection - Legacy 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e0d69d20-2898-4e8e-9bed-52aa784dcab3"/>
</head>


The AS2 Server connection represents the AS2 connection on which the Atom is listening. Provide this connection information and the AS2 ID configured in the operation to your trading partner or client application who is sending data to you.


:::note

The AS2 Server connector is manageable only as a legacy connector in existing integrations. To enable AS2 listening, review the AS2 Shared Server connector which contains all required functionality.

:::

Typically, you have only one AS2 Server connection for all incoming AS2 to limit the number of open ports your firewall. You can distinguish messages from different senders by the AS2 ID configured in the operation.

## Settings tab 



**Host** - 
Host name or IP address of the machine where the Atom is deployed.

**Port** - 
Port on which the Atom listens for AS2 traffic, typically port 8080. If you are using non-SSL AS2, the URL that client applications send to begins with http://.

**SSL Port** - 
\(Optional\) Port on which the Atom listens for AS2 traffic using SSL, typically port 443. If you are using AS2 using SSL, the URL that client applications send to begins with https://.

**SSL Cert** - 
\(Optional\) If you are using AS2 using SSL, this is *your* private certificate that is used to decrypt data. Select an existing certificate or create a new one by importing a purchased certificate or generating one using Boomi Integration. You need to export the public key and give it to the client application/trading partner to encrypt data they send to you. For more information, see the linked Certificate components topic.

Contact your system administrator to coordinate the open ports you need on your firewall.