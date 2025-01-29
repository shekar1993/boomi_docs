# Microsoft Azure Service Bus changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8f523ca0-16b8-4d3f-be5f-c37152de7af0"/>
</head>


## Changelog

**2024-05 (Version 24.05.0, Current)**

- Five new dynamic operation properties: **CorrelationId**, **ReplyTo**, **To**, **ScheduledEnqueueTimeUtc**, **ReplyToSessionId**. The existing operation properties have been updated to be dynamic tool. (CON-8862)

- Vulnerability issue of type Denial of Service was resolved to make the connector more secure. (CONC-2794)

- The Listen operation will utilize the domain name specified in the connection to avoid operation failure. This fix may not be backwards compatible with previous domain names. (CONC-1614)

- Namespace and domain names with invalid characters (i.e. ‘/, *, ?') will return a relevant error message instead of a NullPointerException. (CON-2638)

- Necessary runtime packages are now packaged with the connector. (CONC-2823)

- The **entityName** operation field for the Receive operation is now overridable. (CON-9451)

- The **Entity Type** dropdown box was moved above the **Allow Dynamic Entity Types** (formerly **Allow Entity Type Override**) checkbox in the import operation to allow for dynamic operation properties. (CON-8982)

**2023-11**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).

**2023-10**

- The updated version of this connector that was available during the runtime release has been removed from the platform release. If you applied this version (23.10.0) and experience any issues, you can manually revert back to the previous version (22.06.0)
