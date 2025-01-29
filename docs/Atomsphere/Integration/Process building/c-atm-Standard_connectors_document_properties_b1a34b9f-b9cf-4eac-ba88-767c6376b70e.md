# Standard connectors’ document properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b1a34b9f-b9cf-4eac-ba88-767c6376b70e"/>
</head>


For some standard connectors you can set properties that are used during processing, such as Disk file name, FTP Remote Directory, or Mail Subject.

These properties are displayed on the Process Reporting page at the document level.

:::note

Not all connectors have properties that can be retrieved or set.

:::

When setting a standard connector property, you are setting it for the *outbound* connector to which the document is to be sent. A typical use is specifying the file name before writing to a disk or FTP directory. Do this with a Set Properties step to set the appropriate standard connector property. For example, to send to a Disk connector, set the *Disk* File Name; to send to an FTP connector, set the *FTP* File Name. To send the same document to both connectors, set both properties. See the Set Properties step for more information.

When retrieving a standard connector property, the value is always taken from the *original inbound* connector used in the Start step. For example, a process retrieves a file from an FTP server. Using a Set Properties step to set the FTP File Name to a value and then referencing the FTP File Name property in a subsequent step, the returned value comes from the original FTP connection in the Start step, not the value specified in the Set Properties step.