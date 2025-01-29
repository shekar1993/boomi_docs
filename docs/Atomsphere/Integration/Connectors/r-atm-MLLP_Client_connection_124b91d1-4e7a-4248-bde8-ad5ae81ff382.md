# MLLP Client connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-124b91d1-4e7a-4248-bde8-ad5ae81ff382"/>
</head>

The MLLP Client connection represents the MLLP destination for a specific trading partner or application. Your trading partner should provide the information to configure the connection and operation components.

## Settings tab

- **Host** - Sets the host on which the receiving MLLP server resides.

- **Port** - Sets the port on which the receiving MLLP server listens for MLLP requests.

- **Send Timeout** - Sets the number of seconds before the connection times out waiting for the completion of a Send operation. This setting is pre-set to 120 seconds.

- **Receive Timeout** - Sets the number of seconds before the connection times out waiting for an ACK functional acknowledgment message from the receiving MLLP server. The preset is 120 seconds. This setting does not have any effect while **Wait for Response?** is cleared in the connector operation’s **Options** tab.

- **Max Retry** - Sets the number of times the connector retries a Send operation that is timing out.

- **Fail on Timeout** - If selected, sending processes fail when an acknowledgment timeout exception occurs. This setting does not have any effect while **Wait for Response?** is cleared in the connector operation’s **Options** tab.

- **Use Persistent Connections?** - If selected, the connection is added to the connection pool and can be reused.

  - **Expire Timeout** - (Available when **Use Persistent Connections?** is selected) The number of seconds that an inactive connection can remain in the pool before it is closed and removed from the pool.

  - **Max Pool Size** - (Available when **User Persistent Connections?** is selected) The maximum number of connections that can exist at one time in the connection pool.

## SSL Options tab

- **Use Client SSL Authorization** - If selected, the client uses SSL authorization.

  - **Client SSL Certificate** - (Available when **Use Client SSL Authorization** is selected) The client's private certificate.

    :::note

    When using Client Certificate authentication with the Shared Web Server, certificates should always be unique.

    :::

- **Use Trusted SSL Certificate** - If selected, the client uses SSL/TLS to connect to the server.

  - **Trust SSL Server Certificate** - (Available when **Use Trusted SSL Certificate** is selected) The server's public certificate.

## Advanced Options tab

MLLP data frames consist of a start block character, data bytes, an end block character, and an end data character. The system defaults to the values outlined in the MLLP specification, but you can enter custom values as needed. Other characters are standard ASCII printable characters. Byte characters are numeric or hexidecimal expressions representing non-printable or special characters that you might want to use.

:::note

Configuring framing characters in the MLLP Client connection settings applies them to all documents that use the connection.

:::

- **Start Block Character** - Select the type of start block character that you want to use. If you select *Byte Character* or *Other Character*, enter the value in the text box that displays.

- **End Block Character** - Select the type of end block character that you want to use. If you select *Byte Character* or *Other Character*, enter the value in the text box that displays.

- **End Data Character** - Select the type of end data character that you want to use. If you select *Byte Character* or *Other Character*, enter the value in the text box that displays.
