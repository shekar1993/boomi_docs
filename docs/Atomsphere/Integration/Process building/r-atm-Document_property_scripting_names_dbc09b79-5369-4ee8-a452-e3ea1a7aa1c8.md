# Document property scripting names

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-dbc09b79-5369-4ee8-a452-e3ea1a7aa1c8"/>
</head>


Document property scripting names follow a specific pattern. Technology connector properties have slightly different patterns to differentiate the static tracked inbound property value that cannot be modified \(set by an inbound connector earlier in the process\) and the dynamic outbound property value that can be modified \(that would be used by an outbound connector later in the process\).

-   Tracked Inbound Connector Property: `connector.track.<Connector type>.<Connector property>`

    -   Example: `connector.track.disk.filename`

-   Dynamic Outbound Connector Property: `connector.dynamic.<Connector type>.<Connector property>`

    -   Example: `connector.dynamic.ftp.remoteDirectory`

-   Dynamic \(user-defined\) Document Property: `document.dynamic.userdefined.<property name>`

    -   Example: `document.dynamic.userdefined.MY PROPERTY`


Below is the list of available connector types and associated properties.

:::note

Not all connector properties are available as both tracked and dynamic properties.

:::

|Connector type|Tracked connector properties|Dynamic connector properties|
|----------------|------------------------------|------------------------------|
| as2 | None | file, name, subject |
| as2sharedserver | as2fromid, as2toid, filename, messageid, subject, mimetype | None |
| disk | filename | directory, filename |
| ftp | filename, host, movetodirectory, port, remotedirectory | filename \(available only in Send operations\), movetoDirectory \(available only in Send operations\), remoteDirectory \(available only in Send operations\) |
| jms | correlationid, destination, messageid, priority, redelivered, replyto | correlationid, destination, priority, replyto |
| mail | filename, fromaddress, host, messageId, subject, toaddress, user | filename, fromaddress, subject, toaddress |
| sap | idoctype | None |
| sftp | filename, host, movetodirectory, port, remotedirectory | filename, movetodirectory, remotedirectory |
