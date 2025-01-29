# MQTT connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-27cb7186-50f3-4e6f-b28a-debde24ca803"/>
</head>

The MQTT connection allows you to set various properties that are required to establish a connection with the MQTT broker.

## Connection tab

The following fields appear on the Connection tab:

**MQTT Protocol Version** - 
Select the version of the MQTT protocol to be used to connect and communicate with the MQTT broker.

**Use Authentication** - 
Select to ensure that the MQTT connection requires username and password to authenticate with the MQTT broker. The default option is unchecked.

**Username** - 
The username to be used for authentication with the MQTT broker.

**Password** - 
The corresponding password to be used for authentication. This is an encrypted field.

**Use SSL Certificates** - 
Select to ensure the MQTT connection requires SSL and Client SSL certifications.

**Public SSL Certificate** - 
Select a public SSL certificate that is already uploaded as a PGP Certificate to the Boomi Enterprise Platform.

**Client SSL Certificates** - 
Select a private Client SSL certificate that is already uploaded as a PGP Certificate to the Boomi Enterprise Platform.

**Client SSL Certificate Password** - 
The corresponding password for the Client SSL certificate in this field. This is an encrypted field.

**Host** - 
The domain name or IP address of the MQTT host in this text field.

**Port** - 
The port on which the MQTT connection listens for incoming connections from an MQTT broker. The default port is 1883.

**Clean Session?** - 
Select to remove all subscriptions when the client session ends. The default selection is unchecked. When not selected, the session is treated as durable so that client subscriptions are removed upon disconnect.

**Client ID** - 
A unique ID to preserve sessions. This field is displayed when the **Clean Session?** checkbox is not selected.

**Keep Alive Timeout** - 
The interval of time (in seconds) which indicates the longest period of time that the client and broker can endure without sending a message. This value is shared with the broker.

## Browsing

This connector does not support browsing.