# MQTT (Retired) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c2a65a2f-b27d-4519-b417-32a275d1bc02"/>
</head>

:::warning

This connector has been retired and is no longer available for production use. You should migrate to the [MQTT connector](../../Integration/Connectors/int-MQTT_connector.md) for continued support and innovation.

For more information about the Retired stage, see the [Feature release stages page](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

The MQTT (Retired) connection sets the security and communication options to connect with an MQTT broker.

## Authentication options 


**Use Authentication?** - 
When selected, the MQTT (Retired) connection uses user and password for authentication.

**User Name** - 
The name of the user on the MQTT broker. Obtaining the user name varies depending on the MQTT broker you are using.

**Password** - 
The password of the account on the MQTT broker. This password is encrypted. For enhanced security, ensure you use this password and leave the **Password \(Deprecated\)** field empty.

**Password \(Deprecated\)** - 
The password of the account on the MQTT broker. This password is not encrypted. For enhanced security, ensure you leave this field blank and enter the encrypted password in the **Password** field.

## SSL options 

**Use SSL Certifications** - 
When selected, the MQTT connection requires SSL and Client SSL certifications.

**Public SSL Certification** - 
Browse for and select a public SSL certificate.

**Client SSL Certification** - 
Browse for and select a private Client SSL certificate.

:::note

If you are connecting via MQTT to a broker that does not use a certificate signed by a trusted root authority, such as Verisign or Thawte, you need to obtain a copy of the broker's public certificate and import it into your Integration account. After you import the certificate, it is applied whenever the connector connects to that broker. If the broker does use a certificate from a trusted root authority, you do not need to import the certificate. It is applied automatically by Integration.

:::

## Communication options 

Whenever an MQTT client connects to the broker, it sets the clean session flag. This optional flag determines whether to treat the session as durable so that the client subscriptions remain after disconnecting. Any subsequent QoS 1 or QoS 2 messages are stored until the next connection.



**Host** - 
The domain name of IP address of the MQTT host.

**Port** - 
The port on which the MQTT connection listens for incoming connections from an MQTT broker. The default port is 1883.

**Clean Session?** - 
Sets whether the client requests a clean start after a disconnect:

-   If selected, the session is treated as durable so that client subscriptions are removed upon disconnect.

-   If cleared, all subscriptions are removed when the client session ends.

**Client Id** - 
The client ID obtained from the application.

**Keep Alive Timeout** - 
Sets in seconds the interval of time, which the client communicates to the broker, that is the longest period of time that the client and broker can endure without sending a message. If the interval is exceeded, the client sends an empty payload PINGREQ packet to the broker to confirm the availability of the client. If the broker is still available, it sends a PINGRESP packet.

The default is 60 seconds if no value is entered. The maximum is 18 hours, 12 minutes, 15 seconds. If you enter 0 seconds, the listener will not start.