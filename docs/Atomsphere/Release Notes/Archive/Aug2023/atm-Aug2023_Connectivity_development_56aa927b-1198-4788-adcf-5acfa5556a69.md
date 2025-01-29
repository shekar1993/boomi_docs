# Connectivity development 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-56aa927b-1198-4788-adcf-5acfa5556a69"/>
</head>


## Developer page 

**Features:**

-   Custom connector developers can bypass calling the `getObjectTypes()` function to populate the object type dropdown box by providing a list of object types in the connector descriptor instead. \(CON-7260\)

-   The import wizard adds support for processing connector descriptor provided object types. The default behavior of the getObjectTypes browse call is followed if no object types are provided in the connector descriptor. \(CON-7457\)

-   Connector developers can now search and select their object type during import to find specific objects types quickly. This feature is only available for SDK connectors. \(CON-7922\)

-   We updated the criteria for a valid descriptor upload. Providing the browse configuration and its associated object types is optional. Object types cannot be null and object IDs are mandatory. However, when the browse configuration is provided, its object types cannot be empty and its object IDs are mandatory; providing labels within object types is optional. There is a limit of 50 object types. \(CON-7259\)