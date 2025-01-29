# Connectivity development 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-7d79b051-25b6-4d0a-a425-f3c0042a0ebc"/>
</head>


## Connector SDK

**We added the following feature:**

- Listener framework can call the SDK Connector Property Persistence API which gives access to persist, retrieve, or remove a persisted connector property. The property will be persisted in a properties file created in the container's execution folder and named using the following convention: `<process_id>-connector.properties`. The `<process_id>` is derived from the deployed listener process. An example file name is `df90d514-1656-4c96-b175-d5fafff35c75-connector.properties`.

    The properties file is overwritten every time there is a change. It will remain available until it is cleared when the process is undeployed. (CON-8896)



